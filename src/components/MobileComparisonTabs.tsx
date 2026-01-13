import { useState } from "react";
import { Star, Sparkles, MousePointer2 } from "lucide-react";

type TabMode = "before" | "after";

const MobileComparisonTabs = () => {
  const [activeTab, setActiveTab] = useState<TabMode>("before");

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="text-center space-y-3 mb-6">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-primary/10 px-4 py-2 rounded-full border border-accent/20 animate-pulse">
          <Sparkles className="w-4 h-4 text-accent animate-spin" />
          <span className="text-xs font-semibold text-accent">Website Transformation</span>
          <Sparkles className="w-4 h-4 text-accent animate-spin" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Vorher vs. Nachher
        </h2>
        <p className="text-sm text-muted-foreground">
          Erleben Sie die dramatische Transformation
        </p>
      </div>

      {/* Tab Controls */}
      <div className="flex justify-center mb-4">
        <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-xl border border-accent/20 shadow-lg">
          <div className="flex gap-1.5">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm ${
                activeTab === "before"
                  ? "bg-accent text-white shadow-md"
                  : "text-accent hover:bg-accent/10"
              }`}
            >
              Vorher
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm ${
                activeTab === "after"
                  ? "bg-accent text-white shadow-md"
                  : "text-accent hover:bg-accent/10"
              }`}
            >
              Nachher
            </button>
          </div>
        </div>
      </div>

      {/* Hint */}
      <div className="flex items-center justify-center gap-2 text-xs text-accent mb-4">
        <MousePointer2 className="w-3 h-3" />
        <span>Tippe auf die Tabs um zu wechseln</span>
      </div>

      {/* Content Container - Full Width & Taller */}
      <div className="mx-auto">
        <div className="relative h-[calc(100vh-280px)] min-h-[500px] max-h-[700px] rounded-xl overflow-hidden shadow-2xl border-2 border-accent/20">
          {/* Before Content */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              activeTab === "before" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="h-full bg-slate-100 overflow-y-auto">
              {/* Browser Header */}
              <div className="bg-gray-400 p-2.5 flex items-center gap-2 sticky top-0 z-10 border-b border-gray-500">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-xs text-gray-700 font-mono truncate">
                  müller-law-office.com
                </div>
              </div>

              {/* Old Website Content - Matching Desktop */}
              <div className="bg-white min-h-[1200px]">
                {/* Top Banner */}
                <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 p-2 text-center">
                  <div className="text-xs font-bold animate-pulse">
                    🔥 WILLKOMMEN! Sie sind Besucher Nr. 000347 🔥 Neue Hotline: 0621/987654
                  </div>
                </div>

                {/* Header */}
                <div className="bg-[#000080] p-3">
                  <div className="text-yellow-300 font-bold text-lg" style={{ fontFamily: 'Times New Roman' }}>
                    Dr. Müller
                  </div>
                  <div className="text-white text-xs">Rechtsanwalt • Seit 1995</div>
                </div>

                {/* Navigation */}
                <div className="bg-[#c0c0c0] p-2 border-b-2 border-black">
                  <div className="flex gap-4 text-xs text-blue-600 underline flex-wrap">
                    <span>Home</span>
                    <span>Über uns</span>
                    <span>Leistungen</span>
                    <span>Kontakt</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col md:flex-row">
                  {/* Sidebar */}
                  <div className="bg-[#ffffe0] border-2 border-[#800000] p-3 m-2">
                    <div className="text-[#800000] font-bold text-sm mb-2" style={{ fontFamily: 'Verdana' }}>
                      ★ AKTUELL ★
                    </div>
                    <div className="text-xs mb-3" style={{ fontFamily: 'Arial' }}>
                      Kostenlose Erstberatung! Rufen Sie jetzt an!
                    </div>
                    <div className="text-[#800000] font-bold text-sm mb-2" style={{ fontFamily: 'Verdana' }}>
                      KONTAKT
                    </div>
                    <div className="text-xs leading-relaxed" style={{ fontFamily: 'Arial' }}>
                      Tel: 0621 / 987654<br />
                      Fax: 0621 / 987655<br />
                      <a className="text-blue-600 underline text-[10px]">info@mueller-law.de</a>
                    </div>
                    <div className="mt-3 p-2 bg-[#ff6600] text-white text-center font-bold text-xs">
                      NEU: Auch Samstags!
                    </div>
                    <div className="mt-3 border border-gray-500 p-2 bg-white">
                      <div className="text-[9px] font-bold mb-1" style={{ fontFamily: 'Arial' }}>
                        Besucherzähler:
                      </div>
                      <div className="text-red-600 font-bold text-sm" style={{ fontFamily: 'Courier New' }}>
                        000347
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-2">
                    {/* Welcome Banner */}
                    <div className="bg-[#ffffcc] border-2 border-dashed border-red-500 p-3 mb-3">
                      <div className="text-center">
                        <h1 className="text-red-700 font-bold text-xl mb-1" style={{ fontFamily: 'Arial Black' }}>
                          Herzlich Willkommen!
                        </h1>
                        <p className="text-[#000080] text-sm font-bold" style={{ fontFamily: 'Comic Sans MS' }}>
                          🎓 Ihre Anwaltskanzlei in Mannheim 🎓
                        </p>
                      </div>
                    </div>

                    {/* Main Text */}
                    <div className="mb-3" style={{ fontFamily: 'Times New Roman' }}>
                      <p className="text-sm font-bold underline mb-2">Professionelle Rechtsberatung seit über 25 Jahren</p>
                      <p className="text-xs text-justify">
                        Seit über 25 Jahren vertreten wir erfolgreich die Interessen unserer Mandanten in allen Rechtsbereichen.
                        Vertrauen Sie auf unsere Erfahrung und Kompetenz!
                      </p>
                    </div>

                    {/* Flashy Banner */}
                    <div className="p-2 bg-[#ff99cc] border-4 text-center mb-3" style={{ borderStyle: 'ridge', borderColor: '#cc00cc' }}>
                      <span className="text-white font-bold text-sm" style={{ textShadow: '1px 1px black', fontFamily: 'Impact' }}>
                        ✨ KOSTENLOSE ERSTBERATUNG ✨
                      </span>
                    </div>

                    {/* Services */}
                    <div className="grid grid-cols-1 gap-2 mb-3">
                      <div className="bg-[#e6f2ff] border-2 border-[#0066cc] p-2">
                        <h3 className="text-[#0066cc] font-bold text-sm mb-1" style={{ fontFamily: 'Arial' }}>
                          ⚖️ Familienrecht
                        </h3>
                        <p className="text-xs" style={{ fontFamily: 'Verdana' }}>
                          Scheidung, Sorgerecht, Unterhalt - wir helfen Ihnen!
                        </p>
                      </div>
                      <div className="bg-[#fff0e6] border-2 border-[#cc6600] p-2">
                        <h3 className="text-[#cc6600] font-bold text-sm mb-1" style={{ fontFamily: 'Arial' }}>
                          🏢 Arbeitsrecht
                        </h3>
                        <p className="text-xs" style={{ fontFamily: 'Verdana' }}>
                          Kündigung, Abfindung, Arbeitsverträge
                        </p>
                      </div>
                    </div>

                    {/* Success Box */}
                    <div className="bg-[#ccffcc] border-2 border-[#006600] p-3 mb-3" style={{ borderStyle: 'double' }}>
                      <div className="text-[#006600] font-bold text-sm mb-2" style={{ fontFamily: 'Georgia' }}>
                        Unsere Erfolge:
                      </div>
                      <div className="text-xs text-left" style={{ fontFamily: 'Arial' }}>
                        ✓ Über 1000 zufriedene Mandanten<br />
                        ✓ 95% Erfolgsquote<br />
                        ✓ 25 Jahre Berufserfahrung
                      </div>
                    </div>

                    {/* Testimonials */}
                    <div className="bg-[#f0f0f0] border border-gray-500 p-3 mb-3">
                      <h3 className="text-sm mb-2" style={{ fontFamily: 'Courier New' }}>
                        {'>>>'} Das sagen unsere Mandanten:
                      </h3>
                      <div className="bg-white p-2 border-l-4 border-gray-500 mb-2">
                        <p className="text-xs italic mb-1" style={{ fontFamily: 'Times New Roman' }}>
                          "Hervorragende Beratung und professionelle Abwicklung!"
                        </p>
                        <p className="text-[10px] font-bold text-gray-600" style={{ fontFamily: 'Arial' }}>
                          - Maria S., Mandantin seit 2022
                        </p>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-[#ffe6e6] border-2 border-red-600 p-3 mb-3">
                      <div className="text-red-600 font-bold text-sm mb-2" style={{ fontFamily: 'Impact' }}>
                        ÖFFNUNGSZEITEN:
                      </div>
                      <div className="text-xs" style={{ fontFamily: 'Verdana' }}>
                        <b>Mo-Fr:</b> 8:00 - 18:00 Uhr<br />
                        <b>Sa:</b> 9:00 - 14:00 Uhr
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-[#000080] p-4 border-t-4 border-yellow-400">
                  <div className="text-center">
                    <div className="text-yellow-300 font-bold text-sm mb-2" style={{ fontFamily: 'Arial' }}>
                      📞 KONTAKTIEREN SIE UNS JETZT! 📞
                    </div>
                    <div className="text-white text-xs mb-3" style={{ fontFamily: 'Times New Roman' }}>
                      <p>Telefon: 0621 / 987654</p>
                      <p>E-Mail: info@mueller-law.de</p>
                    </div>
                    <button className="bg-yellow-400 text-black px-4 py-2 font-bold text-sm" style={{ border: '3px outset #666', fontFamily: 'Arial Black' }}>
                      {'>>>'} JETZT ANRUFEN! {'<<<'}
                    </button>
                    <div className="mt-3 text-[8px] text-gray-400" style={{ fontFamily: 'Arial' }}>
                      © 2010 Rechtsanwaltskanzlei Dr. Müller | Letzte Aktualisierung: 15.03.2010
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After Content */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              activeTab === "after" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="h-full bg-slate-50 overflow-y-auto">
              {/* Browser Header */}
              <div className="bg-white p-2.5 flex items-center gap-2 border-b border-slate-200 sticky top-0 z-10">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-xs text-slate-600 font-mono truncate">
                  mueller-rechtsanwaelte.de
                </div>
              </div>

              {/* Modern Website Content - Matching Desktop */}
              <div className="min-h-[1200px] bg-gradient-to-br from-slate-50 to-gray-50">
                {/* Modern Header */}
                <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 p-3 sticky top-[37px] z-20">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">M</span>
                      </div>
                      <div>
                        <h1 className="text-base font-bold text-slate-900">Müller & Partner</h1>
                        <p className="text-[10px] text-slate-600">Rechtsanwälte</p>
                      </div>
                    </div>
                    <nav className="flex gap-3 text-xs text-slate-700">
                      <a className="hover:text-slate-900 transition-colors cursor-pointer">Home</a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer">Leistungen</a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer">Kontakt</a>
                    </nav>
                  </div>
                </header>

                {/* Hero Section */}
                <section className="px-4 py-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-3 text-slate-900 leading-tight">
                      Kompetente Rechtsberatung
                      <br />
                      <span className="text-slate-600">mit persönlicher Betreuung</span>
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Seit über 25 Jahren stehen wir unseren Mandanten mit Expertise und Engagement zur Seite.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg mb-6 border border-slate-200/50">
                    <div className="flex items-center justify-center gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-slate-900">25+</div>
                        <div className="text-[10px] text-slate-600">Jahre Erfahrung</div>
                      </div>
                      <div className="w-px h-8 bg-slate-300"></div>
                      <div>
                        <div className="text-xl font-bold text-slate-900">1000+</div>
                        <div className="text-[10px] text-slate-600">Mandanten</div>
                      </div>
                      <div className="w-px h-8 bg-slate-300"></div>
                      <div>
                        <div className="text-xl font-bold text-slate-900">95%</div>
                        <div className="text-[10px] text-slate-600">Erfolgsquote</div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-3 mb-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200/30">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg">⚖️</span>
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 mb-1">Familienrecht</h3>
                          <p className="text-xs text-slate-600 mb-2">
                            Einfühlsame Beratung bei Scheidung, Sorgerecht und Unterhalt.
                          </p>
                          <ul className="space-y-1 text-xs text-slate-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                              <span>Scheidungsverfahren</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                              <span>Sorgerecht & Umgang</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200/30">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg">🏢</span>
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-slate-900 mb-1">Arbeitsrecht</h3>
                          <p className="text-xs text-slate-600 mb-2">
                            Professionelle Unterstützung bei allen arbeitsrechtlichen Fragen.
                          </p>
                          <ul className="space-y-1 text-xs text-slate-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                              <span>Kündigungsschutz</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                              <span>Abfindungsverhandlungen</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-center mb-4 text-slate-900">
                      Was unsere Mandanten sagen
                    </h3>
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200/30">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-600 mb-4 italic">
                        "Hervorragende Beratung und professionelle Abwicklung meines Scheidungsverfahrens. Sehr empfehlenswert!"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">MS</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900 text-sm">Maria S.</div>
                          <div className="text-xs text-slate-600">Mandantin seit 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-2xl text-center">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Kostenlose Erstberatung
                    </h3>
                    <p className="text-sm text-slate-300 mb-4">
                      Kontaktieren Sie uns für ein unverbindliches Gespräch
                    </p>
                    <button className="bg-white text-slate-900 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors">
                      Termin vereinbaren
                    </button>
                  </div>
                </section>

                {/* Modern Footer */}
                <footer className="bg-slate-900 p-4 mt-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">M</span>
                      </div>
                      <span className="text-white font-semibold text-sm">Müller & Partner</span>
                    </div>
                    <div className="text-slate-400 text-xs mb-2">
                      <p>Tel: 0621 / 987654</p>
                      <p>info@mueller-rechtsanwaelte.de</p>
                    </div>
                    <div className="text-slate-500 text-[10px]">
                      © 2024 Müller & Partner Rechtsanwälte
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileComparisonTabs;
