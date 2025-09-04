
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Webseiten erstellen, 
                <span className="text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
                  {" "}betreuen
                </span> und aktuell halten
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Professionelle Webentwicklung und -betreuung für Ihr Unternehmen. 
                Von der ersten Idee bis zur langfristigen Pflege – alles aus einer Hand.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 shadow-hero" asChild>
                <Link to="/contact">Kostenloses Angebot anfordern</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link to="/services">Leistungen entdecken</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Digitale Vernetzung und Webentwicklung"
              className="relative rounded-2xl shadow-hero w-full h-auto"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
