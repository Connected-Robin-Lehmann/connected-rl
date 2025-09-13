import { useState, useRef, useCallback } from "react";
import { X, Check, ArrowRight, Globe, Star, Phone, Mail, MousePointer2, Sparkles } from "lucide-react";

const BeforeAfterComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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
      <div className="max-w-7xl mx-auto mb-16">
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
          <div className="absolute inset-0 bg-yellow-100">
            {/* Browser Header - Bad */}
            <div className="bg-gray-300 p-3 flex items-center gap-2 border-b">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="ml-6 text-sm text-gray-600 font-mono">
                altebäckerei-rutz.de
              </div>
            </div>

            {/* Bad Design Content */}
            <div className="p-6 h-full bg-gradient-to-br from-yellow-100 to-orange-200">
              <div className="bg-orange-600 text-white p-6 text-center mb-6 transform rotate-1 shadow-lg">
                <h3 className="text-3xl font-bold text-yellow-200 drop-shadow-lg mb-2">
                  RUTZ BÄCKEREI
                </h3>
                <div className="flex justify-center gap-4 text-lg text-yellow-100">
                  <span className="border-2 border-yellow-200 px-3 py-1 transform -rotate-1">HOME</span>
                  <span className="border-2 border-yellow-200 px-3 py-1 transform rotate-1">PRODUKTE</span>
                  <span className="border-2 border-yellow-200 px-3 py-1 transform -rotate-1">KONTAKT</span>
                </div>
              </div>

              <div className="bg-red-500 text-white p-4 text-center mb-6 border-4 border-black transform -rotate-1 shadow-xl">
                <p className="text-xl font-bold animate-pulse">
                  *** FRISCHE BRÖTCHEN TÄGLICH *** SONDERANGEBOT ***
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-red-700 underline">
                    WILLKOMMEN IN UNSERER BÄCKEREI!
                  </h4>
                  <p className="text-lg leading-relaxed">
                    Seit 1985 backen wir für Sie die besten Brötchen der Stadt. 
                    Besuchen Sie uns und überzeugen Sie sich selbst!
                  </p>
                  
                  <div className="bg-lime-300 border-4 border-red-500 p-4 transform rotate-1 shadow-lg">
                    <p className="text-lg font-bold text-red-800 text-center">
                      SONDERANGEBOT! 10% RABATT! NUR HEUTE!
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-pink-200 p-4 border-4 border-purple-500 transform -rotate-1">
                    <h5 className="text-xl font-bold text-blue-700">Brötchen</h5>
                    <p className="text-lg text-purple-800">Ab 0,35€</p>
                  </div>
                  <div className="bg-cyan-200 p-4 border-4 border-green-500 transform rotate-1">
                    <h5 className="text-xl font-bold text-orange-700">Kuchen</h5>
                    <p className="text-lg text-red-800">Hausgemacht!</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-4 text-xl font-bold border-4 border-black transform rotate-1 shadow-xl">
                  BESUCHEN SIE UNS JETZT!
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
            {/* Browser Header - Good */}
            <div className="bg-slate-50 p-3 flex items-center gap-2 border-b border-slate-200">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="ml-6 text-sm text-slate-600 font-mono">
                baeckerei-rutz.de
              </div>
            </div>

            {/* Modern Design Content */}
            <div className="h-full bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
              {/* Modern Header */}
              <div className="bg-white/80 backdrop-blur-sm border-b border-amber-200/50 p-6">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-amber-900">Rutz</h3>
                  </div>
                  <nav className="hidden md:flex gap-8 text-amber-700">
                    <span className="hover:text-amber-900 transition-colors cursor-pointer font-medium">Start</span>
                    <span className="hover:text-amber-900 transition-colors cursor-pointer font-medium">Produkte</span>
                    <span className="hover:text-amber-900 transition-colors cursor-pointer font-medium">Kontakt</span>
                  </nav>
                </div>
              </div>

              {/* Hero Section */}
              <div className="max-w-6xl mx-auto p-8">
                <div className="text-center mb-12">
                  <h4 className="text-5xl font-bold mb-6 text-amber-900 leading-tight">
                    Traditionsbäckerei seit 1985
                  </h4>
                  <p className="text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed">
                    Handwerklich gebackene Spezialitäten aus besten regionalen Zutaten - 
                    jeden Tag frisch für Sie zubereitet
                  </p>
                </div>

                {/* Trust Badge */}
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-12 max-w-md mx-auto border border-amber-200/50">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-center text-amber-700 font-medium">
                    Täglich frisch • Familientradition • Regional
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/30 group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white text-2xl">🥖</span>
                      </div>
                      <h5 className="text-xl font-bold text-amber-900 mb-2">Brötchen</h5>
                      <p className="text-amber-700">ab 0,35€</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/30 group">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-white text-2xl">🥧</span>
                      </div>
                      <h5 className="text-xl font-bold text-amber-900 mb-2">Kuchen</h5>
                      <p className="text-amber-700">hausgemacht</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-8">
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                    <span>Öffnungszeiten ansehen</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex justify-center gap-8 text-amber-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">0621 / 123456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">info@baeckerei-rutz.de</span>
                  </div>
                </div>
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
