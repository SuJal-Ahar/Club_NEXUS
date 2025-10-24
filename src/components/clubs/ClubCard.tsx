import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

type ClubCardProps = {
  name: string;
  description: string;
  memberCount?: number;
  onSelect: () => void;
};

export const ClubCard = ({ name, description, memberCount = 0, onSelect }: ClubCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="relative overflow-hidden shadow-card hover:shadow-glow transition-shadow cursor-pointer" onClick={onSelect}>
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {name}
          </CardTitle>
          <CardDescription className="text-foreground/70">{description}</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>{memberCount} members</span>
            </div>
            <Button variant="default" size="sm">
              Explore
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
