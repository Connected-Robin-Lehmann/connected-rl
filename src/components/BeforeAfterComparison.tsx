import { X, Check, ArrowRight, Globe, Star, Phone, Mail } from "lucide-react";

const BeforeAfterComparison = () => {
  return (
    <div className="mb-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Vorher vs. Nachher</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sehen Sie die Transformation von veralteten zu modernen Websites
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Vorher - Schlechtes Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-destructive font-semibold text-lg">
            <X className="w-6 h-6" />
            Veraltetes Design (2010er Jahre)
          </div>

          <div className="border-2 border-destructive/20 rounded-lg overflow-hidden">
            {/* Browser Header - schlecht */}
            <div className="bg-gray-300 p-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-xs text-gray-600">
                altebäckerei-rutz.de
              </div>
            </div>

            {/* Schlechtes Design */}
            <div className="bg-yellow-100 min-h-[450px] relative">
              {/* Schlechter Header */}
              <div className="bg-orange-600 text-white p-3 text-center relative">
                <h3 className="text-lg font-bold text-yellow-200 drop-shadow-lg">
                  RUTZ
                </h3>
                <div className="flex justify-center gap-2 mt-1 text-xs text-yellow-100">
                  <span className="border border-yellow-200 px-1">HOME</span>
                  <span className="border border-yellow-200 px-1">
                    PRODUKTE
                  </span>
                  <span className="border border-yellow-200 px-1">KONTAKT</span>
                </div>
              </div>

              {/* Schlechter Content */}
              <div className="p-3">
                <div className="bg-red-500 text-white p-2 text-center mb-3 border-2 border-black rotate-1">
                  <p className="text-xs font-bold animate-pulse">
                    *** FRISCHE BRÖTCHEN TÄGLICH ***
                  </p>
                </div>

                <h4 className="text-base font-bold mb-2 text-red-700 underline">
                  WILLKOMMEN IN UNSERER BÄCKEREI!
                </h4>
                <p className="text-xs mb-3 text-justify">
                  Seit 1985 backen wir für Sie die besten Brötchen der Stadt.
                  Besuchen Sie uns!
                </p>

                <div className="bg-lime-300 border-4 border-red-500 p-2 mb-3 -rotate-1">
                  <p className="text-xs font-bold text-red-800 text-center">
                    SONDERANGEBOT! 10% RABATT! NUR HEUTE!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-pink-200 p-2 text-xs border-2 border-purple-500">
                    <h5 className="font-bold text-blue-700">Brötchen</h5>
                    <p className="text-purple-800">Ab 0,35€</p>
                  </div>
                  <div className="bg-cyan-200 p-2 text-xs border-2 border-green-500">
                    <h5 className="font-bold text-orange-700">Kuchen</h5>
                    <p className="text-red-800">Hausgemacht!</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-1 text-xs font-bold border-2 border-black">
                    BESUCHEN SIE UNS JETZT!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Überladenes Design mit grellen Farben
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Keine mobile Optimierung
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Unübersichtliche Struktur
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
              Veraltete Technik & schlechte UX
            </div>
          </div>
        </div>

        {/* Nachher - Gutes Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-semibold text-lg">
            <Check className="w-6 h-6" />
            Modernes Design (2024)
          </div>

          <div className="border-2 border-accent/20 rounded-lg overflow-hidden">
            {/* Browser Header - gut */}
            <div className="bg-gray-300 p-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-xs text-gray-600">
                baeckerei-rutz.de
              </div>
            </div>

            {/* Modernes Design */}
            <div className="bg-white min-h-[450px] relative overflow-hidden">
              {/* Moderner Header */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200/50 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-900">
                      Rutz
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-amber-700">
                    <span className="hover:text-amber-900 transition-colors cursor-pointer">
                      Start
                    </span>
                    <span className="hover:text-amber-900 transition-colors cursor-pointer">
                      Produkte
                    </span>
                    <span className="hover:text-amber-900 transition-colors cursor-pointer">
                      Kontakt
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Section */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6">
                <div className="text-center mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 text-amber-900">
                    Traditionsbäckerei seit 1985
                  </h4>
                  <p className="text-amber-700 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Handwerklich gebackene Spezialitäten aus besten regionalen
                    Zutaten
                  </p>
                </div>

                {/* Trust Badge */}
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm mb-6 text-center border border-amber-200/50">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                  <p className="text-xs text-amber-700">
                    Täglich frisch • Familientradition • Regional
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-amber-200/30">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs">🥖</span>
                      </div>
                      <h5 className="font-semibold text-amber-900 text-sm">
                        Brötchen
                      </h5>
                      <p className="text-xs text-amber-700">ab 0,35€</p>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-amber-200/30">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs">🥧</span>
                      </div>
                      <h5 className="font-semibold text-amber-900 text-sm">
                        Kuchen
                      </h5>
                      <p className="text-xs text-amber-700">hausgemacht</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-4">
                  <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                    <span>Öffnungszeiten ansehen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs text-amber-700">
                  <div className="flex items-center gap-1 justify-center">
                    <Phone className="w-3 h-3" />
                    <span>0621 / 123456</span>
                  </div>
                  <div className="flex items-center gap-1 justify-center">
                    <Mail className="w-3 h-3" />
                    <span>info@baeckerei-rutz.de</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Elegantes, warmes Farbschema
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Vollständig responsive Design
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Klare Struktur & intuitive Navigation
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Moderne Technologien & beste Performance
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-border flex-1 max-w-32"></div>
          <div className="bg-gradient-primary p-3 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
          <div className="h-px bg-border flex-1 max-w-32"></div>
        </div>
        <h3 className="text-xl font-bold mb-2">Von alt zu modern</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          So verwandeln wir veraltete Websites in moderne, professionelle
          Online-Präsenzen, die Ihre Kunden begeistern und Ihr Geschäft
          voranbringen.
        </p>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;
