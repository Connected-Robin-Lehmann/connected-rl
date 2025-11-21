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
      <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-16 px-4">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 md:px-6 py-2 md:py-3 rounded-full border border-accent/20 animate-pulse">
          <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-accent animate-spin" />
          <span className="text-xs md:text-sm font-semibold text-accent">
            Website Transformation
          </span>
          <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-accent animate-spin" />
        </div>
        <h2 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Vorher vs. Nachher
        </h2>
        <p className="text-base md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Erleben Sie die dramatische Transformation Ihrer Website interaktiv
        </p>

        {/* View Mode Controls */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="bg-white/80 backdrop-blur-sm p-1.5 md:p-2 rounded-xl border border-accent/20 shadow-lg">
            <div className="flex gap-1.5 md:gap-2">
              <button
                onClick={() => setViewMode("before")}
                className={`px-3 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-200 text-xs md:text-base min-w-[80px] md:min-w-0 ${
                  viewMode === "before"
                    ? "bg-accent text-white shadow-md"
                    : "text-accent hover:bg-accent/10"
                }`}
              >
                Vorher
              </button>
              <button
                onClick={() => setViewMode("comparison")}
                className={`px-3 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-200 text-xs md:text-base min-w-[80px] md:min-w-0 ${
                  viewMode === "comparison"
                    ? "bg-accent text-white shadow-md"
                    : "text-accent hover:bg-accent/10"
                }`}
              >
                Vergleich
              </button>
              <button
                onClick={() => setViewMode("after")}
                className={`px-3 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-200 text-xs md:text-base min-w-[80px] md:min-w-0 ${
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
          <div className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm text-accent animate-bounce mb-4 md:mb-6 px-4">
            <MousePointer2 className="w-3 md:w-4 h-3 md:h-4" />
            <span className="text-center">Ziehen Sie den Slider um den Unterschied zu sehen</span>
          </div>
        )}
      </div>

      {/* Interactive Before/After Display */}
      <div className="max-w-[98vw] mx-auto mb-8 md:mb-16 px-2 md:px-0">
        <div
          ref={containerRef}
          className={`relative h-[500px] md:h-[700px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-accent/20 ${
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

            {/* Old Website Content - Poorly built, no concept */}
            <div className="min-h-[1200px] bg-white">
              {/* Top Banner - like old Geocities sites */}
              <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 p-2 text-center">
                <div className="text-sm font-bold animate-pulse">
                  🔥 WILLKOMMEN! Sie sind Besucher Nr. 000347 🔥 Neue Hotline: 0621/987654
                </div>
              </div>

              {/* Header - messy table layout */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#000080' }}>
                <tbody>
                  <tr>
                    <td width="30%" style={{ padding: '15px' }}>
                      <div style={{ fontFamily: 'Times New Roman', color: 'yellow', fontSize: '24px', fontWeight: 'bold' }}>
                        Dr. Müller
                      </div>
                      <div style={{ fontFamily: 'Arial', color: 'white', fontSize: '11px' }}>
                        Rechtsanwalt • Seit 1995
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', padding: '10px' }}>
                      <img src="https://web.archive.org/web/20091027053842im_/http://geocities.com/animated_gifs/under_construction.gif" 
                           alt="construction" 
                           style={{ width: '88px', height: '31px', display: 'inline-block' }}
                           onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Navigation as table */}
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#c0c0c0', borderBottom: '3px solid black' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '5px 15px', borderRight: '1px solid black' }}>
                      <a style={{ color: 'blue', textDecoration: 'underline', fontFamily: 'Arial', fontSize: '14px' }}>Home</a>
                    </td>
                    <td style={{ padding: '5px 15px', borderRight: '1px solid black' }}>
                      <a style={{ color: 'blue', textDecoration: 'underline', fontFamily: 'Arial', fontSize: '14px' }}>Über uns</a>
                    </td>
                    <td style={{ padding: '5px 15px', borderRight: '1px solid black' }}>
                      <a style={{ color: 'blue', textDecoration: 'underline', fontFamily: 'Arial', fontSize: '14px' }}>Leistungen</a>
                    </td>
                    <td style={{ padding: '5px 15px' }}>
                      <a style={{ color: 'blue', textDecoration: 'underline', fontFamily: 'Arial', fontSize: '14px' }}>Kontakt</a>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Main content - chaotic table layout */}
              <table width="100%" cellPadding="0" cellSpacing="10">
                <tbody>
                  <tr>
                    {/* Left sidebar */}
                    <td width="20%" valign="top" style={{ backgroundColor: '#ffffe0', border: '2px solid #800000', padding: '10px' }}>
                      <div style={{ fontFamily: 'Verdana', fontSize: '12px', fontWeight: 'bold', color: '#800000', marginBottom: '10px' }}>
                        ★ AKTUELL ★
                      </div>
                      <div style={{ fontFamily: 'Arial', fontSize: '10px', lineHeight: '1.4', marginBottom: '15px' }}>
                        Kostenlose Erstberatung! Rufen Sie jetzt an!
                      </div>
                      <div style={{ fontFamily: 'Verdana', fontSize: '12px', fontWeight: 'bold', color: '#800000', marginBottom: '10px' }}>
                        KONTAKT
                      </div>
                      <div style={{ fontFamily: 'Arial', fontSize: '10px', lineHeight: '1.6' }}>
                        Tel: 0621 / 987654<br />
                        Fax: 0621 / 987655<br />
                        Email:<br />
                        <a style={{ color: 'blue', textDecoration: 'underline', fontSize: '9px' }}>info@mueller-law.de</a>
                      </div>
                      <div style={{ marginTop: '20px', padding: '5px', backgroundColor: '#ff6600', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '11px' }}>
                        NEU: Auch Samstags!
                      </div>
                      <div style={{ marginTop: '15px', border: '1px solid #666', padding: '5px', backgroundColor: 'white' }}>
                        <div style={{ fontFamily: 'Arial', fontSize: '9px', fontWeight: 'bold', marginBottom: '5px' }}>
                          Besucherzähler:
                        </div>
                        <div style={{ fontFamily: 'Courier New', fontSize: '14px', color: 'red', fontWeight: 'bold' }}>
                          000347
                        </div>
                      </div>
                    </td>

                    {/* Main content */}
                    <td width="80%" valign="top" style={{ padding: '0 10px' }}>
                      {/* Welcome banner */}
                      <div style={{ backgroundColor: '#ffffcc', border: '3px dashed #ff0000', padding: '15px', marginBottom: '15px' }}>
                        <center>
                          <h1 style={{ fontFamily: 'Arial Black', color: '#cc0000', fontSize: '28px', margin: '0 0 10px 0' }}>
                            Herzlich Willkommen!
                          </h1>
                          <p style={{ fontFamily: 'Comic Sans MS', fontSize: '16px', color: '#000080', fontWeight: 'bold' }}>
                            🎓 Ihre Anwaltskanzlei in Mannheim 🎓
                          </p>
                        </center>
                      </div>

                      {/* Main text - no structure */}
                      <div style={{ fontFamily: 'Times New Roman', fontSize: '14px', lineHeight: '1.5', textAlign: 'justify' }}>
                        <p style={{ marginBottom: '10px' }}>
                          <b><u>Professionelle Rechtsberatung seit über 25 Jahren</u></b>
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                          Seit über 25 Jahren vertreten wir erfolgreich die Interessen unserer Mandanten in allen Rechtsbereichen. 
                          Vertrauen Sie auf unsere Erfahrung und Kompetenz! Wir sind spezialisiert auf Familienrecht, Arbeitsrecht, 
                          Strafrecht, Zivilrecht und vieles mehr.
                        </p>
                      </div>

                      {/* Random animated gif banner */}
                      <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#ff99cc', border: '5px ridge #cc00cc', textAlign: 'center' }}>
                        <span style={{ fontFamily: 'Impact', fontSize: '20px', color: '#ffffff', textShadow: '2px 2px #000000' }}>
                          ✨ KOSTENLOSE ERSTBERATUNG ✨
                        </span>
                      </div>

                      {/* Services - bad table */}
                      <table width="100%" cellPadding="8" cellSpacing="0" style={{ marginTop: '20px' }}>
                        <tbody>
                          <tr>
                            <td width="50%" style={{ backgroundColor: '#e6f2ff', border: '2px solid #0066cc', verticalAlign: 'top' }}>
                              <h3 style={{ fontFamily: 'Arial', color: '#0066cc', fontSize: '16px', margin: '0 0 8px 0' }}>
                                ⚖️ Familienrecht
                              </h3>
                              <div style={{ fontFamily: 'Verdana', fontSize: '11px' }}>
                                <p>Scheidung, Sorgerecht, Unterhalt - wir helfen Ihnen kompetent und diskret!</p>
                                <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                                  <li>Scheidungsverfahren</li>
                                  <li>Sorgerecht & Umgang</li>
                                  <li>Unterhalt & Versorgungsausgleich</li>
                                </ul>
                              </div>
                            </td>
                            <td width="50%" style={{ backgroundColor: '#fff0e6', border: '2px solid #cc6600', verticalAlign: 'top' }}>
                              <h3 style={{ fontFamily: 'Arial', color: '#cc6600', fontSize: '16px', margin: '0 0 8px 0' }}>
                                🏢 Arbeitsrecht
                              </h3>
                              <div style={{ fontFamily: 'Verdana', fontSize: '11px' }}>
                                <p>Kündigung, Abfindung, Arbeitsverträge - Ihre Rechte durchsetzen</p>
                                <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                                  <li>Kündigungsschutz</li>
                                  <li>Abfindungsverhandlungen</li>
                                  <li>Arbeitsverträge</li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Random centered content */}
                      <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <table width="90%" align="center" cellPadding="10" style={{ backgroundColor: '#ccffcc', border: '3px double #006600' }}>
                          <tbody>
                            <tr>
                              <td>
                                <div style={{ fontFamily: 'Georgia', fontSize: '18px', color: '#006600', fontWeight: 'bold', marginBottom: '10px' }}>
                                  Unsere Erfolge:
                                </div>
                                <div style={{ fontFamily: 'Arial', fontSize: '12px', textAlign: 'left' }}>
                                  ✓ Über 1000 zufriedene Mandanten<br />
                                  ✓ 95% Erfolgsquote<br />
                                  ✓ 25 Jahre Berufserfahrung<br />
                                  ✓ Transparente Kostenabrechnung<br />
                                  ✓ Persönliche Betreuung
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Testimonials - badly formatted */}
                      <div style={{ marginTop: '25px', padding: '15px', backgroundColor: '#f0f0f0', border: '1px solid #999' }}>
                        <h3 style={{ fontFamily: 'Courier New', fontSize: '16px', color: '#333', marginBottom: '10px' }}>
                          {'>>>'} Das sagen unsere Mandanten:
                        </h3>
                        <div style={{ backgroundColor: 'white', padding: '10px', marginBottom: '10px', borderLeft: '4px solid #666' }}>
                          <p style={{ fontFamily: 'Times New Roman', fontSize: '13px', fontStyle: 'italic', marginBottom: '5px' }}>
                            "Hervorragende Beratung und professionelle Abwicklung meines Scheidungsverfahrens. Sehr empfehlenswert!"
                          </p>
                          <p style={{ fontFamily: 'Arial', fontSize: '11px', fontWeight: 'bold', color: '#666' }}>
                            - Maria S., Mandantin seit 2022
                          </p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '10px', borderLeft: '4px solid #666' }}>
                          <p style={{ fontFamily: 'Times New Roman', fontSize: '13px', fontStyle: 'italic', marginBottom: '5px' }}>
                            "Kompetente Vertretung im Arbeitsrecht. Dank der Kanzlei konnte ich eine faire Abfindung erzielen."
                          </p>
                          <p style={{ fontFamily: 'Arial', fontSize: '11px', fontWeight: 'bold', color: '#666' }}>
                            - Thomas K., Mandant seit 2021
                          </p>
                        </div>
                      </div>

                      {/* Opening hours - random placement */}
                      <table width="100%" cellPadding="8" style={{ marginTop: '20px', backgroundColor: '#ffe6e6', border: '2px solid #cc0000' }}>
                        <tbody>
                          <tr>
                            <td>
                              <div style={{ fontFamily: 'Impact', fontSize: '18px', color: '#cc0000', marginBottom: '10px' }}>
                                ÖFFNUNGSZEITEN:
                              </div>
                              <div style={{ fontFamily: 'Verdana', fontSize: '12px' }}>
                                <b>Montag - Freitag:</b> 8:00 - 18:00 Uhr<br />
                                <b>Samstag:</b> 9:00 - 14:00 Uhr<br />
                                <br />
                                <span style={{ color: '#cc0000', fontWeight: 'bold' }}>
                                  ⚡ Termine auch außerhalb der Öffnungszeiten nach Vereinbarung möglich!
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Footer - centered with bad formatting */}
                      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#000080', borderTop: '5px solid gold' }}>
                <center>
                  <div style={{ fontFamily: 'Arial', fontSize: '16px', color: 'yellow', fontWeight: 'bold', marginBottom: '10px' }}>
                    📞 KONTAKTIEREN SIE UNS JETZT! 📞
                  </div>
                  <div style={{ fontFamily: 'Times New Roman', fontSize: '14px', color: 'white' }}>
                    <p>Telefon: 0621 / 987654</p>
                    <p>E-Mail: info@mueller-law.de</p>
                  </div>
                  <div style={{ marginTop: '15px' }}>
                    <button style={{ 
                      backgroundColor: 'yellow', 
                      color: 'black', 
                      padding: '10px 20px', 
                      border: '3px outset #666',
                      fontFamily: 'Arial Black',
                      fontSize: '14px',
                      cursor: 'pointer'
                    }}>
                      {'>>>'} JETZT ANRUFEN! {'<<<'}
                    </button>
                  </div>
                  <div style={{ marginTop: '20px', fontSize: '10px', color: '#cccccc', fontFamily: 'Arial' }}>
                    <p>© 2010 Rechtsanwaltskanzlei Dr. Müller | Letzte Aktualisierung: 15.03.2010</p>
                    <p style={{ fontSize: '8px' }}>Best viewed with Internet Explorer 6.0 at 1024x768 resolution</p>
                  </div>
                </center>
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
              className="absolute top-0 h-full w-1 md:w-1 bg-white shadow-lg z-30 cursor-col-resize group"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* Slider line with glow effect */}
              <div className="w-full h-full bg-gradient-to-b from-white via-accent to-white relative">
                {/* Pulsing glow */}
                <div className="absolute inset-0 bg-accent/30 blur-sm animate-pulse"></div>
              </div>

              {/* Drag handle - larger on mobile */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent group-hover:scale-125 transition-all duration-200 ${
                  isDragging ? "scale-125" : "scale-100 md:scale-90"
                }`}
              >
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-5 md:h-4 bg-accent rounded-full"></div>
                  <div className="w-0.5 h-5 md:h-4 bg-accent rounded-full"></div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Feature Comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 max-w-4xl mx-auto px-4">
          <div className="space-y-3 md:space-y-4 p-4 md:p-6 bg-destructive/5 rounded-xl border border-destructive/20">
            <h4 className="text-lg md:text-xl font-bold text-destructive flex items-center gap-2">
              <X className="w-5 md:w-6 h-5 md:h-6" />
              Probleme der alten Website
            </h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2 md:gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Überladenes Design mit grellen Farben</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Keine mobile Optimierung</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Unübersichtliche Struktur</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <X className="w-4 h-4 text-destructive flex-shrink-0" />
                <span>Veraltete Technik & schlechte Performance</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 p-4 md:p-6 bg-accent/5 rounded-xl border border-accent/20">
            <h4 className="text-lg md:text-xl font-bold text-accent flex items-center gap-2">
              <Check className="w-5 md:w-6 h-5 md:h-6" />
              Vorteile der neuen Website
            </h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-muted-foreground">
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Elegantes, warmes Farbschema</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Vollständig responsive Design</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Klare Struktur & intuitive Navigation</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Moderne Technologien & beste Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-primary rounded-xl md:rounded-2xl p-6 md:p-12 text-white mx-4 md:mx-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Bereit für Ihr Projekt?</h2>
        <p className="text-base md:text-lg mb-5 md:mb-6 opacity-90">
          Lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren
        </p>
        <Button size="lg" variant="secondary" className="text-base md:text-lg px-6 md:px-8" asChild>
          <Link to="/contact">Jetzt Beratung anfragen</Link>
        </Button>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
