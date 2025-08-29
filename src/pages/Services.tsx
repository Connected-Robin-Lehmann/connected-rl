
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Settings, Users, ArrowRight, X, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Webdesign & Entwicklung",
      description: "Moderne, responsive Websites mit benutzerfreundlichem Design und optimaler Performance.",
      features: [
        "Responsive Design für alle Geräte",
        "SEO-optimierte Strukturen",
        "Schnelle Ladezeiten",
        "Barrierefreie Gestaltung",
        "Content Management Systeme"
      ]
    },
    {
      icon: Settings,
      title: "Wartung & Updates",
      description: "Kontinuierliche Pflege und Aktualisierung Ihrer Website für maximale Sicherheit und Aktualität.",
      features: [
        "Regelmäßige Sicherheitsupdates",
        "Performance-Optimierung",
        "Backup & Recovery",
        "Bug-Fixes & Verbesserungen",
        "Technische Überwachung"
      ]
    },
    {
      icon: Users,
      title: "Management & Moderation",
      description: "Professionelle Betreuung Ihrer Online-Präsenz mit persönlichem Service und schneller Reaktion.",
      features: [
        "Content-Management",
        "Social Media Integration",
        "Analytics & Reporting",
        "Persönlicher Ansprechpartner",
        "Schneller Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Unsere Leistungen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionelle Webentwicklung und -betreuung – von der ersten Idee bis zur langfristigen Pflege
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vorher/Nachher Vergleich */}
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
                
                {/* Schlechtes Design */}
                <div className="bg-gray-100 min-h-[400px]">
                  {/* Schlechter Header */}
                  <div className="bg-red-600 text-white p-4 text-center">
                    <h3 className="text-xl font-bold">MEINE FIRMA</h3>
                    <div className="flex justify-center gap-4 mt-2 text-sm">
                      <span>HOME</span>
                      <span>ÜBER UNS</span>
                      <span>KONTAKT</span>
                    </div>
                  </div>
                  
                  {/* Schlechter Content */}
                  <div className="p-4">
                    <h4 className="text-lg font-bold mb-2 text-red-600">WILLKOMMEN!</h4>
                    <p className="text-sm mb-4">Dies ist unsere Website. Hier finden Sie alles über unser Unternehmen.</p>
                    
                    <div className="bg-yellow-300 border-2 border-black p-3 mb-4">
                      <p className="text-xs font-bold">NEUE ANGEBOTE! KLICKEN SIE HIER!</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-200 p-2 text-xs">
                        <h5 className="font-bold">Service 1</h5>
                        <p>Beschreibung...</p>
                      </div>
                      <div className="bg-green-200 p-2 text-xs">
                        <h5 className="font-bold">Service 2</h5>
                        <p>Beschreibung...</p>
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
                
                {/* Gutes Design */}
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
                      <h4 className="text-2xl font-bold mb-2">Professionelle Webentwicklung</h4>
                      <p className="text-muted-foreground">Moderne, responsive Websites für Ihr Unternehmen</p>
                    </div>
                    
                    <div className="grid gap-4 mb-6">
                      <div className="bg-gradient-card p-4 rounded-lg shadow-card">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                            <Code className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold">Webdesign</h5>
                            <p className="text-sm text-muted-foreground">Modernes Design</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <button className="bg-gradient-primary text-white px-6 py-2 rounded-lg text-sm font-medium">
                        Kostenlose Beratung
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
    </div>
  );
};

export default Services;
