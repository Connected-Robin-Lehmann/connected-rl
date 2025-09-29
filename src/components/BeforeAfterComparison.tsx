import { useState, useRef, useCallback, useEffect } from "react";
import {
  Check,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MousePointer2,
  Sparkles,
  Users,
  Award,
  Shield,
  Clock,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type ViewMode = "after" | "comparison" | "before";

const BeforeAfterComparison = () => {
  const [sliderPct, setSliderPct] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("comparison");

  const containerRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beforeScrollRef = useRef<HTMLDivElement>(null);
  const afterScrollRef = useRef<HTMLDivElement>(null);

  // Live value while dragging (avoid re-renders)
  const livePctRef = useRef(sliderPct);
  const rafRef = useRef<number | null>(null);

  // Scroll sync guard
  const syncingRef = useRef<"before" | "after" | null>(null);

  // Reduced motion detection
  const prefersReducedMotion = useRef<boolean>(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  const clampPct = (pct: number) => Math.max(0, Math.min(100, pct));

  const paint = useCallback((pct: number) => {
    if (!afterRef.current || !sliderRef.current) return;
    afterRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    sliderRef.current.style.left = `${pct}%`;
  }, []);

  const clientXToPct = useCallback((clientX: number) => {
    if (!containerRef.current) return livePctRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    return clampPct((x / rect.width) * 100);
  }, []);

  // Pointer handlers (mouse/touch/pen unified)
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (viewMode !== "comparison") return;
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      setIsDragging(true);
    },
    [viewMode]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || viewMode !== "comparison") return;
      const next = clientXToPct(e.clientX);
      livePctRef.current = next;

      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          paint(livePctRef.current);
          rafRef.current = null;
        });
      }
    },
    [clientXToPct, isDragging, paint, viewMode]
  );

  const endDrag = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    setSliderPct(livePctRef.current); // commit
  }, [isDragging]);

  // Keyboard accessibility for the handle
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (viewMode !== "comparison") return;
      const step = e.shiftKey ? 5 : 1;
      if (e.key === "ArrowLeft") {
        const next = clampPct(livePctRef.current - step);
        livePctRef.current = next;
        paint(next);
        setSliderPct(next);
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        const next = clampPct(livePctRef.current + step);
        livePctRef.current = next;
        paint(next);
        setSliderPct(next);
        e.preventDefault();
      } else if (e.key === "Home") {
        livePctRef.current = 0;
        paint(0);
        setSliderPct(0);
        e.preventDefault();
      } else if (e.key === "End") {
        livePctRef.current = 100;
        paint(100);
        setSliderPct(100);
        e.preventDefault();
      }
    },
    [paint, viewMode]
  );

  // Initial paint & viewMode changes
  useEffect(() => {
    paint(viewMode === "comparison" ? sliderPct : 100);
  }, [paint, sliderPct, viewMode]);

  // Keep percentage consistent on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => {
      paint(livePctRef.current);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [paint]);

  // Scroll sync (guard against feedback loops)
  const handleBeforeScroll = useCallback(() => {
    if (!beforeScrollRef.current || !afterScrollRef.current) return;
    if (syncingRef.current === "after") {
      syncingRef.current = null;
      return;
    }
    syncingRef.current = "before";
    afterScrollRef.current.scrollTop = beforeScrollRef.current.scrollTop;
  }, []);

  const handleAfterScroll = useCallback(() => {
    if (!beforeScrollRef.current || !afterScrollRef.current) return;
    if (syncingRef.current === "before") {
      syncingRef.current = null;
      return;
    }
    syncingRef.current = "after";
    beforeScrollRef.current.scrollTop = afterScrollRef.current.scrollTop;
  }, []);

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="text-center space-y-6 mb-16">
        <div
          className={`inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full border border-accent/20 ${
            prefersReducedMotion ? "" : "animate-pulse"
          }`}
        >
          <Sparkles
            className={`w-5 h-5 text-accent ${
              prefersReducedMotion ? "" : "animate-spin"
            }`}
          />
          <span className="text-sm font-semibold text-accent">
            Website Transformation
          </span>
          <Sparkles
            className={`w-5 h-5 text-accent ${
              prefersReducedMotion ? "" : "animate-spin"
            }`}
          />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Vorher vs. Nachher
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Erleben Sie die dramatische Transformation Ihrer Website interaktiv
        </p>

        {viewMode === "comparison" && (
          <div
            className={`flex items-center justify-center gap-3 text-sm text-accent ${
              prefersReducedMotion ? "" : "animate-bounce"
            } mb-6`}
          >
            <MousePointer2 className="w-4 h-4" />
            <span>Ziehen Sie den Slider um den Unterschied zu sehen</span>
          </div>
        )}

        {/* View Mode Controls */}
        <div className="flex justify-center mb-8">
          <div
            className="bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-accent/20 shadow-lg"
            role="tablist"
            aria-label="Ansicht wählen"
          >
            <div className="flex gap-2">
              {(["before", "comparison", "after"] as ViewMode[]).map((m) => (
                <button
                  key={m}
                  role="tab"
                  aria-selected={viewMode === m}
                  onClick={() => setViewMode(m)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    viewMode === m
                      ? "bg-accent text-white shadow-md"
                      : "text-accent hover:bg-accent/10"
                  }`}
                >
                  {m === "before"
                    ? "Vorher"
                    : m === "after"
                    ? "Nachher"
                    : "Vergleich"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Before/After Display */}
      <div className="max-w-[95vw] mx-auto mb-16">
        <div
          ref={containerRef}
          className={`relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20 ${
            viewMode === "comparison" ? "cursor-col-resize" : ""
          } select-none`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          {/* BEFORE (Old Website) */}
          <div
            ref={beforeScrollRef}
            className={`absolute inset-0 bg-slate-100 overflow-y-auto ${
              viewMode === "after" ? "hidden" : ""
            }`}
            onScroll={handleBeforeScroll}
          >
            {/* Browser Header - Bad */}
            <div className="bg-gray-400 p-3 flex items-center gap-2 border-b border-gray-500 sticky top-0 z-10">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="ml-6 text-sm text-gray-700 font-mono">
                müller-law-office.com
              </div>
            </div>

            {/* Old Website Content */}
            <div className="min-h-[1200px] bg-gray-100">
              {/* Header */}
              <div className="bg-blue-900 text-white p-6 border-b-2 border-gray-400">
                <h1 className="text-3xl font-bold mb-4 text-center">
                  Rechtsanwaltskanzlei Dr. Müller
                </h1>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="border border-white px-3 py-1">HOME</span>
                  <span className="border border-white px-3 py-1">
                    ÜBER UNS
                  </span>
                  <span className="border border-white px-3 py-1">
                    LEISTUNGEN
                  </span>
                  <span className="border border-white px-3 py-1">KONTAKT</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6">
                {/* Welcome Section */}
                <div className="bg-white border-2 border-gray-400 p-6 mb-6 text-center">
                  <h2 className="text-2xl font-bold mb-3">
                    Willkommen bei Ihrer Anwaltskanzlei - Seit 1995
                  </h2>
                  <p className="text-lg">Ihre Rechte sind unser Auftrag!</p>
                </div>

                {/* Main Text */}
                <div className="bg-white border border-gray-400 p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-900 underline">
                    Professionelle Rechtsberatung seit über 25 Jahren
                  </h3>
                  <p className="mb-4 text-justify">
                    Seit über 25 Jahren vertreten wir erfolgreich die Interessen
                    unserer Mandanten in allen Rechtsbereichen. Vertrauen Sie
                    auf unsere Erfahrung und Kompetenz! Wir sind spezialisiert
                    auf Familienrecht, Arbeitsrecht, Strafrecht, Zivilrecht und
                    vieles mehr.
                  </p>
                  <p className="font-bold">
                    Kontaktieren Sie uns noch heute für eine kostenlose
                    Erstberatung!
                  </p>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-200 border border-gray-500 p-4">
                    <h4 className="text-lg font-bold mb-2">Familienrecht</h4>
                    <p>
                      Scheidung, Sorgerecht, Unterhalt - wir helfen Ihnen
                      kompetent und diskret!
                    </p>
                    <div className="mt-3 bg-blue-200 p-2 text-center text-sm font-bold">
                      Kostenlose Erstberatung
                    </div>
                  </div>
                  <div className="bg-gray-200 border border-gray-500 p-4">
                    <h4 className="text-lg font-bold mb-2">Arbeitsrecht</h4>
                    <p>
                      Kündigung, Abfindung, Arbeitsverträge - Ihre Rechte
                      durchsetzen
                    </p>
                    <div className="mt-3 bg-green-200 p-2 text-center text-sm font-bold">
                      Auch Termine außerhalb der Geschäftszeiten
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-blue-800 text-white p-6 text-center border border-gray-400">
                  <h3 className="text-2xl font-bold mb-3">
                    Kontaktieren Sie uns
                  </h3>
                  <p className="text-xl">Telefon: 0621 / 987654</p>
                  <p className="text-lg mt-2">E-Mail: info@mueller-law.de</p>
                </div>

                {/* More Content for Scrolling */}
                <div className="mt-6 space-y-4">
                  <div className="bg-white border border-gray-400 p-4">
                    <h4 className="text-xl font-bold mb-3">Unsere Erfolge:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Über 1000 erfolgreich abgeschlossene Fälle</li>
                      <li>25 Jahre Berufserfahrung</li>
                      <li>Spezialisierung auf komplexe Rechtsfälle</li>
                      <li>Transparente und faire Kostenabrechnung</li>
                    </ul>
                  </div>

                  <div className="bg-gray-200 border border-gray-500 p-4">
                    <h4 className="text-xl font-bold mb-3">Öffnungszeiten:</h4>
                    <div>
                      <p>Montag - Freitag: 8:00 - 18:00 Uhr</p>
                      <p>Samstag: 9:00 - 14:00 Uhr</p>
                      <p className="mt-2 font-bold">
                        Termine auch außerhalb der Öffnungszeiten nach
                        Vereinbarung möglich!
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-100 border-2 border-yellow-400 p-4">
                    <h4 className="text-lg font-bold">Wichtiger Hinweis:</h4>
                    <p className="text-sm mt-2">
                      Diese Website wurde zuletzt im Jahr 2010 aktualisiert.
                      Aktuelle Informationen erhalten Sie telefonisch oder per
                      E-Mail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AFTER (Modern Website) */}
          <div
            ref={afterRef}
            className={`absolute inset-0 bg-white ${
              viewMode === "before" ? "hidden" : ""
            } ${
              isDragging || viewMode !== "comparison"
                ? ""
                : "transition-all duration-300"
            }`}
            style={{
              clipPath:
                viewMode === "comparison"
                  ? `inset(0 ${100 - sliderPct}% 0 0)`
                  : "inset(0 0% 0 0)",
            }}
          >
            <div
              ref={afterScrollRef}
              className="h-full overflow-y-auto"
              onScroll={handleAfterScroll}
            >
              {/* Browser Header - Good */}
              <div className="bg-white p-3 flex items-center gap-2 border-b border-slate-200 sticky top-0 z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="ml-6 text-sm text-slate-600 font-mono">
                  mueller-rechtsanwaelte.de
                </div>
              </div>

              {/* Modern Law Firm Website */}
              <div className="min-h-[1200px] bg-gradient-to-br from-slate-50 to-gray-50">
                {/* Modern Header */}
                <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 p-6 sticky top-[45px] z-20">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">M</span>
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-slate-900">
                          Müller & Partner
                        </h1>
                        <p className="text-sm text-slate-600">Rechtsanwälte</p>
                      </div>
                    </div>
                    <nav className="hidden md:flex gap-8 text-slate-700">
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">
                        Home
                      </a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">
                        Leistungen
                      </a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">
                        Team
                      </a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">
                        Kontakt
                      </a>
                    </nav>
                  </div>
                </header>

                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
                      Kompetente Rechtsberatung
                      <br />
                      <span className="text-slate-600">
                        mit persönlicher Betreuung
                      </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Seit über 25 Jahren stehen wir unseren Mandanten mit
                      Expertise und Engagement zur Seite. Vertrauen Sie auf
                      unsere Erfahrung.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-16 max-w-2xl mx-auto border border-slate-200/50">
                    <div className="flex items-center justify-center gap-8 text-center">
                      <div>
                        <div className="text-3xl font-bold text-slate-900">
                          25+
                        </div>
                        <div className="text-sm text-slate-600">
                          Jahre Erfahrung
                        </div>
                      </div>
                      <div className="w-px h-12 bg-slate-300"></div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">
                          1000+
                        </div>
                        <div className="text-sm text-slate-600">
                          Mandanten betreut
                        </div>
                      </div>
                      <div className="w-px h-12 bg-slate-300"></div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">
                          95%
                        </div>
                        <div className="text-sm text-slate-600">
                          Erfolgsquote
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/30 group">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-2xl">⚖️</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          Familienrecht
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          Einfühlsame Beratung bei Scheidung, Sorgerecht und
                          Unterhaltsfragen. Wir finden gemeinsam die beste
                          Lösung für Ihre Familie.
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span>Scheidungsverfahren</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span>Sorgerecht & Umgang</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span>Unterhalt & Versorgungsausgleich</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/30 group">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-2xl">🏢</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          Arbeitsrecht
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          Professionelle Unterstützung bei allen
                          arbeitsrechtlichen Fragen. Wir setzen Ihre Rechte
                          erfolgreich durch.
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span>Kündigungsschutz</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span>Abfindungsverhandlungen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                            <span>Arbeitsverträge</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Client Testimonials */}
                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">
                      Was unsere Mandanten sagen
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/30">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-slate-600 mb-6 italic">
                          "Hervorragende Beratung und professionelle Abwicklung
                          meines Scheidungsverfahrens. Sehr empfehlenswert!"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">MS</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">
                              Maria S.
                            </div>
                            <div className="text-sm text-slate-600">
                              Mandantin seit 2022
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/30">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-slate-600 mb-6 italic">
                          "Kompetente Vertretung im Arbeitsrecht. Dank der
                          Kanzlei konnte ich eine faire Abfindung erzielen."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">TK</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">
                              Thomas K.
                            </div>
                            <div className="text-sm text-slate-600">
                              Mandant seit 2021
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/30">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-slate-600 mb-6 italic">
                          "Zuverlässig, verständnisvoll und erfolgreich. Genau
                          so sollte Rechtsberatung sein."
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">AL</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">
                              Andrea L.
                            </div>
                            <div className="text-sm text-slate-600">
                              Mandantin seit 2020
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">
                      Warum Müller & Partner?
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900">
                          Persönliche Betreuung
                        </h4>
                        <p className="text-slate-600">
                          Jeder Mandant erhält eine individuelle und persönliche
                          Betreuung durch erfahrene Anwälte.
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900">
                          Bewährte Expertise
                        </h4>
                        <p className="text-slate-600">
                          25+ Jahre Erfahrung und über 1000 erfolgreich
                          abgeschlossene Fälle sprechen für sich.
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Shield className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900">
                          Diskretion & Vertrauen
                        </h4>
                        <p className="text-slate-600">
                          Ihre Angelegenheiten werden streng vertraulich
                          behandelt und mit höchster Diskretion bearbeitet.
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Clock className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-slate-900">
                          Schnelle Reaktion
                        </h4>
                        <p className="text-slate-600">
                          Kurze Wartezeiten und schnelle Rückmeldungen - Ihre
                          Zeit ist uns wichtig.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="bg-slate-900 text-white p-12 rounded-2xl text-center">
                    <h3 className="text-3xl font-bold mb-6">
                      Vereinbaren Sie einen Termin
                    </h3>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                      Gerne besprechen wir Ihr Anliegen in einem persönlichen
                      Gespräch. Die Erstberatung ist für Sie kostenfrei.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                      <div className="flex items-center gap-3">
                        <Phone className="w-6 h-6 text-slate-400" />
                        <div>
                          <div className="font-semibold">Telefon</div>
                          <div className="text-slate-300">0621 / 987654</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-slate-400" />
                        <div>
                          <div className="font-semibold">E-Mail</div>
                          <div className="text-slate-300">
                            info@mueller-rechtsanwaelte.de
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-3">
                      <span>Beratungstermin vereinbaren</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Additional Content for Scrolling */}
                  <div className="mt-16 space-y-12">
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/30">
                      <h4 className="text-2xl font-bold text-slate-900 mb-6">
                        Öffnungszeiten
                      </h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-3">
                            Kanzlei
                          </h5>
                          <div className="space-y-2 text-slate-600">
                            <div className="flex justify-between">
                              <span>Montag - Donnerstag</span>
                              <span>8:00 - 17:00 Uhr</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Freitag</span>
                              <span>8:00 - 15:00 Uhr</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-3">
                            Termine
                          </h5>
                          <p className="text-slate-600">
                            Termine auch außerhalb der Geschäftszeiten nach
                            Vereinbarung möglich.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/30">
                      <h4 className="text-2xl font-bold text-slate-900 mb-6">
                        Warum Müller & Partner?
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Check className="w-6 h-6 text-slate-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">
                            Erfahrung
                          </h5>
                          <p className="text-slate-600 text-sm">
                            Über 25 Jahre Praxis in verschiedenen Rechtsgebieten
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Star className="w-6 h-6 text-slate-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">
                            Qualität
                          </h5>
                          <p className="text-slate-600 text-sm">
                            Höchste Standards in Beratung und Vertretung
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6 text-slate-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">
                            Erreichbarkeit
                          </h5>
                          <p className="text-slate-600 text-sm">
                            Persönlicher Ansprechpartner für alle Fragen
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* HANDLE */}
          {viewMode === "comparison" && (
            <div
              ref={sliderRef}
              className="absolute top-0 h-full w-1 bg-white shadow-lg z-30 cursor-col-resize group"
              style={{ left: `${sliderPct}%` }}
              role="slider"
              aria-label="Vorher/Nachher-Regler"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderPct)}
              tabIndex={0}
              onKeyDown={onKeyDown}
            >
              <div className="w-full h-full bg-gradient-to-b from-white via-accent to-white relative">
                {!prefersReducedMotion && (
                  <div
                    className="absolute inset-0 bg-accent/30 blur-sm animate-pulse"
                    aria-hidden="true"
                  ></div>
                )}
              </div>

              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent group-hover:scale-125 transition-all duration-200 ${
                  isDragging ? "scale-125" : "scale-90"
                }`}
              >
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-accent rounded-full"></div>
                  <div className="w-0.5 h-4 bg-accent rounded-full"></div>
                </div>
              </div>

              <div
                className="absolute top-8 -left-16 text-center"
                aria-hidden="true"
              >
                <div className="bg-white text-slate-900 px-3 py-1 rounded-lg shadow-lg text-sm font-semibold border border-slate-200">
                  Vorher
                </div>
              </div>
              <div
                className="absolute top-8 -right-16 text-center"
                aria-hidden="true"
              >
                <div className="bg-white text-slate-900 px-3 py-1 rounded-lg shadow-lg text-sm font-semibold border border-slate-200">
                  Nachher
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Feature Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="space-y-4 p-6 bg-destructive/5 rounded-xl border border-destructive/20">
            <h4 className="text-xl font-bold text-destructive flex items-center gap-2">
              <X className="w-6 h-6" />
              Probleme der alten Website
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Überladenes Design mit grellen Farben</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Keine mobile Optimierung</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Unübersichtliche Struktur</span>
              </div>
              <div className="flex items-center gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Veraltete Technik & schlechte Performance</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-6 bg-accent/5 rounded-xl border border-accent/20">
            <h4 className="text-xl font-bold text-accent flex items-center gap-2">
              <Check className="w-6 h-6" />
              Vorteile der neuen Website
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Elegantes, warmes Farbschema</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Vollständig responsive Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Klare Struktur & intuitive Navigation</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Moderne Technologien & beste Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Projekt?</h2>
        <p className="text-lg mb-6 opacity-90">
          Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
          <Link to="/contact">Jetzt Beratung anfragen</Link>
        </Button>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
