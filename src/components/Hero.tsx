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
    <section className="relative overflow-hidden py-6 md:py-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 md:space-y-8 animate-fade-in-left order-1">
            {/* Mobile: Compact hero */}
            <div className="space-y-3 md:space-y-6">
              {/* Mobile availability badge */}
              <div className="md:hidden inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/50">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-muted-foreground">Verfügbar für Projekte</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-none">
                <span className="text-foreground">Digitale </span>
                <span className="text-gradient-primary">Exzellenz</span>
                <span className="block text-muted-foreground text-base md:text-2xl lg:text-4xl font-normal mt-1 md:mt-4">
                  für Ihr Unternehmen
                </span>
              </h1>

              {/* Desktop only: longer description */}
              <p className="hidden md:block text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Connected verbindet innovative Technologie mit erstklassigem
                Design. Wir erschaffen digitale Erlebnisse, die Ihre Kunden
                begeistern und Ihr Business vorantreiben.
              </p>
            </div>

            {/* Feature Pills - Horizontal scroll on mobile, grid on desktop */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 md:p-4 rounded-full md:rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="p-1.5 md:p-2 rounded-full md:rounded-lg bg-primary/10">
                  <Code className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="font-medium text-xs md:text-sm whitespace-nowrap">Clean Code</span>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 md:p-4 rounded-full md:rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="p-1.5 md:p-2 rounded-full md:rounded-lg bg-accent/10">
                  <Palette className="w-3.5 h-3.5 md:w-5 md:h-5 text-accent" />
                </div>
                <span className="font-medium text-xs md:text-sm whitespace-nowrap">Modern Design</span>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 md:p-4 rounded-full md:rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm">
                <div className="p-1.5 md:p-2 rounded-full md:rounded-lg bg-primary/10">
                  <Zap className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="font-medium text-xs md:text-sm whitespace-nowrap">Performance</span>
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
