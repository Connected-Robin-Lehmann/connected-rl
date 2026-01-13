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
          <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold">Unsere Referenzen</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Erfolgreiche Projekte, die für sich sprechen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop"
                    alt="TC Schwarz-Gelb Heidelberg"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">Sportverein</Badge>
                  </div>
                </div>
                
                <div className="p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2">TC Schwarz-Gelb Heidelberg e.V.</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    Moderne Vereins-Website für einen traditionsreichen Tennisclub mit über 600 Mitgliedern.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs">Tailwind CSS</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit">
                    <Link to="/references" className="flex items-center gap-2">
                      Alle Referenzen ansehen
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
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
