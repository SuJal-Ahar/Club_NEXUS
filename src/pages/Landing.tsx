import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Calendar, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import landingBg from "@/assets/landing-bg.jpg";
import confetti from "@/assets/confetti.png";

const Landing = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "Manage Clubs",
      description: "Explore and manage student clubs, join communities, and connect with like-minded students",
      icon: Users,
      path: "/clubs",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Manage Events",
      description: "Discover upcoming campus events, create new events, and manage event registrations",
      icon: Calendar,
      path: "/events",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${landingBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/95" />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.img 
              src={confetti}
              alt="Celebration"
              className="h-16 w-16"
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
            <h1 className="text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Club Nexus
            </h1>
            <Sparkles className="h-12 w-12 text-primary animate-glow" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your one-stop platform for campus clubs and events management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card
                  className="relative overflow-hidden cursor-pointer group hover:shadow-glow transition-all duration-300 h-full"
                  onClick={() => navigate(option.path)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <CardHeader className="relative pb-4">
                    <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${option.gradient} p-4 mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                      <Icon className="h-full w-full text-white" />
                    </div>
                    <CardTitle className="text-3xl text-center bg-gradient-primary bg-clip-text text-transparent">
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <CardDescription className="text-center text-foreground/70 text-lg">
                      {option.description}
                    </CardDescription>
                    <div className="mt-6 text-center">
                      <span className={`text-sm font-semibold bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent group-hover:underline`}>
                        Get Started →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Landing;
