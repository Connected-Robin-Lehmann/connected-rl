import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const References = () => {
  const projects = [
    {
      title: "TC Schwarz-Gelb Heidelberg e.V.",
      subtitle: "Tennisverein mit über 600 Mitgliedern",
      description: "Eine moderne Vereins-Website, die Mitgliedern und Interessenten alle wichtigen Informationen übersichtlich präsentiert – von Veranstaltungen über News bis hin zu Trainingszeiten.",
      highlights: [
        "Übersichtliche Darstellung aller Vereinsinfos",
        "Einfache Verwaltung von Events & News",
        "Optimiert für Smartphone & Desktop"
      ],
      link: "https://tcsgheidelberg.vercel.app"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Unsere Projekte</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Websites, die funktionieren – für zufriedene Kunden
          </p>
        </div>

        {/* Featured Project */}
        <div className="max-w-5xl mx-auto mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Preview Window */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative rounded-2xl overflow-hidden shadow-2xl mb-8 bg-muted"
              >
                {/* Browser Chrome */}
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-zinc-700 rounded-md px-4 py-1 text-zinc-400 text-sm flex items-center gap-2">
                      <span className="hidden sm:inline">{project.link.replace('https://', '')}</span>
                      <span className="sm:hidden">tcsgheidelberg.vercel.app</span>
                    </div>
                  </div>
                </div>
                
                {/* Website Preview */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <iframe
                    src={project.link}
                    title={`Vorschau: ${project.title}`}
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95">
                      <div className="bg-white text-zinc-900 px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg">
                        Website ansehen <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                  <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Das haben wir erreicht:</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-500 text-xs">✓</span>
                        </div>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ihr Projekt könnte hier stehen</h2>
          <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
            Lassen Sie uns gemeinsam eine Website erstellen, auf die Sie stolz sein können
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 group" asChild>
            <Link to="/contact">
              Projekt besprechen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default References;
