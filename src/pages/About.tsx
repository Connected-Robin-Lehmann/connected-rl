import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, ArrowDown } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold">Über mich</h1>
            <p className="text-base md:text-xl text-muted-foreground px-2">
              Ihr persönlicher Ansprechpartner für professionelle Webentwicklung
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/images/Robin-Lehmann.png"
                  alt="Robin Lehmann - Webentwickler und Digital Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Robin Lehmann</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  Webentwickler & Digital Consultant
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 text-foreground text-sm md:text-base">
                <p>
                  Mit jahrelanger Erfahrung in der Webentwicklung bringe ich
                  Ihre digitalen Projekte zum Erfolg. Mein Fokus liegt auf
                  modernen, benutzerfreundlichen Lösungen, die nicht nur
                  technisch einwandfrei funktionieren, sondern auch Ihre
                  Geschäftsziele unterstützen.
                </p>
                <p>
                  Als Ihr persönlicher Ansprechpartner sorge ich dafür, dass Sie
                  sich keine Gedanken über die technischen Details machen
                  müssen. Von der ersten Beratung bis zur langfristigen
                  Betreuung – Sie haben immer einen direkten Draht zu mir.
                </p>
                <p>
                  Kundennähe und Zuverlässigkeit stehen bei mir an erster
                  Stelle. Jedes Projekt wird individuell betreut, und ich nehme
                  mir die Zeit, Ihre spezifischen Anforderungen zu verstehen und
                  maßgeschneiderte Lösungen zu entwickeln.
                </p>
              </div>
            </div>
          </div>

          {/* Values & Process Section */}
          <Card className="bg-gradient-card border-0 shadow-card mb-10 md:mb-16">
            <CardContent className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-center">
                Meine Arbeitsweise
              </h3>
              
              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl text-white">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Zielorientiert</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Jede Website wird strategisch geplant und auf Ihre
                    Geschäftsziele ausgerichtet.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl text-white">🤝</span>
                  </div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Persönlich</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Direkter Kontakt und persönliche Betreuung während des
                    gesamten Projekts.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl text-white">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Effizient</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Schnelle Umsetzung ohne Kompromisse bei Qualität und
                    Funktionalität.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-primary/20 my-6 md:my-8" />

              {/* Process Flowchart */}
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">
                Der Projektablauf
              </h4>
              
              {/* Desktop Flowchart */}
              <div className="hidden md:flex items-center justify-center gap-2">
                {/* Step 1 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Erstkontakt</h5>
                  <p className="text-xs text-muted-foreground text-center">Anfrage & Kennenlernen</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 2 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Beratung</h5>
                  <p className="text-xs text-muted-foreground text-center">Ziele & Strategie</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 3 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Konzept</h5>
                  <p className="text-xs text-muted-foreground text-center">Design & Entwurf</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 4 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">4</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Vertiefung</h5>
                  <p className="text-xs text-muted-foreground text-center">Feedback & Feinschliff</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 5 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">5</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Launch</h5>
                  <p className="text-xs text-muted-foreground text-center">Go-Live & Support</p>
                </div>
              </div>

              {/* Mobile Flowchart - vertical */}
              <div className="md:hidden flex flex-col items-center gap-2">
                {[
                  { num: "1", title: "Erstkontakt", desc: "Anfrage & Kennenlernen" },
                  { num: "2", title: "Beratung", desc: "Ziele & Strategie" },
                  { num: "3", title: "Konzept", desc: "Design & Entwurf" },
                  { num: "4", title: "Vertiefung", desc: "Feedback & Feinschliff" },
                  { num: "5", title: "Launch", desc: "Go-Live & Support" },
                ].map((step, index) => (
                  <div key={step.num} className="flex flex-col items-center w-full">
                    <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl p-3 w-full max-w-[280px] shadow-sm">
                      <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-base font-bold text-white">{step.num}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm">{step.title}</h5>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                    {index < 4 && (
                      <ArrowDown className="w-5 h-5 text-primary/50 my-1" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack Section */}
          <Card className="bg-gradient-card border-0 shadow-card mb-10 md:mb-16">
            <CardContent className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-center">
                Mein Tech-Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Frontend */}
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-3 md:mb-4 text-primary text-sm md:text-base">Frontend</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      React
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      TypeScript
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      Tailwind CSS
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      Next.js
                    </span>
                  </div>
                </div>
                {/* Backend */}
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-3 md:mb-4 text-primary text-sm md:text-base">Backend</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      Node.js
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      Supabase
                    </span>
                    <span className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Kontakt</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm md:text-base">connected.rl@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm md:text-base">Telefon auf Anfrage</span>
              </div>
            </div>

            <Button size="default" className="md:text-base" asChild>
              <Link to="/contact">Projekt besprechen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
