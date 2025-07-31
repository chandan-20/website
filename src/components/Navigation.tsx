import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", section: null },
    { href: "#about", label: "About Us", section: "about" },
    { href: "#services", label: "Services", section: "services" },
    { href: "#industries", label: "Industries", section: "industries" },
    { href: "#contact", label: "Contact", section: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.section) {
      e.preventDefault();
      const element = document.getElementById(item.section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur" style={{ background: 'var(--gradient-header)' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo size="md" className="transition-transform duration-300 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight" style={{ color: 'hsl(var(--text-light))' }}>Shree Varshitha</span>
              <span className="text-xs font-medium" style={{ color: 'hsl(var(--text-light))' }}>Automats</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.section ? (
                <button
                  key={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-sm font-medium transition-colors text-black hover:text-primary"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium transition-colors text-black hover:text-primary"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+91-XXX-XXX-XXXX</span>
            </div>
            <Button asChild className="btn-professional">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Logo size="md" />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary">Shree Varshitha</span>
                    <span className="text-xs text-muted-foreground">Automats</span>
                  </div>
                </div>
                
                {navItems.map((item) => (
                  item.section ? (
                    <button
                      key={item.href}
                      onClick={(e) => {
                        handleNavClick(e, item);
                        setIsOpen(false);
                      }}
                      className="text-lg font-medium transition-colors hover:text-primary text-black text-left"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary text-black"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                
                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+91-XXX-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>shreevarshithaautomats@gmail.com</span>
                  </div>
                  <Button asChild className="btn-professional w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Request Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;