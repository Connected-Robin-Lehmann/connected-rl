import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const References = () => {
  const projects = [
    {
      title: "TC Schwarz-Gelb Heidelberg e.V.",
      category: "Sportverein",
      description: "Moderne Vereins-Website für einen traditionsreichen Tennisclub mit über 600 Mitgliedern. Umfassende Funktionen für Veranstaltungen, Nachrichten und Vereinsinformationen.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
      features: ["Responsive Design", "Event Management", "News System"],
      link: "https://preview--tcsgheidelberg.lovable.app/"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Referenzen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Erfolgreiche Projekte aus verschiedenen Branchen – von E-Commerce bis Corporate Websites
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-16 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0 overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {project.title}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Verwendete Technologien:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Was unsere Kunden sagen</h2>
            <blockquote className="text-lg italic text-muted-foreground mb-6">
              "Die Zusammenarbeit mit Robin war hervorragend. Er hat nicht nur eine moderne, 
              funktionale Website erstellt, sondern auch unsere spezifischen Anforderungen als 
              Sportverein perfekt umgesetzt. Das Ergebnis spricht für sich!"
            </blockquote>
            <div className="text-sm font-medium">
              — TC Schwarz-Gelb Heidelberg e.V.
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr Projekt ist der nächste Erfolg</h2>
          <p className="text-lg mb-6 opacity-90">
            Lassen Sie uns gemeinsam eine Website erstellen, die Ihre Ziele erreicht
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link to="/contact">Projekt starten</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default References;