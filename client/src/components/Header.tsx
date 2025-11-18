import { Link } from "wouter";
import { Home, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import { useTheme } from "@/contexts/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Home Link */}
        <Link href="/">
          <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {siteConfig.logo ? (
              <img
                src={siteConfig.logo}
                alt={siteConfig.title}
                className="h-8 w-8 object-contain"
              />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {siteConfig.title.charAt(0)}
                </span>
              </div>
            )}
            <span className="font-semibold text-lg hidden sm:inline-block">
              {siteConfig.title}
            </span>
          </a>
        </Link>
        
        {/* Navigation Actions */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <a>
              <Button variant="ghost" size="icon" title="Home">
                <Home className="h-5 w-5" />
              </Button>
            </a>
          </Link>
          <Link href="/contact-us">
            <a>
              <Button variant="ghost" title="Contact Us">
                Contact Us
              </Button>
            </a>
          </Link>
          
          {siteConfig.features.darkMode && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
