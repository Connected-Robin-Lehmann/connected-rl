import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import heroSplit from "@/assets/hero-split.jpg";
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
    <section className="min-h-max relative overflow-hidden items-center flex py-12">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-primary opacity-3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div> */}

      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                <span className="block text-foreground">Digitale</span>
                <span className="block text-gradient-primary">Exzellenz</span>
                <span className="block text-muted-foreground text-2xl md:text-3lg lg:text-4xl font-normal mt-4">
                  für Ihr Unternehmen
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Connected verbindet innovative Technologie mit erstklassigem
                Design. Wir erschaffen digitale Erlebnisse, die Ihre Kunden
                begeistern und Ihr Business vorantreiben.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Clean Code</div>
                  <div className="text-xs text-muted-foreground">
                    Wartbar &amp; skalierbar
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Palette className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm">Modern Design</div>
                  <div className="text-xs text-muted-foreground">
                    Zeitlos &amp; ansprechend
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Performance</div>
                  <div className="text-xs text-muted-foreground">
                    Blitzschnell &amp; optimiert
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-gradient-primary border-0 shadow-hero hover-lift text-lg px-8"
              >
                Projekt besprechen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift text-lg px-8 border-primary/20"
              >
                Arbeiten ansehen
              </Button>
            </div> */}
          </div>

          {/* Right Visual - 5 columns */}
          <div className="lg:col-span-5 relative animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-2xl rounded-3xl transform rotate-6"></div>
              <img
                src={heroSplit}
                alt="Webentwicklung Illustration"
                className="relative rounded-3xl shadow-hero w-full h-auto hover-scale"
              />

              {/* Floating badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-card border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Verfügbar für neue Projekte
                  </span>
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
