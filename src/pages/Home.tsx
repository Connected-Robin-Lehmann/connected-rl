import Hero from "@/components/Hero";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Shield, Zap } from "lucide-react";

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

      {/* Before/After Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BeforeAfterComparison />
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ihr Partner für digitale Präsenz
            </h2>
            <p className="text-lg text-muted-foreground">
              Connected steht für professionelle Webentwicklung mit persönlicher
              Betreuung. Als Ihr zuverlässiger Partner sorgen wir dafür, dass
              Ihre Online-Präsenz nicht nur technisch einwandfrei funktioniert,
              sondern auch dauerhaft aktuell und erfolgreich bleibt.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Mehr über uns erfahren</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Was uns auszeichnet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drei Säulen für Ihren digitalen Erfolg
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
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
