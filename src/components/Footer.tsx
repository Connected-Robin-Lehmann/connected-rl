import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Connected</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professionelle Webentwicklung und -betreuung für Ihr Unternehmen.
              Von der ersten Idee bis zur langfristigen Pflege – alles aus einer
              Hand.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>
                <strong>Inhaber:</strong> Robin Lehmann
              </p>
              <p>
                <strong>E-Mail:</strong> robin.lehmann@connected-webdesign.de
              </p>
              <p>
                <strong>Adresse:</strong> Dürerstraße 10, 69126 Heidelberg
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Über mich
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/references"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Referenzen
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/impressum"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          {/* <p>
            &copy; {new Date().getFullYear()} Connected - Robin Lehmann. Alle
            Rechte vorbehalten.
          </p> */}
          <p>Connected - Inhaber: Robin Lehmann</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
