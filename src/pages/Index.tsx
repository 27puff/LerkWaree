import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">LerkWare</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <Badge variant="secondary" className="text-xs uppercase tracking-wider">
            Private Access
          </Badge>
          
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            LerkWare Rust Internal
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Premium internal software with exclusive access.
          </p>

          {/* Product Card */}
          <Card className="mt-12 border-border bg-card p-8">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <Badge variant="outline" className="text-sm">
                    In Development
                  </Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Availability</p>
                  <p className="text-2xl font-bold text-foreground">25 Slots</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Limited access private software currently under active development. 
                  Only 25 slots available for exclusive users.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 LerkWare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
