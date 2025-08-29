import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Ich melde mich zeitnah bei Ihnen.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      value: "robin.lehmann2007@gmail.com",
      link: "mailto:robin.lehmann2007@gmail.com"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Dürerstraße 10, 69126 Heidelberg",
      link: "https://maps.google.com/?q=Dürerstraße+10,+69126+Heidelberg"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "Auf Anfrage verfügbar",
      link: null
    },
    {
      icon: Clock,
      title: "Erreichbarkeit",
      value: "Mo-Fr: 9:00-18:00 Uhr",
      link: null
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Kontakt</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
            Ich freue mich auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Nachricht senden</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus und ich melde mich zeitnah bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ihre.email@beispiel.de"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Betreff</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Worum geht es?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Fragen..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Kontaktinformationen</h2>
              <p className="text-muted-foreground mb-8">
                Sie erreichen mich über verschiedene Kanäle. Für eine schnelle 
                Antwort nutzen Sie gerne das Kontaktformular oder schreiben mir 
                direkt eine E-Mail.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-primary border-0 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Kostenloses Erstgespräch</h3>
                <p className="opacity-90 mb-4">
                  Lassen Sie uns in einem unverbindlichen Gespräch über Ihr 
                  Projekt sprechen und gemeinsam die beste Lösung finden.
                </p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>✓ Kostenlose Beratung</li>
                  <li>✓ Unverbindliches Angebot</li>
                  <li>✓ Persönlicher Ansprechpartner</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;