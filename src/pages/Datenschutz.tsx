
const Datenschutz = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-medium mb-3">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Datenerfassung auf dieser Website</h3>
            <p className="text-muted-foreground">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
            <p className="text-muted-foreground mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-xl font-medium mb-3">Externes Hosting</h3>
            <p className="text-muted-foreground">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
              werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
              und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-medium mb-3">Datenschutz</h3>
            <p className="text-muted-foreground mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie 
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-medium mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-muted-foreground mb-2">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg mb-4">
              <p><strong>Connected</strong></p>
              <p>Robin Lehmann</p>
              <p>Dürerstraße 10</p>
              <p>69126 Heidelberg</p>
              <p>E-Mail: robin.lehmann@connected-webdesign.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-medium mb-3">Kontaktformular</h3>
            <p className="text-muted-foreground mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-medium mb-3">Anfrage per E-Mail oder Telefon</h3>
            <p className="text-muted-foreground">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens 
              bei uns gespeichert und verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen.
            </p>
            <p className="text-muted-foreground">
              Wenn Sie Fragen zum Datenschutz haben, können Sie sich jederzeit an uns wenden. Des Weiteren steht 
              Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
