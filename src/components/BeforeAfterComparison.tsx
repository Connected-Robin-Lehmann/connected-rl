
import { X, Check, ArrowRight, Code } from "lucide-react";

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
            <div className="bg-white min-h-[400px]">
              {/* Moderner Header */}
              <div className="bg-gradient-primary text-white p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Connected</h3>
                  <div className="hidden md:flex gap-6 text-sm">
                    <span>Home</span>
                    <span>Leistungen</span>
                    <span>Kontakt</span>
                  </div>
                </div>
              </div>
              
              {/* Moderner Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">Webentwicklung</h4>
                  <p className="text-muted-foreground">Professionelle Websites für Ihr Unternehmen. Moderne Lösungen.</p>
                </div>
                
                <div className="bg-gradient-card p-4 rounded-lg shadow-card mb-6 text-center">
                  <p className="text-sm font-medium text-accent">Kostenlose Beratung verfügbar</p>
                </div>
                
                <div className="grid gap-4 mb-6">
                  <div className="bg-gradient-card p-4 rounded-lg shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Webdesign</h5>
                        <p className="text-sm text-muted-foreground">Moderne Websites</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-card p-4 rounded-lg shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold">Betreuung</h5>
                        <p className="text-sm text-muted-foreground">Langfristige Pflege</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-gradient-primary text-white px-6 py-2 rounded-lg text-sm font-medium shadow-card hover:shadow-glow transition-shadow">
                    Jetzt Kontakt aufnehmen
                  </button>
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
