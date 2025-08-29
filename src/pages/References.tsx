import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const References = () => {
  const projects = [
    {
      title: "E-Commerce Plattform",
      category: "Online Shop",
      description: "Vollständige E-Commerce-Lösung mit Produktkatalog, Warenkorb und Zahlungsabwicklung. Responsive Design mit optimierter Conversion-Rate.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: ["Mobile-First Design", "SEO-Optimierung", "Payment Integration", "Analytics"]
    },
    {
      title: "Unternehmens-Website",
      category: "Corporate",
      description: "Moderne Firmen-Website mit CMS, Blog-System und Kontaktformularen. Fokus auf professionellem Erscheinungsbild und Benutzerfreundlichkeit.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      features: ["Content Management", "Blog System", "Multi-Language", "Contact Forms"]
    },
    {
      title: "Portfolio-Website",
      category: "Portfolio",
      description: "Kreative Portfolio-Website für einen Fotografen mit Galerie-System und Buchungskalender. Besonderer Fokus auf Bildpräsentation.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      features: ["Image Gallery", "Booking System", "Admin Panel", "Performance Optimization"]
    },
    {
      title: "Lokaler Dienstleister",
      category: "Service",
      description: "Website für lokalen Dienstleister mit Terminbuchung, Leistungsübersicht und Kundenbewertungen. Integration von Google Maps und Bewertungssystemen.",
      technologies: ["React", "Express", "MongoDB", "Google APIs"],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop",
      features: ["Appointment Booking", "Review System", "Maps Integration", "Mobile App"]
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

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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
                  {project.title}
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
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
              "Robin hat unsere Website nicht nur technisch perfekt umgesetzt, sondern auch 
              strategisch beraten. Die Zusammenarbeit war professionell und das Ergebnis 
              übertrifft unsere Erwartungen. Wir können Connected uneingeschränkt empfehlen."
            </blockquote>
            <div className="text-sm font-medium">
              — Beispielkunde, Geschäftsführer einer mittelständischen Firma
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