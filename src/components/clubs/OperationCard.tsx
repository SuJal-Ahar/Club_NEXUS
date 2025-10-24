import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type OperationCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "secondary" | "accent";
};

export const OperationCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  disabled = false,
  variant = "default"
}: OperationCardProps) => {
  const getGradientClass = () => {
    switch (variant) {
      case "secondary":
        return "from-secondary/20 to-secondary/5";
      case "accent":
        return "from-accent/20 to-accent/5";
      default:
        return "from-primary/20 to-primary/5";
    }
  };

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      <Card className={`relative overflow-hidden ${disabled ? "opacity-50" : "shadow-card hover:shadow-glow transition-all"}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()}`} />
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg ${variant === "secondary" ? "bg-secondary" : variant === "accent" ? "bg-accent" : "bg-primary"}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <Button 
            onClick={onClick} 
            disabled={disabled}
            className="w-full"
            variant={variant === "default" ? "default" : variant === "secondary" ? "secondary" : "outline"}
          >
            {disabled ? "No Access" : "Access"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
