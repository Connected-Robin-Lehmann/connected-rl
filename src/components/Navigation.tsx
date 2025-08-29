import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: "/services" },
    { label: "Über mich", href: "/about" },
    { label: "Referenzen", href: "/references" },
    { label: "Kontakt", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Connected
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <Button asChild className="hidden md:inline-flex">
          <Link to="/contact">Kostenloses Angebot</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navigation;