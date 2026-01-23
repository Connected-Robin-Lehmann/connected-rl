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

  const codeSnippet = `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WelcomeSection = () => {
  return (
    <section className="py-20">
      <Card className="p-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          Willkommen
        </h1>
        <p className="text-muted-foreground">
          Moderne Webentwicklung mit React
        </p>
        <Button size="lg" className="mt-6">
          Jetzt starten
        </Button>
      </Card>
    </section>
  );
};`;

  const techStack = [
    { name: "React", color: "bg-sky-400" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Vite", color: "bg-purple-500" },
    { name: "Tailwind CSS", color: "bg-cyan-400" },
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

        {/* Code Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Moderne Webentwicklung</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sauberer, strukturierter Code für performante Websites
            </p>
          </div>

          {/* Carbon-style Code Window */}
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Code Window */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-zinc-400 text-sm font-medium">WelcomeSection.tsx</span>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="bg-[#1e1e2e] p-6 overflow-x-auto">
                  <pre className="text-sm md:text-base font-mono leading-relaxed">
                    <code>
                      <span className="text-purple-400">import</span>
                      <span className="text-zinc-300"> {"{"} </span>
                      <span className="text-yellow-300">Button</span>
                      <span className="text-zinc-300"> {"}"} </span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400"> "@/components/ui/button"</span>
                      <span className="text-zinc-500">;</span>
                      {"\n"}
                      <span className="text-purple-400">import</span>
                      <span className="text-zinc-300"> {"{"} </span>
                      <span className="text-yellow-300">Card</span>
                      <span className="text-zinc-300">, </span>
                      <span className="text-yellow-300">CardHeader</span>
                      <span className="text-zinc-300">, </span>
                      <span className="text-yellow-300">CardTitle</span>
                      <span className="text-zinc-300"> {"}"} </span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400"> "@/components/ui/card"</span>
                      <span className="text-zinc-500">;</span>
                      {"\n"}
                      <span className="text-purple-400">import</span>
                      <span className="text-zinc-300"> {"{"} </span>
                      <span className="text-yellow-300">motion</span>
                      <span className="text-zinc-300"> {"}"} </span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400"> "framer-motion"</span>
                      <span className="text-zinc-500">;</span>
                      {"\n\n"}
                      <span className="text-purple-400">interface</span>
                      <span className="text-yellow-300"> WelcomeProps</span>
                      <span className="text-zinc-300"> {"{"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}title</span>
                      <span className="text-zinc-500">:</span>
                      <span className="text-sky-300"> string</span>
                      <span className="text-zinc-500">;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}subtitle</span>
                      <span className="text-zinc-500">?:</span>
                      <span className="text-sky-300"> string</span>
                      <span className="text-zinc-500">;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"}"}</span>
                      {"\n\n"}
                      <span className="text-purple-400">const</span>
                      <span className="text-sky-300"> WelcomeSection</span>
                      <span className="text-zinc-300"> = ({"{"} title, subtitle {"}"}</span>
                      <span className="text-zinc-500">:</span>
                      <span className="text-yellow-300"> WelcomeProps</span>
                      <span className="text-zinc-300">) </span>
                      <span className="text-purple-400">=&gt;</span>
                      <span className="text-zinc-300"> {"{"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "}</span>
                      <span className="text-purple-400">return</span>
                      <span className="text-zinc-300"> (</span>
                      {"\n"}
                      <span className="text-zinc-300">{"    "}&lt;</span>
                      <span className="text-yellow-300">motion.section</span>
                      {"\n"}
                      <span className="text-sky-300">{"      "}initial</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-zinc-300">{"{"}{"{"} opacity: </span>
                      <span className="text-orange-400">0</span>
                      <span className="text-zinc-300"> {"}"}{"}"}</span>
                      {"\n"}
                      <span className="text-sky-300">{"      "}animate</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-zinc-300">{"{"}{"{"} opacity: </span>
                      <span className="text-orange-400">1</span>
                      <span className="text-zinc-300"> {"}"}{"}"}</span>
                      {"\n"}
                      <span className="text-sky-300">{"      "}className</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-green-400">"py-20 bg-gradient-hero"</span>
                      {"\n"}
                      <span className="text-zinc-300">{"    "}&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"      "}&lt;</span>
                      <span className="text-yellow-300">Card</span>
                      <span className="text-sky-300"> className</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-green-400">"p-8 shadow-card"</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"        "}&lt;</span>
                      <span className="text-yellow-300">CardHeader</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"          "}&lt;</span>
                      <span className="text-yellow-300">CardTitle</span>
                      <span className="text-sky-300"> className</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-green-400">"text-4xl font-bold"</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"            "}{"{"}title{"}"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"          "}&lt;/</span>
                      <span className="text-yellow-300">CardTitle</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"          "}{"{"}subtitle </span>
                      <span className="text-purple-400">&amp;&amp;</span>
                      <span className="text-zinc-300"> (</span>
                      {"\n"}
                      <span className="text-zinc-300">{"            "}&lt;</span>
                      <span className="text-pink-400">p</span>
                      <span className="text-sky-300"> className</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-green-400">"text-muted-foreground"</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"              "}{"{"}subtitle{"}"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"            "}&lt;/</span>
                      <span className="text-pink-400">p</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"          "}){"}"}</span>
                      {"\n"}
                      <span className="text-zinc-300">{"        "}&lt;/</span>
                      <span className="text-yellow-300">CardHeader</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"        "}&lt;</span>
                      <span className="text-yellow-300">Button</span>
                      <span className="text-sky-300"> size</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-green-400">"lg"</span>
                      <span className="text-sky-300"> variant</span>
                      <span className="text-zinc-300">=</span>
                      <span className="text-green-400">"default"</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-100">{"          "}Jetzt starten</span>
                      {"\n"}
                      <span className="text-zinc-300">{"        "}&lt;/</span>
                      <span className="text-yellow-300">Button</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"      "}&lt;/</span>
                      <span className="text-yellow-300">Card</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"    "}&lt;/</span>
                      <span className="text-yellow-300">motion.section</span>
                      <span className="text-zinc-300">&gt;</span>
                      {"\n"}
                      <span className="text-zinc-300">{"  "});</span>
                      {"\n"}
                      <span className="text-zinc-300">{"}"};</span>
                      {"\n\n"}
                      <span className="text-purple-400">export default</span>
                      <span className="text-sky-300"> WelcomeSection</span>
                      <span className="text-zinc-500">;</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-muted/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${tech.color}`} />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vorher/Nachher Vergleich */}
        <BeforeAfterComparison />
      </div>
    </div>
  );
};

export default Services;
