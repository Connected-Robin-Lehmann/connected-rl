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

        {/* Vorher/Nachher Vergleich */}
        <BeforeAfterComparison />
      </div>
    </div>
  );
};

export default Services;
