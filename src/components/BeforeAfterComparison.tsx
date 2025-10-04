import { useState, useRef, useCallback } from "react";
import {
  X,
  Check,
  ArrowRight,
  Globe,
  Star,
  Phone,
  Mail,
  MousePointer2,
  Sparkles,
  Users,
  Award,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type ViewMode = "after" | "comparison" | "before";

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("comparison");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beforeScrollRef = useRef<HTMLDivElement>(null);
  const afterScrollRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current || !afterRef.current || !sliderRef.current)
        return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

      // Update DOM directly with no delays
      afterRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      sliderRef.current.style.left = `${percentage}%`;

      // Only update state when not dragging for final position
      if (!isDragging) {
        setSliderPosition(percentage);
      }
    },
    [isDragging]
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
    setShowAnimation(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Update final state position when dragging stops
    if (containerRef.current && sliderRef.current) {
      const left = sliderRef.current.style.left;
      const percentage = parseFloat(left.replace("%", ""));
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.touches[0].clientX);
    },
    [isDragging, updateSliderPosition]
  );

  const syncScroll = useCallback(
    (source: HTMLDivElement, target: HTMLDivElement) => {
      target.scrollTop = source.scrollTop;
    },
    []
  );

  const handleBeforeScroll = useCallback(() => {
    if (beforeScrollRef.current && afterScrollRef.current) {
      syncScroll(beforeScrollRef.current, afterScrollRef.current);
    }
  }, [syncScroll]);

  const handleAfterScroll = useCallback(() => {
    if (afterScrollRef.current && beforeScrollRef.current) {
      syncScroll(afterScrollRef.current, beforeScrollRef.current);
    }
  }, [syncScroll]);

  return (
    <div className="mb-20">
      {/* Attention-grabbing header */}
      <div className="text-center space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 px-6 py-3 rounded-full border border-accent/20 animate-pulse">
          <Sparkles className="w-5 h-5 text-accent animate-spin" />
          <span className="text-sm font-semibold text-accent">
            Website Transformation
          </span>
          <Sparkles className="w-5 h-5 text-accent animate-spin" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Vorher vs. Nachher
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Erleben Sie die dramatische Transformation Ihrer Website interaktiv
        </p>

        {/* View Mode Controls */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-accent/20 shadow-lg">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("before")}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                  viewMode === "before"
                    ? "bg-accent text-white shadow-md"
                    : "text-accent hover:bg-accent/10"
                }`}
              >
                Vorher
              </button>
              <button
                onClick={() => setViewMode("comparison")}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                  viewMode === "comparison"
                    ? "bg-accent text-white shadow-md"
                    : "text-accent hover:bg-accent/10"
                }`}
              >
                Vergleich
              </button>
              <button
                onClick={() => setViewMode("after")}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                  viewMode === "after"
                    ? "bg-accent text-white shadow-md"
                    : "text-accent hover:bg-accent/10"
                }`}
              >
                Nachher
              </button>
            </div>
          </div>
        </div>

        {/* Interactive instruction - only show in comparison mode */}
        {viewMode === "comparison" && (
          <div className="flex items-center justify-center gap-3 text-sm text-accent animate-bounce mb-6">
            <MousePointer2 className="w-4 h-4" />
            <span>Ziehen Sie den Slider um den Unterschied zu sehen</span>
          </div>
        )}
      </div>

      {/* Interactive Before/After Display */}
      <div className="max-w-[98vw] mx-auto mb-16">
        <div
          ref={containerRef}
          className={`relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20 ${
            viewMode === "comparison" ? "cursor-col-resize" : ""
          } select-none`}
          onMouseMove={viewMode === "comparison" ? handleMouseMove : undefined}
          onMouseUp={viewMode === "comparison" ? handleMouseUp : undefined}
          onMouseLeave={viewMode === "comparison" ? handleMouseUp : undefined}
          onTouchMove={viewMode === "comparison" ? handleTouchMove : undefined}
          onTouchEnd={viewMode === "comparison" ? handleMouseUp : undefined}
        >
          {/* Before (Old Website) - Show based on view mode */}
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

            {/* Old Website Content - Uglier design */}
            <div className="min-h-[1200px] bg-gradient-to-br from-gray-200 via-blue-100 to-gray-300">
              {/* Header with Comic Sans */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-4 md:p-6 border-b-4 border-yellow-400 shadow-lg">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  ⚖️ Rechtsanwaltskanzlei Dr. Müller ⚖️
                </h1>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                  <span className="border-2 border-yellow-400 px-2 md:px-3 py-1 bg-blue-800">HOME</span>
                  <span className="border-2 border-yellow-400 px-2 md:px-3 py-1 bg-blue-800">
                    ÜBER UNS
                  </span>
                  <span className="border-2 border-yellow-400 px-2 md:px-3 py-1 bg-blue-800">
                    LEISTUNGEN
                  </span>
                  <span className="border-2 border-yellow-400 px-2 md:px-3 py-1 bg-blue-800">KONTAKT</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-3 md:p-6">
                {/* Welcome Section with blinking text */}
                <div className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 border-4 border-red-500 p-4 md:p-6 mb-6 text-center shadow-xl">
                  <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: 'Comic Sans MS, cursive', color: '#ff0000' }}>
                    🎉 Willkommen bei Ihrer Anwaltskanzlei - Seit 1995 🎉
                  </h2>
                  <p className="text-base md:text-lg font-bold text-blue-900">Ihre Rechte sind unser Auftrag!</p>
                  <div className="mt-3 bg-red-600 text-white px-4 py-2 inline-block animate-pulse font-bold">
                    NEU: Jetzt auch Samstags geöffnet!
                  </div>
                </div>

                {/* Main Text */}
                <div className="bg-white border-4 border-blue-500 p-4 md:p-6 mb-6 shadow-lg">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-blue-900 underline" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    ⭐ Professionelle Rechtsberatung seit über 25 Jahren ⭐
                  </h3>
                  <p className="mb-4 text-sm md:text-base text-justify leading-relaxed">
                    Seit über 25 Jahren vertreten wir erfolgreich die Interessen
                    unserer Mandanten in allen Rechtsbereichen. Vertrauen Sie
                    auf unsere Erfahrung und Kompetenz! Wir sind spezialisiert
                    auf Familienrecht, Arbeitsrecht, Strafrecht, Zivilrecht und
                    vieles mehr.
                  </p>
                  <p className="font-bold text-red-600 text-base md:text-lg">
                    ☎️ Kontaktieren Sie uns noch heute für eine kostenlose
                    Erstberatung!
                  </p>
                  <div className="mt-4 bg-green-200 border-2 border-green-600 p-3 text-center">
                    <p className="font-bold text-green-800">✓ Über 1000 zufriedene Mandanten</p>
                    <p className="font-bold text-green-800">✓ 95% Erfolgsquote</p>
                    <p className="font-bold text-green-800">✓ Kostenlose Erstberatung</p>
                  </div>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-pink-200 to-pink-100 border-4 border-purple-500 p-4 shadow-lg">
                    <h4 className="text-base md:text-lg font-bold mb-2 text-purple-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      ⚖️ Familienrecht
                    </h4>
                    <p className="text-sm md:text-base mb-3">
                      Scheidung, Sorgerecht, Unterhalt - wir helfen Ihnen
                      kompetent und diskret!
                    </p>
                    <div className="mt-3 bg-blue-400 text-white p-2 text-center text-xs md:text-sm font-bold border-2 border-blue-600 animate-pulse">
                      ⭐ Kostenlose Erstberatung ⭐
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-200 to-green-100 border-4 border-orange-500 p-4 shadow-lg">
                    <h4 className="text-base md:text-lg font-bold mb-2 text-orange-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      🏢 Arbeitsrecht
                    </h4>
                    <p className="text-sm md:text-base mb-3">
                      Kündigung, Abfindung, Arbeitsverträge - Ihre Rechte
                      durchsetzen
                    </p>
                    <div className="mt-3 bg-green-500 text-white p-2 text-center text-xs md:text-sm font-bold border-2 border-green-700 animate-pulse">
                      ⏰ Auch Termine außerhalb der Geschäftszeiten
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white p-4 md:p-6 text-center border-4 border-yellow-300 shadow-2xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 animate-pulse" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    📞 Kontaktieren Sie uns JETZT! 📞
                  </h3>
                  <p className="text-lg md:text-xl font-bold mb-2">Telefon: 0621 / 987654</p>
                  <p className="text-base md:text-lg mt-2">E-Mail: info@mueller-law.de</p>
                  <div className="mt-4 bg-yellow-400 text-black px-4 py-2 inline-block font-bold border-2 border-black">
                    Rufen Sie an - Wir beraten Sie gerne!
                  </div>
                </div>

                {/* More Content for Scrolling */}
                <div className="mt-6 space-y-4">
                  <div className="bg-white border-3 border-blue-600 p-4 shadow-lg">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-blue-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      🏆 Unsere Erfolge:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                      <li>Über 1000 erfolgreich abgeschlossene Fälle</li>
                      <li>25 Jahre Berufserfahrung</li>
                      <li>Spezialisierung auf komplexe Rechtsfälle</li>
                      <li>Transparente und faire Kostenabrechnung</li>
                      <li>Persönliche Betreuung durch erfahrene Anwälte</li>
                      <li>Schnelle Reaktionszeiten</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-200 to-purple-200 border-3 border-purple-500 p-4 shadow-lg">
                    <h4 className="text-lg md:text-xl font-bold mb-3" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      ⏰ Öffnungszeiten:
                    </h4>
                    <div className="text-sm md:text-base">
                      <p className="font-bold">Montag - Freitag: 8:00 - 18:00 Uhr</p>
                      <p className="font-bold">Samstag: 9:00 - 14:00 Uhr</p>
                      <p className="mt-3 font-bold text-red-600 bg-yellow-200 p-2 border-2 border-red-600">
                        ⚡ Termine auch außerhalb der Öffnungszeiten nach
                        Vereinbarung möglich!
                      </p>
                    </div>
                  </div>

                  {/* Testimonials */}
                  <div className="bg-gradient-to-br from-green-100 to-yellow-100 border-4 border-green-500 p-4 shadow-lg">
                    <h4 className="text-lg md:text-xl font-bold mb-3 text-green-900" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      💬 Das sagen unsere Mandanten:
                    </h4>
                    <div className="space-y-3 text-sm md:text-base">
                      <div className="bg-white p-3 border-2 border-blue-400">
                        <p className="italic mb-2">"Hervorragende Beratung und professionelle Abwicklung meines Scheidungsverfahrens. Sehr empfehlenswert!"</p>
                        <p className="font-bold text-blue-900">- Maria S., Mandantin seit 2022</p>
                      </div>
                      <div className="bg-white p-3 border-2 border-blue-400">
                        <p className="italic mb-2">"Kompetente Vertretung im Arbeitsrecht. Dank der Kanzlei konnte ich eine faire Abfindung erzielen."</p>
                        <p className="font-bold text-blue-900">- Thomas K., Mandant seit 2021</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional outdated elements */}
                  <div className="bg-yellow-200 border-4 border-red-500 p-4 animate-pulse">
                    <h4 className="text-base md:text-lg font-bold text-red-600">⚠️ Wichtiger Hinweis:</h4>
                    <p className="text-xs md:text-sm mt-2 font-bold">
                      Diese Website wurde zuletzt im Jahr 2010 aktualisiert.
                      Aktuelle Informationen erhalten Sie telefonisch oder per
                      E-Mail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After (Modern Website) - Show based on view mode */}
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
                  ? `inset(0 ${100 - sliderPosition}% 0 0)`
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
                <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 p-3 md:p-6 sticky top-[45px] z-20">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg md:text-xl">M</span>
                      </div>
                      <div>
                        <h1 className="text-lg md:text-2xl font-bold text-slate-900">
                          Müller & Partner
                        </h1>
                        <p className="text-xs md:text-sm text-slate-600">Rechtsanwälte</p>
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
                <section className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
                  <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-slate-900 leading-tight">
                      Kompetente Rechtsberatung
                      <br />
                      <span className="text-slate-600">
                        mit persönlicher Betreuung
                      </span>
                    </h2>
                    <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Seit über 25 Jahren stehen wir unseren Mandanten mit
                      Expertise und Engagement zur Seite. Vertrauen Sie auf
                      unsere Erfahrung.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-lg mb-8 md:mb-16 max-w-2xl mx-auto border border-slate-200/50">
                    <div className="flex items-center justify-center gap-4 md:gap-8 text-center">
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-slate-900">
                          25+
                        </div>
                        <div className="text-xs md:text-sm text-slate-600">
                          Jahre Erfahrung
                        </div>
                      </div>
                      <div className="w-px h-8 md:h-12 bg-slate-300"></div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-slate-900">
                          1000+
                        </div>
                        <div className="text-xs md:text-sm text-slate-600">
                          Mandanten betreut
                        </div>
                      </div>
                      <div className="w-px h-8 md:h-12 bg-slate-300"></div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-slate-900">
                          95%
                        </div>
                        <div className="text-xs md:text-sm text-slate-600">
                          Erfolgsquote
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
                    <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/30 group">
                      <div className="mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xl md:text-2xl">⚖️</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">
                          Familienrecht
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3 md:mb-4">
                          Einfühlsame Beratung bei Scheidung, Sorgerecht und
                          Unterhaltsfragen. Wir finden gemeinsam die beste
                          Lösung für Ihre Familie.
                        </p>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-slate-700">
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

                    <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/30 group">
                      <div className="mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xl md:text-2xl">🏢</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">
                          Arbeitsrecht
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3 md:mb-4">
                          Professionelle Unterstützung bei allen
                          arbeitsrechtlichen Fragen. Wir setzen Ihre Rechte
                          erfolgreich durch.
                        </p>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-slate-700">
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
                    
                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
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

                    {/* Mobile: Slideshow */}
                    <div className="md:hidden relative">
                      <div className="overflow-hidden">
                        <div 
                          className="flex transition-transform duration-300 ease-in-out"
                          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                        >
                          {/* Testimonial 1 */}
                          <div className="w-full flex-shrink-0 px-4">
                            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/30">
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
                          </div>

                          {/* Testimonial 2 */}
                          <div className="w-full flex-shrink-0 px-4">
                            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/30">
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
                          </div>

                          {/* Testimonial 3 */}
                          <div className="w-full flex-shrink-0 px-4">
                            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/30">
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
                      </div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={() => setCurrentTestimonial((prev) => Math.max(0, prev - 1))}
                        disabled={currentTestimonial === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-200/50 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-6 h-6 text-slate-900" />
                      </button>
                      <button
                        onClick={() => setCurrentTestimonial((prev) => Math.min(2, prev + 1))}
                        disabled={currentTestimonial === 2}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg border border-slate-200/50 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-6 h-6 text-slate-900" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="flex justify-center gap-2 mt-6">
                        {[0, 1, 2].map((index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentTestimonial === index
                                ? "bg-slate-900 w-8"
                                : "bg-slate-300"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
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
                  <div className="bg-slate-900 text-white p-6 md:p-12 rounded-2xl text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                      Vereinbaren Sie einen Termin
                    </h3>
                    <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                      Gerne besprechen wir Ihr Anliegen in einem persönlichen
                      Gespräch. Die Erstberatung ist für Sie kostenfrei.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                        <div className="text-left">
                          <div className="font-semibold text-sm md:text-base">Telefon</div>
                          <div className="text-slate-300 text-sm md:text-base">0621 / 987654</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                        <div className="text-left">
                          <div className="font-semibold text-sm md:text-base">E-Mail</div>
                          <div className="text-slate-300 text-xs md:text-base">
                            info@mueller-rechtsanwaelte.de
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-white text-slate-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors inline-flex items-center gap-2 md:gap-3 text-sm md:text-base">
                      <span>Beratungstermin vereinbaren</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
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

          {/* Slider Handle - only visible in comparison mode */}
          {viewMode === "comparison" && (
            <div
              ref={sliderRef}
              className="absolute top-0 h-full w-1 bg-white shadow-lg z-30 cursor-col-resize group"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* Slider line with glow effect */}
              <div className="w-full h-full bg-gradient-to-b from-white via-accent to-white relative">
                {/* Pulsing glow */}
                <div className="absolute inset-0 bg-accent/30 blur-sm animate-pulse"></div>
              </div>

              {/* Drag handle */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent group-hover:scale-125 transition-all duration-200 ${
                  isDragging ? "scale-125" : "scale-90"
                }`}
              >
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-accent rounded-full"></div>
                  <div className="w-0.5 h-4 bg-accent rounded-full"></div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-8 -left-16 text-center">
                <div className="bg-white text-slate-900 px-3 py-1 rounded-lg shadow-lg text-sm font-semibold border border-slate-200">
                  Vorher
                </div>
              </div>
              <div className="absolute top-8 -right-16 text-center">
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
