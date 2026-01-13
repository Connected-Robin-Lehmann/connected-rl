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
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Content - 7 columns on desktop, full width on mobile */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 animate-fade-in-left order-1">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-none">
                <span className="block text-foreground">Digitale</span>
                <span className="block text-gradient-primary">Exzellenz</span>
                <span className="block text-muted-foreground text-xl sm:text-2xl lg:text-4xl font-normal mt-2 lg:mt-4">
                  für Ihr Unternehmen
                </span>
              </h1>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Connected verbindet innovative Technologie mit erstklassigem
                Design. Wir erschaffen digitale Erlebnisse, die Ihre Kunden
                begeistern und Ihr Business vorantreiben.
              </p>
            </div>

            {/* Feature Cards - Stack on mobile, grid on desktop */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-xs md:text-sm">Clean Code</div>
                  <div className="text-xs text-muted-foreground">
                    Wartbar &amp; skalierbar
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Palette className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-xs md:text-sm">Modern Design</div>
                  <div className="text-xs text-muted-foreground">
                    Zeitlos &amp; ansprechend
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover-lift">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-xs md:text-sm">Performance</div>
                  <div className="text-xs text-muted-foreground">
                    Blitzschnell &amp; optimiert
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block lg:col-span-5 relative animate-fade-in-right order-2">
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
