import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border animate-fade-in">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="LerkWare Logo" 
              className="h-10 w-10 animate-spin-slow"
              style={{ animation: 'spin 4s linear infinite' }}
            />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              LerkWare
            </h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="flex justify-center mb-8 animate-scale-in">
            <img 
              src={logo} 
              alt="LerkWare Logo" 
              className="h-32 w-32 animate-float"
            />
          </div>

          <Badge 
            variant="secondary" 
            className="text-xs uppercase tracking-wider animate-fade-in hover:scale-110 transition-transform duration-300"
          >
            Private Access
          </Badge>
          
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl animate-scale-in">
            LerkWare Rust Internal
          </h2>
          
          <p className="text-xl text-muted-foreground animate-fade-in">
            Premium internal software with exclusive access.
          </p>

          {/* Early Access Button */}
          <div className="pt-6 animate-slide-up">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse-glow"
            >
              <a 
                href="https://discord.gg/amW5TNAdQE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="relative z-10">Early Access</span>
                <ExternalLink className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </a>
            </Button>
          </div>

          {/* Product Card */}
          <Card className="mt-12 border-border bg-card p-8 animate-slide-up hover:scale-105 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 animate-fade-in">
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <Badge variant="outline" className="text-sm hover:scale-110 transition-transform duration-300">
                    In Development
                  </Badge>
                </div>
                <div className="space-y-2 animate-fade-in">
                  <p className="text-sm font-medium text-muted-foreground">Availability</p>
                  <p className="text-2xl font-bold text-foreground animate-pulse">25 Slots</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-6 animate-fade-in">
                <p className="text-sm text-muted-foreground">
                  Limited access private software currently under active development. 
                  Only 25 slots available for exclusive users.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

    </div>
  );
};

export default Index;
