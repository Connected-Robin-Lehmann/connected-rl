
import { X, Check, ArrowRight, Code, Shield } from "lucide-react";

const BeforeAfterComparison = () => {
  return (
    <div className="mb-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Vorher vs. Nachher</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sehen Sie den Unterschied zwischen veralteten und modernen Webdesigns
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Vorher - Schlechtes Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-destructive font-semibold text-lg">
            <X className="w-6 h-6" />
            Veraltetes Design
          </div>
          
          <div className="border-2 border-destructive/20 rounded-lg overflow-hidden">
            {/* Header - schlecht */}
            <div className="bg-gray-300 p-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-xs text-gray-600">alte-website.de</div>
            </div>
            
            {/* Schlechtes Design - Same content but poor styling */}
            <div className="bg-gray-100 min-h-[400px]">
              {/* Schlechter Header */}
              <div className="bg-red-600 text-white p-4 text-center">
                <h3 className="text-xl font-bold">CONNECTED</h3>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                  <span>HOME</span>
                  <span>LEISTUNGEN</span>
                  <span>KONTAKT</span>
                </div>
              </div>
              
              {/* Schlechter Content */}
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-red-600">WEBENTWICKLUNG</h4>
                <p className="text-sm mb-4">Professionelle Websites für Ihr Unternehmen. Moderne Lösungen.</p>
                
                <div className="bg-yellow-300 border-2 border-black p-3 mb-4">
                  <p className="text-xs font-bold">KOSTENLOSE BERATUNG! JETZT KONTAKT!</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-200 p-2 text-xs border border-black">
                    <h5 className="font-bold">Webdesign</h5>
                    <p>Moderne Websites</p>
                  </div>
                  <div className="bg-green-200 p-2 text-xs border border-black">
                    <h5 className="font-bold">Betreuung</h5>
                    <p>Langfristige Pflege</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Veraltete Farbschemen
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Keine mobile Optimierung
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Schlechte Benutzerführung
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Überladenes Design
            </div>
          </div>
        </div>

        {/* Nachher - Gutes Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-semibold text-lg">
            <Check className="w-6 h-6" />
            Modernes Design
          </div>
          
          <div className="border-2 border-accent/20 rounded-lg overflow-hidden">
            {/* Header - gut */}
            <div className="bg-gray-300 p-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-xs text-gray-600">neue-website.de</div>
            </div>
            
            {/* Gutes Design - Same content but modern styling */}
            <div className="bg-white min-h-[400px] relative overflow-hidden">
              {/* Moderner Header */}
              <div className="bg-gradient-primary text-white p-4 sm:p-6 relative">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold">Connected</h3>
                  <div className="flex flex-wrap gap-3 sm:gap-6 text-sm">
                    <span className="hover:text-white/80 transition-colors cursor-pointer">Home</span>
                    <span className="hover:text-white/80 transition-colors cursor-pointer">Leistungen</span>
                    <span className="hover:text-white/80 transition-colors cursor-pointer">Kontakt</span>
                  </div>
                </div>
              </div>
              
              {/* Moderner Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
                    Professionelle Webentwicklung
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Moderne, responsive Websites für Ihr Unternehmen. Professionelle Lösungen mit persönlicher Betreuung.
                  </p>
                </div>
                
                {/* Hero CTA */}
                <div className="bg-gradient-card p-4 sm:p-6 rounded-xl shadow-card mb-6 sm:mb-8 text-center border border-accent/10">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium text-accent">Kostenlose Erstberatung verfügbar</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Unverbindlich • Persönlich • Professionell</p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-gradient-card p-4 rounded-lg shadow-card hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm sm:text-base">Webdesign</h5>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">Moderne & responsive</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-card p-4 rounded-lg shadow-card hover:shadow-glow transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm sm:text-base">Betreuung</h5>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">Langfristige Pflege</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <button className="bg-gradient-primary text-white px-6 sm:px-8 py-3 rounded-lg text-sm font-medium shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group">
                    <span>Jetzt Kontakt aufnehmen</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-accent" />
                      <span>SSL-Sicher</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-accent" />
                      <span>DSGVO-konform</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-accent" />
                      <span>Wartungsservice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Moderne Farbpalette & Gradients
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Vollständig responsive
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Intuitive Navigation
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Klare Struktur & Weißraum
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-border flex-1"></div>
          <ArrowRight className="w-8 h-8 text-accent" />
          <div className="h-px bg-border flex-1"></div>
        </div>
        <p className="text-lg font-semibold">So verwandeln wir Ihre Website</p>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
