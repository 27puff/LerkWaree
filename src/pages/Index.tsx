import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Navigation */}
      <nav className="border-b border-border animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground hover:scale-105 transition-transform duration-300">
            LerkWare
          </h1>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
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

          {/* Product Card */}
          <Card className="mt-12 border-border bg-card p-8 animate-slide-up hover:scale-105 transition-all duration-500 hover:shadow-2xl">
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
