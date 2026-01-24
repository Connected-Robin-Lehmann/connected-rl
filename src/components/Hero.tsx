import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroDevices from "@/assets/hero-devices.png";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

const Hero = () => {
  return (
    // <section className="relative py-20 overflow-hidden">
    //   <div className="container mx-auto px-4">
    //     <div className="grid lg:grid-cols-2 gap-12 items-center">
    //       <div className="space-y-8">
    //         <div className="space-y-4">
    //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
    //             Webseiten erstellen,
    //             <span className="text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
    //               {" "}betreuen
    //             </span> und aktuell halten
    //           </h1>
    //           <p className="text-xl text-muted-foreground max-w-lg">
    //             Professionelle Webentwicklung und -betreuung für Ihr Unternehmen.
    //             Von der ersten Idee bis zur langfristigen Pflege – alles aus einer Hand.
    //           </p>
    //         </div>

    //         <div className="flex flex-col sm:flex-row gap-4">
    //           <Button size="lg" className="text-lg px-8 shadow-hero" asChild>
    //             <Link to="/contact">Kostenloses Angebot anfordern</Link>
    //           </Button>
    //           <Button variant="outline" size="lg" className="text-lg px-8" asChild>
    //             <Link to="/services">Leistungen entdecken</Link>
    //           </Button>
    //         </div>
    //       </div>

    //       <div className="relative">
    //         <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
    //         <img
    //           src={heroImage}
    //           alt="Digitale Vernetzung und Webentwicklung"
    //           className="relative rounded-2xl shadow-hero w-full h-auto"
    //           fetchPriority="high"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative overflow-hidden">
      {/* Mobile Hero - Clean & Centered */}
      <div className="md:hidden min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Verfügbar für Projekte</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-foreground">Digitale</span>
            <br />
            <span className="text-gradient-primary">Exzellenz</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-sm mx-auto">
            Websites, die begeistern – von der Idee bis zur Betreuung.
          </p>
          
          <Button size="lg" className="w-full max-w-xs shadow-hero" asChild>
            <Link to="/contact">
              Projekt starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop Hero */}
      <div className="hidden md:block py-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 animate-fade-in-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-none">
                  <span className="text-foreground">Digitale </span>
                  <span className="text-gradient-primary">Exzellenz</span>
                  <span className="block text-muted-foreground text-2xl lg:text-4xl font-normal mt-4">
                    für Ihr Unternehmen
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Connected verbindet innovative Technologie mit erstklassigem
                  Design. Wir erschaffen digitale Erlebnisse, die Ihre Kunden
                  begeistern und Ihr Business vorantreiben.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Clean Code</div>
                    <div className="text-xs text-muted-foreground">Wartbar & skalierbar</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Palette className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Modern Design</div>
                    <div className="text-xs text-muted-foreground">Zeitlos & ansprechend</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Performance</div>
                    <div className="text-xs text-muted-foreground">Blitzschnell & optimiert</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 relative animate-fade-in-right">
              <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-2xl rounded-3xl transform rotate-6"></div>
              <img
                src={heroDevices}
                alt="Webentwicklung Illustration"
                className="relative rounded-3xl shadow-hero w-full h-auto hover-scale"
                fetchPriority="high"
              />
                  alt="Webentwicklung Illustration"
                  className="relative rounded-3xl shadow-hero w-full h-auto hover-scale"
                />
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-card border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Verfügbar für neue Projekte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
