import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight, ArrowDown } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold">Über mich</h1>
            <p className="text-base md:text-xl text-muted-foreground px-2">
              Ihr persönlicher Ansprechpartner für professionelle Webentwicklung
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16">
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/images/Robin-Lehmann.png"
                  alt="Robin Lehmann - Webentwickler und Digital Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Robin Lehmann</h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  Webentwickler & Digital Consultant
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 text-foreground text-sm md:text-base">
                <p>
                  Mit jahrelanger Erfahrung in der Webentwicklung bringe ich
                  Ihre digitalen Projekte zum Erfolg. Mein Fokus liegt auf
                  modernen, benutzerfreundlichen Lösungen, die nicht nur
                  technisch einwandfrei funktionieren, sondern auch Ihre
                  Geschäftsziele unterstützen.
                </p>
                <p>
                  Als Ihr persönlicher Ansprechpartner sorge ich dafür, dass Sie
                  sich keine Gedanken über die technischen Details machen
                  müssen. Von der ersten Beratung bis zur langfristigen
                  Betreuung – Sie haben immer einen direkten Draht zu mir.
                </p>
                <p>
                  Kundennähe und Zuverlässigkeit stehen bei mir an erster
                  Stelle. Jedes Projekt wird individuell betreut, und ich nehme
                  mir die Zeit, Ihre spezifischen Anforderungen zu verstehen und
                  maßgeschneiderte Lösungen zu entwickeln.
                </p>
              </div>
            </div>
          </div>

          {/* Values & Process Section */}
          <Card className="bg-gradient-card border-0 shadow-card mb-10 md:mb-16">
            <CardContent className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-center">
                Meine Arbeitsweise
              </h3>
              
              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl text-white">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Zielorientiert</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Jede Website wird strategisch geplant und auf Ihre
                    Geschäftsziele ausgerichtet.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl text-white">🤝</span>
                  </div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Persönlich</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Direkter Kontakt und persönliche Betreuung während des
                    gesamten Projekts.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-xl md:text-2xl text-white">⚡</span>
                  </div>
                  <h4 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">Effizient</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Schnelle Umsetzung ohne Kompromisse bei Qualität und
                    Funktionalität.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-primary/20 my-6 md:my-8" />

              {/* Process Flowchart */}
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center">
                Der Projektablauf
              </h4>
              
              {/* Desktop Flowchart */}
              <div className="hidden md:flex items-center justify-center gap-2">
                {/* Step 1 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">1</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Erstkontakt</h5>
                  <p className="text-xs text-muted-foreground text-center">Anfrage & Kennenlernen</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 2 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">2</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Beratung</h5>
                  <p className="text-xs text-muted-foreground text-center">Ziele & Strategie</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 3 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">3</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Konzept</h5>
                  <p className="text-xs text-muted-foreground text-center">Design & Entwurf</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 4 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">4</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Vertiefung</h5>
                  <p className="text-xs text-muted-foreground text-center">Feedback & Feinschliff</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                
                {/* Step 5 */}
                <div className="flex flex-col items-center min-w-[120px]">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">5</span>
                  </div>
                  <h5 className="font-semibold text-sm mb-1">Launch</h5>
                  <p className="text-xs text-muted-foreground text-center">Go-Live & Support</p>
                </div>
              </div>

              {/* Mobile Flowchart - vertical */}
              <div className="md:hidden flex flex-col items-center gap-2">
                {[
                  { num: "1", title: "Erstkontakt", desc: "Anfrage & Kennenlernen" },
                  { num: "2", title: "Beratung", desc: "Ziele & Strategie" },
                  { num: "3", title: "Konzept", desc: "Design & Entwurf" },
                  { num: "4", title: "Vertiefung", desc: "Feedback & Feinschliff" },
                  { num: "5", title: "Launch", desc: "Go-Live & Support" },
                ].map((step, index) => (
                  <div key={step.num} className="flex flex-col items-center w-full">
                    <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl p-3 w-full max-w-[280px] shadow-sm">
                      <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-base font-bold text-white">{step.num}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm">{step.title}</h5>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                    {index < 4 && (
                      <ArrowDown className="w-5 h-5 text-primary/50 my-1" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack Section */}
          <Card className="bg-gradient-card border-0 shadow-card mb-10 md:mb-16">
            <CardContent className="p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-center">
                Mein Tech-Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Frontend */}
                <div>
                  <h4 className="font-semibold mb-4 text-primary text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
                    <span className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center text-xs">🎨</span>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                      </svg>
                      <span>React</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
                      </svg>
                      <span>Next.js</span>
                    </div>
                  </div>
                </div>
                {/* Backend */}
                <div>
                  <h4 className="font-semibold mb-4 text-primary text-sm md:text-base flex items-center justify-center md:justify-start gap-2">
                    <span className="w-6 h-6 bg-primary/20 rounded-md flex items-center justify-center text-xs">⚙️</span>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                      </svg>
                      <span>Node.js</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
                      </svg>
                      <span>Supabase</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-background/60 backdrop-blur-sm border border-primary/10 rounded-xl text-xs md:text-sm font-medium shadow-sm hover:border-primary/30 hover:shadow-md transition-all">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0914-6.9553.5855-2.2042.8203-4.1616.6608-5.5068-.076-.6412-.2845-1.1591-.6193-1.5388-.347-.3939-.7873-.5874-1.3092-.5765-.9633.0202-2.1999.5156-3.6556 1.469-.4675.3064-.9274.6462-1.3778 1.0163-.0166-.0134-.0332-.0267-.05-.0399-.3609-.2826-.7739-.4599-1.2299-.5765-.4436-.1134-.9036-.1631-1.3687-.1631-.6597 0-1.3368.0928-1.9938.2727-.6702.1836-1.3214.4468-1.9412.7838-.6198.3369-1.2007.7494-1.7294 1.2281-.5287.4788-.9987 1.031-1.3989 1.6429-.4001.6119-.7235 1.2928-.9621 2.0226-.2386.7298-.3579 1.5233-.3579 2.3608 0 .478.0405.9436.1214 1.3871.0808.4434.2017.8664.3608 1.2673.159.401.3557.7845.5874 1.147.2318.3625.4979.7003.7959 1.0117l-.1096.0399c-.4274.156-.8377.3064-1.2299.4511-.3922.1447-.7507.3065-1.0746.4852-.324.1786-.608.3796-.8521.6026-.2441.223-.4368.4723-.5781.7474-.1413.2751-.212.5765-.212.9043 0 .4301.1213.8216.3639 1.1743.2425.3526.5765.6537.9985.9031.4219.2494.9184.4512 1.4888.6057.5703.1546 1.186.2494 1.8452.2845.6592.035 1.3463.0175 2.0612-.0523.715-.0699 1.4424-.1898 2.1822-.3603.7398-.1706 1.476-.3929 2.2085-.6666.7325-.2736 1.4463-.6003 2.1415-.9807.3951-.2163.7676-.4494 1.1134-.6992.1158.0793.2331.1605.352.2437.6876.4813 1.3209.8926 1.8998 1.2338.5789.3411 1.0803.5874 1.5043.7386.4239.1512.7576.2059.9999.1641.2422-.0418.3796-.193.4123-.4536.0326-.2607-.0435-.5842-.2281-.9695-.1846-.3853-.4668-.8318-.8462-1.3397-.1934-.2589-.4082-.5312-.6448-.8167zm-13.0194 4.0693c-.3922.0873-.7739.1334-1.1451.1381-.3712.0046-.7213-.0285-1.0501-.0998-.3288-.0714-.6241-.1743-.8856-.3089-.2616-.1347-.477-.2982-.6461-.4904-.169-.1921-.2535-.406-.2535-.6415 0-.1905.0421-.3701.1261-.5389.084-.169.2029-.3241.357-.4655.1541-.1414.3369-.2723.5482-.3929.2113-.1206.4418-.2284.6914-.3232.3447-.1308.7255-.268 1.1425-.4114.4169-.1433.8498-.2775 1.2984-.4024-.0059.1223-.0107.2379-.0141.347-.0034.1092-.0051.2109-.0051.3054 0 .4812.0402.9474.1206 1.3987.0803.4513.195.8745.344 1.2698.0232.0617.0474.1222.0723.1819-.2103.0575-.4232.1094-.6386.1557zm6.8789-8.0398c-.2029.4449-.4535.8619-.7517 1.251-.2982.389-.6329.7517-1.0042 1.0879-.3713.3362-.7695.6351-1.1948.8969-.4253.2619-.868.4791-1.3282.6515-.4602.1724-.9282.2997-1.4038.3821-.4756.0824-.9485.1236-1.4188.1236-.3161 0-.6206-.0253-.9132-.076-.2926-.0507-.5661-.1244-.8203-.221-.2541-.0966-.4859-.2161-.6952-.3585-.2093-.1423-.3894-.3064-.5406-.4922-.1512-.1858-.2702-.3929-.357-.6211-.0868-.2282-.1302-.4742-.1302-.738 0-.5765.1423-1.1363.4269-1.6795.2845-.5432.6796-1.0508 1.1852-1.5228.5056-.4719 1.1026-.9063 1.7909-1.303.6883-.3968 1.4379-.7421 2.2488-1.0361.8109-.294 1.6733-.5264 2.5873-.6973.9139-.1709 1.8598-.2707 2.8378-.2991-.0963.5523-.2415 1.1147-.4354 1.6873-.1939.5726-.4335 1.1363-.7189 1.6912zm5.4262 2.8912c-.0198-.0437-.0486-.0821-.0862-.1153-.0377-.0331-.084-.0596-.139-.0794-.055-.0198-.1186-.031-.1906-.0337-.072-.0027-.1518.0018-.2396.0135-.0877.0117-.1825.0302-.2842.0555-.1018.0253-.2088.0563-.3212.0929-.0623.0203-.1293.0427-.2009.0672.0374-.1293.0645-.2574.0813-.3843.0168-.1268.0252-.2513.0252-.3734 0-.2164-.0273-.4172-.0818-.6025-.0546-.1853-.1343-.3494-.2394-.4922-.105-.1429-.2347-.2616-.3889-.3562-.1541-.0946-.3313-.1655-.5312-.2127-.1999-.0472-.4222-.0708-.6667-.0708-.3161 0-.6257.0388-.9289.1164-.3031.0776-.5909.1882-.8634.3317-.2725.1436-.5241.3161-.7548.5177-.2306.2016-.4341.4243-.6103.6681-.1762.2437-.3147.5066-.4153.7884-.1006.2818-.1509.579-.1509.8917 0 .2745.0415.5312.1245.7701.0831.2389.2001.4511.3512.6366.1511.1856.3327.3462.5449.4819.2122.1356.4465.2394.7029.3112-.1177.2688-.2424.5285-.3742.779-.1318.2505-.2644.4904-.3979.7197-.1335.2293-.2642.4457-.3922.6491-.13.2035-.2546.3929-.3739.568-.1193.1752-.2303.335-.3328.4795-.1025.1445-.193.2723-.2714.3834-.3713-.2606-.7186-.5387-1.0416-.8341-.323-.2955-.6114-.6085-.865-1.0391-.2535-.4305-.4512-.8959-.5929-1.3962-.1417-.5003-.2126-1.0505-.2126-1.6506 0-.7048.1114-1.3697.334-1.9945.2226-.6249.5358-1.1935.9395-1.706.4037-.5125.8901-.9598 1.4591-1.342.569-.3821 1.197-.6857 1.884-.9107.687-.225 1.4202-.3834 2.1995-.4753.7794-.0919 1.5874-.1024 2.4241-.0317-.0946.3362-.1596.6792-.195 1.0288-.0353.3497-.053.6967-.053 1.0413 0 .6605.071 1.2937.2127 1.8997.1418.606.3438 1.1729.6062 1.7006.2624.5277.5771 1.0098.9441 1.4464.367.4365.7787.8164 1.2352 1.1395-.1214.203-.2484.3963-.3811.5801-.1327.1838-.2695.3566-.4103.5183-.1408.1618-.2854.3106-.4337.4464-.1482.1359-.2997.2563-.4537.3613-.154.1051-.3107.1929-.4699.2635-.1592.0707-.3192.1216-.48.1527-.1608.0311-.3209.0421-.4801.0331-.1593-.0089-.3155-.0391-.4688-.0906-.1533-.0514-.3019-.1249-.4459-.2203-.0888-.0588-.1667-.13-.2335-.2135-.0668-.0836-.1197-.1755-.1586-.2758-.039-.1003-.0632-.2071-.0728-.3204-.0096-.1132-.0028-.2289.0202-.347.0231-.1181.062-.2363.1165-.3546.0545-.1183.1247-.2341.2107-.3473.0859-.1132.1855-.2229.2988-.329.1132-.1061.239-.2063.3772-.3007.1935-.1324.4193-.2701.6772-.4131.258-.143.5351-.2846.8315-.4246.2964-.14.6087-.2756.9369-.4069.3282-.1312.6656-.2552 1.0123-.3715l.2757-.0929c.1363-.0459.2772-.0926.4228-.1403-.1214-.2054-.2324-.4183-.333-.6386-.1006-.2203-.1891-.4474-.2655-.681-.0763-.2336-.1387-.4728-.1871-.7178-.0483-.2449-.0808-.4942-.0974-.7478z"/>
                      </svg>
                      <span>PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>


          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Kontakt</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm md:text-base">robin.lehmann@connected-webdesign.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-sm md:text-base">Telefon auf Anfrage</span>
              </div>
            </div>

            <Button size="default" className="md:text-base" asChild>
              <Link to="/contact">Projekt besprechen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
