import Hero from "@/components/Hero";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import MobileComparisonTabs from "@/components/MobileComparisonTabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Zap, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: "Moderne Webentwicklung",
      description:
        "Responsive Websites mit modernsten Technologien für optimale Performance.",
    },
    {
      icon: Shield,
      title: "Zuverlässige Betreuung",
      description:
        "Kontinuierliche Wartung und Updates für maximale Sicherheit und Aktualität.",
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description:
        "Effiziente Projektabwicklung von der Konzeption bis zur Realisierung.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ihr Partner für digitale Präsenz
            </h2>
            <p className="text-lg text-muted-foreground">
              Connected steht für professionelle Webentwicklung mit persönlicher Betreuung. 
              Als Ihr zuverlässiger Partner sorgen wir dafür, dass Ihre Online-Präsenz 
              nicht nur technisch einwandfrei funktioniert, sondern auch dauerhaft aktuell 
              und erfolgreich bleibt.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Mehr über uns erfahren</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Before/After Comparison Section - Desktop/Tablet */}
      <section className="py-20 hidden md:block">
        <div className="container mx-auto px-4">
          <BeforeAfterComparison />
        </div>
      </section>

      {/* Mobile Comparison */}
      <section className="py-6 md:hidden">
        <div className="container mx-auto px-3">
          <MobileComparisonTabs />
        </div>
      </section>

      {/* References Preview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 md:space-y-4 mb-6 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold">Unsere Referenzen</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Erfolgreiche Projekte, die für sich sprechen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
              {/* Browser Window Preview */}
              <div className="bg-muted/50 border-b border-border/50">
                <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-2 md:mx-4">
                    <div className="bg-background/80 rounded-md px-2 py-1 md:px-3 md:py-1.5 text-xs text-muted-foreground truncate">
                      tcsgheidelberg.vercel.app
                    </div>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://tcsgheidelberg.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-video overflow-hidden group"
              >
                <iframe
                  src="https://tcsgheidelberg.vercel.app"
                  className="w-full h-full pointer-events-none"
                  title="TC Schwarz-Gelb Heidelberg Preview"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                    Website besuchen →
                  </span>
                </div>
              </a>
              
              {/* Project Info */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base md:text-xl font-bold">TC Schwarz-Gelb Heidelberg e.V.</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Vereins-Website für einen traditionsreichen Tennisclub
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <Badge variant="secondary" className="text-[10px] md:text-xs">Sportverein</Badge>
                  <Badge variant="outline" className="text-[10px] md:text-xs">600+ Mitglieder</Badge>
                  <Badge variant="outline" className="text-[10px] md:text-xs">Responsive</Badge>
                </div>
                
                <Button asChild variant="outline" size="sm" className="w-full md:w-fit text-xs md:text-sm">
                  <Link to="/references" className="flex items-center justify-center gap-2">
                    Alle Referenzen ansehen
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold">
              Was uns auszeichnet
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Drei Säulen für Ihren digitalen Erfolg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0"
              >
                <CardHeader className="pb-2 md:pb-6">
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-2 md:mb-4">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
