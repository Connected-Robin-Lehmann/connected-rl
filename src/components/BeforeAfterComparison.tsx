import { useState, useRef, useCallback } from "react";
import { X, Check, ArrowRight, Globe, Star, Phone, Mail, MousePointer2, Sparkles } from "lucide-react";

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beforeScrollRef = useRef<HTMLDivElement>(null);
  const afterScrollRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current || !afterRef.current || !sliderRef.current) return;

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
  }, [isDragging]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
    setShowAnimation(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Update final state position when dragging stops
    if (containerRef.current && sliderRef.current) {
      const left = sliderRef.current.style.left;
      const percentage = parseFloat(left.replace('%', ''));
      setSliderPosition(percentage);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  }, [isDragging, updateSliderPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  }, [isDragging, updateSliderPosition]);

  const syncScroll = useCallback((source: HTMLDivElement, target: HTMLDivElement) => {
    target.scrollTop = source.scrollTop;
  }, []);

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
          <span className="text-sm font-semibold text-accent">Website Transformation</span>
          <Sparkles className="w-5 h-5 text-accent animate-spin" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Vorher vs. Nachher
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Erleben Sie die dramatische Transformation Ihrer Website interaktiv
        </p>
        
        {/* Interactive instruction */}
        <div className="flex items-center justify-center gap-3 text-sm text-accent animate-bounce">
          <MousePointer2 className="w-4 h-4" />
          <span>Ziehen Sie den Slider um den Unterschied zu sehen</span>
        </div>
      </div>

      {/* Interactive Before/After Slider */}
      <div className="max-w-[95vw] mx-auto mb-16">
        <div 
          ref={containerRef}
          className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none border-4 border-accent/20"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Before (Old Website) - Full Width Background */}
          <div 
            ref={beforeScrollRef}
            className="absolute inset-0 bg-slate-100 overflow-y-auto"
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
            <div className="min-h-[1200px] bg-gradient-to-b from-slate-100 to-gray-200">
              {/* Header */}
              <div className="bg-blue-800 text-white p-8 text-center border-b-4 border-yellow-400">
                <h1 className="text-4xl font-bold text-yellow-300 mb-4">
                  RECHTSANWALTSKANZLEI DR. MÜLLER
                </h1>
                <div className="flex justify-center gap-8 text-lg">
                  <span className="border-2 border-white px-4 py-2">HOME</span>
                  <span className="border-2 border-white px-4 py-2">ÜBER UNS</span>
                  <span className="border-2 border-white px-4 py-2">LEISTUNGEN</span>
                  <span className="border-2 border-white px-4 py-2">KONTAKT</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-8">
                {/* Welcome Banner */}
                <div className="bg-red-600 text-white p-6 text-center mb-8 border-4 border-black shadow-lg">
                  <h2 className="text-3xl font-bold animate-pulse">
                    *** WILLKOMMEN BEI IHREM ANWALT *** SEIT 1995 ***
                  </h2>
                </div>

                {/* Main Text */}
                <div className="bg-white border-4 border-blue-800 p-8 mb-8">
                  <h3 className="text-2xl font-bold text-red-700 underline mb-4">
                    IHRE RECHTE SIND UNSER AUFTRAG!
                  </h3>
                  <p className="text-lg mb-4 leading-tight">
                    Seit über 25 Jahren vertreten wir erfolgreich die Interessen unserer Mandanten in allen Rechtsbereichen. 
                    Vertrauen Sie auf unsere Erfahrung und Kompetenz!
                  </p>
                  <p className="text-lg mb-4">
                    Wir sind spezialisiert auf Familienrecht, Arbeitsrecht, Strafrecht, Zivilrecht und vieles mehr.
                    Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung!
                  </p>
                </div>

                {/* Services */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-200 border-4 border-red-500 p-6">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">Familienrecht</h4>
                    <p className="text-lg">Scheidung, Sorgerecht, Unterhalt - wir helfen Ihnen!</p>
                    <div className="mt-4 bg-green-400 p-2 text-center font-bold">
                      KOSTENLOSE BERATUNG!
                    </div>
                  </div>
                  <div className="bg-cyan-200 border-4 border-purple-500 p-6">
                    <h4 className="text-xl font-bold text-red-800 mb-3">Arbeitsrecht</h4>
                    <p className="text-lg">Kündigung, Abfindung, Arbeitsverträge</p>
                    <div className="mt-4 bg-orange-400 p-2 text-center font-bold">
                      24/7 ERREICHBAR!
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 text-center border-4 border-black">
                  <h3 className="text-3xl font-bold mb-4">RUFEN SIE JETZT AN!</h3>
                  <p className="text-2xl font-bold">Tel: 0621 / 987654</p>
                  <p className="text-xl mt-2">Email: info@mueller-law.de</p>
                </div>

                {/* More Content for Scrolling */}
                <div className="mt-8 space-y-6">
                  <div className="bg-pink-200 border-4 border-green-600 p-6">
                    <h4 className="text-2xl font-bold text-purple-800">Unsere Erfolge:</h4>
                    <ul className="list-disc list-inside text-lg mt-4 space-y-2">
                      <li>Über 1000 erfolgreiche Fälle</li>
                      <li>25 Jahre Erfahrung</li>
                      <li>Spezialisiert auf schwierige Fälle</li>
                      <li>Faire Preise - Transparente Abrechnung</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-300 border-4 border-blue-600 p-6">
                    <h4 className="text-2xl font-bold text-red-800">Öffnungszeiten:</h4>
                    <div className="text-lg mt-4">
                      <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
                      <p>Sa: 9:00 - 14:00 Uhr</p>
                      <p>Termine auch außerhalb der Öffnungszeiten möglich!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After (Modern Website) - Clipped by slider */}
          <div 
            ref={afterRef}
            className={`absolute inset-0 bg-white ${isDragging ? '' : 'transition-all duration-300'}`}
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
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
                <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 p-6 sticky top-[52px] z-20">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">M</span>
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-slate-900">Müller & Partner</h1>
                        <p className="text-sm text-slate-600">Rechtsanwälte</p>
                      </div>
                    </div>
                    <nav className="hidden md:flex gap-8 text-slate-700">
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">Home</a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">Leistungen</a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">Team</a>
                      <a className="hover:text-slate-900 transition-colors cursor-pointer font-medium">Kontakt</a>
                    </nav>
                  </div>
                </header>

                {/* Hero Section */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                  <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-6 text-slate-900 leading-tight">
                      Kompetente Rechtsberatung<br />
                      <span className="text-slate-600">mit persönlicher Betreuung</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Seit über 25 Jahren stehen wir unseren Mandanten mit Expertise und 
                      Engagement zur Seite. Vertrauen Sie auf unsere Erfahrung.
                    </p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-16 max-w-2xl mx-auto border border-slate-200/50">
                    <div className="flex items-center justify-center gap-8 text-center">
                      <div>
                        <div className="text-3xl font-bold text-slate-900">25+</div>
                        <div className="text-sm text-slate-600">Jahre Erfahrung</div>
                      </div>
                      <div className="w-px h-12 bg-slate-300"></div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">1000+</div>
                        <div className="text-sm text-slate-600">Mandanten betreut</div>
                      </div>
                      <div className="w-px h-12 bg-slate-300"></div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">95%</div>
                        <div className="text-sm text-slate-600">Erfolgsquote</div>
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
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Familienrecht</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          Einfühlsame Beratung bei Scheidung, Sorgerecht und Unterhaltsfragen. 
                          Wir finden gemeinsam die beste Lösung für Ihre Familie.
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
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Arbeitsrecht</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          Professionelle Unterstützung bei allen arbeitsrechtlichen Fragen. 
                          Wir setzen Ihre Rechte erfolgreich durch.
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

                  {/* Contact Section */}
                  <div className="bg-slate-900 text-white p-12 rounded-2xl text-center">
                    <h3 className="text-3xl font-bold mb-6">Vereinbaren Sie einen Termin</h3>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                      Gerne besprechen wir Ihr Anliegen in einem persönlichen Gespräch. 
                      Die Erstberatung ist für Sie kostenfrei.
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
                          <div className="text-slate-300">info@mueller-rechtsanwaelte.de</div>
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
                      <h4 className="text-2xl font-bold text-slate-900 mb-6">Öffnungszeiten</h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-semibold text-slate-900 mb-3">Kanzlei</h5>
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
                          <h5 className="font-semibold text-slate-900 mb-3">Termine</h5>
                          <p className="text-slate-600">
                            Termine auch außerhalb der Geschäftszeiten 
                            nach Vereinbarung möglich.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-200/30">
                      <h4 className="text-2xl font-bold text-slate-900 mb-6">Warum Müller & Partner?</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Check className="w-6 h-6 text-slate-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">Erfahrung</h5>
                          <p className="text-slate-600 text-sm">Über 25 Jahre Praxis in verschiedenen Rechtsgebieten</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Star className="w-6 h-6 text-slate-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">Qualität</h5>
                          <p className="text-slate-600 text-sm">Höchste Standards in Beratung und Vertretung</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6 text-slate-600" />
                          </div>
                          <h5 className="font-semibold text-slate-900 mb-2">Erreichbarkeit</h5>
                          <p className="text-slate-600 text-sm">Persönlicher Ansprechpartner für alle Fragen</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            ref={sliderRef}
            className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-primary cursor-col-resize z-10 ${showAnimation ? 'animate-pulse' : ''}`}
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 hover:w-12 hover:h-12 bg-white rounded-full shadow-lg border-2 hover:border-4 border-accent flex items-center justify-center transition-all duration-200">
              <div className="w-4 h-4 hover:w-6 hover:h-6 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center transition-all duration-200">
                <ArrowRight className="w-2 h-2 hover:w-3 hover:h-3 text-white transform rotate-90 transition-all duration-200" />
              </div>
            </div>
          </div>
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
      <div className="text-center bg-gradient-to-r from-accent/10 to-primary/10 p-12 rounded-2xl border border-accent/20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Bereit für Ihre Website-Transformation?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Lassen Sie uns gemeinsam Ihre veraltete Website in eine moderne, 
            professionelle Online-Präsenz verwandeln, die Ihre Kunden begeistert.
          </p>
          <button className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            <span>Kostenloses Beratungsgespräch</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
