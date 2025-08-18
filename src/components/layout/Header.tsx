import { Link, NavLink } from "react-router-dom";
import { Menu, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/history", label: "Contenido" },
];

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-40 bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-sm">
            <span aria-label="Chile" className="text-primary-foreground text-base">🇨🇱</span>
          </div>
          <span className="font-bold text-sm md:text-lg tracking-tight text-foreground">Chilenízate</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `px-2 py-1.5 rounded-md transition-colors ${
                  isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground">
                <User className="h-4 w-4" />
                <span className="truncate max-w-[200px]">{user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-1" />
                Salir
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button size="sm">
                <LogIn className="h-4 w-4 mr-1" />
                Entrar
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          {user ? null : (
            <Link to="/auth" aria-label="Entrar">
              <Button variant="ghost" size="icon">
                <LogIn className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">Menú</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm ${
                        isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="pt-2 border-t mt-2">
                  {user ? (
                    <Button variant="outline" className="w-full" onClick={signOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Cerrar sesión
                    </Button>
                  ) : (
                    <Link to="/auth" className="block">
                      <Button className="w-full">
                        <LogIn className="h-4 w-4 mr-2" />
                        Iniciar sesión
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
