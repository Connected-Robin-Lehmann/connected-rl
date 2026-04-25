import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SEO
        title="Seite nicht gefunden (404) | Connected"
        description="Die angeforderte Seite existiert nicht. Kehren Sie zur Startseite zurück oder kontaktieren Sie uns."
        path={location.pathname}
        noindex
      />
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Diese Seite konnte leider nicht gefunden werden.
        </p>
        <Button asChild>
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
