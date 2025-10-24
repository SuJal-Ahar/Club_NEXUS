import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Events = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-8">
      <div className="container mx-auto">
        <Button variant="outline" onClick={() => navigate("/")} className="mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        <div className="text-center py-20">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Event Management
          </h1>
          <p className="text-xl text-muted-foreground">
            Coming soon! Event management features are under development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
