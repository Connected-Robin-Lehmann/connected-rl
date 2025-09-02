import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Über mich</h1>
            <p className="text-xl text-muted-foreground">
              Ihr persönlicher Ansprechpartner für professionelle Webentwicklung
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">RL</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Robin Lehmann</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Webentwickler & Digital Consultant
                </p>
              </div>
              
              <div className="space-y-4 text-foreground">
                <p>
                  Mit jahrelanger Erfahrung in der Webentwicklung bringe ich Ihre 
                  digitalen Projekte zum Erfolg. Mein Fokus liegt auf modernen, 
                  benutzerfreundlichen Lösungen, die nicht nur technisch einwandfrei 
                  funktionieren, sondern auch Ihre Geschäftsziele unterstützen.
                </p>
                <p>
                  Als Ihr persönlicher Ansprechpartner sorge ich dafür, dass Sie 
                  sich keine Gedanken über die technischen Details machen müssen. 
                  Von der ersten Beratung bis zur langfristigen Betreuung – 
                  Sie haben immer einen direkten Draht zu mir.
                </p>
                <p>
                  Kundennähe und Zuverlässigkeit stehen bei mir an erster Stelle. 
                  Jedes Projekt wird individuell betreut, und ich nehme mir die 
                  Zeit, Ihre spezifischen Anforderungen zu verstehen und 
                  maßgeschneiderte Lösungen zu entwickeln.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <Card className="bg-gradient-card border-0 shadow-card mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Meine Arbeitsweise</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2">Zielorientiert</h4>
                  <p className="text-sm text-muted-foreground">
                    Jede Website wird strategisch geplant und auf Ihre Geschäftsziele ausgerichtet.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🤝</span>
                  </div>
                  <h4 className="font-semibold mb-2">Persönlich</h4>
                  <p className="text-sm text-muted-foreground">
                    Direkter Kontakt und persönliche Betreuung während des gesamten Projekts.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-2">Effizient</h4>
                  <p className="text-sm text-muted-foreground">
                    Schnelle Umsetzung ohne Kompromisse bei Qualität und Funktionalität.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Kontakt</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>connected.rl@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Dürerstraße 10, 69126 Heidelberg</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>Telefon auf Anfrage</span>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/contact">Projekt besprechen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;