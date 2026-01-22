import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Settings, Users } from "lucide-react";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Webdesign & Entwicklung",
      description:
        "Moderne, responsive Websites mit benutzerfreundlichem Design und optimaler Performance.",
      features: [
        "Responsive Design für alle Geräte",
        "SEO-optimierte Strukturen",
        "Schnelle Ladezeiten",
        "Barrierefreie Gestaltung",
        "Content Management Systeme",
      ],
    },
    {
      icon: Settings,
      title: "Wartung & Updates",
      description:
        "Kontinuierliche Pflege und Aktualisierung Ihrer Website für maximale Sicherheit und Aktualität.",
      features: [
        "Regelmäßige Sicherheitsupdates",
        "Performance-Optimierung",
        "Backup & Recovery",
        "Bug-Fixes & Verbesserungen",
        "Technische Überwachung",
      ],
    },
    {
      icon: Users,
      title: "Management & Moderation",
      description:
        "Professionelle Betreuung Ihrer Online-Präsenz mit persönlichem Service und schneller Reaktion.",
      features: [
        "Content-Management",
        "Social Media Integration",
        "Analytics & Reporting",
        "Persönlicher Ansprechpartner",
        "Schneller Support",
      ],
    },
  ];

  const codeExamples = [
    {
      title: "React Komponente",
      language: "tsx",
      description: "Wiederverwendbare UI-Komponenten mit TypeScript",
      code: `import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <h1 className="text-5xl font-bold">
        Willkommen
      </h1>
      <Button size="lg">
        Jetzt starten
      </Button>
    </section>
  );
};`,
    },
    {
      title: "Tailwind CSS Styling",
      language: "css",
      description: "Utility-First CSS für schnelles, konsistentes Design",
      code: `/* Design System mit CSS Variables */
:root {
  --primary: 221 83% 53%;
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
}

/* Responsive Grid Layout */
.grid {
  @apply grid-cols-1 md:grid-cols-2 
         lg:grid-cols-3 gap-8;
}`,
    },
    {
      title: "Vite Konfiguration",
      language: "typescript",
      description: "Blitzschnelle Build-Tools für optimale Performance",
      code: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    sourcemap: false,
  },
});`,
    },
  ];

  const techStack = [
    { name: "React", description: "UI Library", color: "bg-blue-500" },
    { name: "TypeScript", description: "Type Safety", color: "bg-blue-700" },
    { name: "Vite", description: "Build Tool", color: "bg-purple-500" },
    { name: "Tailwind CSS", description: "Styling", color: "bg-cyan-500" },
    { name: "shadcn/ui", description: "Components", color: "bg-zinc-700" },
    { name: "React Router", description: "Navigation", color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Unsere Leistungen</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professionelle Webentwicklung und -betreuung – von der ersten Idee
            bis zur langfristigen Pflege
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card border-0"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne Technologien</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ich nutze die neuesten Web-Technologien für performante und wartbare Websites
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-muted/50 rounded-full px-5 py-3 hover:bg-muted transition-colors"
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                <div>
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-muted-foreground text-sm ml-2">
                    {tech.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Examples Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">So entstehen moderne Websites</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Einblick in den Code – sauber, strukturiert und nach Best Practices entwickelt
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {codeExamples.map((example, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">{example.title}</CardTitle>
                  </div>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="relative">
                    <div className="flex items-center gap-1.5 absolute top-3 left-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="bg-zinc-900 text-zinc-100 rounded-lg p-4 pt-10 overflow-x-auto text-xs md:text-sm font-mono leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vorher/Nachher Vergleich */}
        <BeforeAfterComparison />
      </div>
    </div>
  );
};

export default Services;
