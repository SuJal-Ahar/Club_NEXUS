import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { ClubCard } from "@/components/clubs/ClubCard";
import { Button } from "@/components/ui/button";
import { LogOut, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

type Club = {
  id: string;
  name: string;
  description: string;
  memberCount: number;
};

const Index = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchClubs = async () => {
      const { data: clubsData } = await supabase.from("clubs").select("*");
      
      if (clubsData) {
        const clubsWithMembers = await Promise.all(
          clubsData.map(async (club) => {
            const { count } = await supabase
              .from("club_members")
              .select("*", { count: "exact", head: true })
              .eq("club_id", club.id);
            
            return {
              id: club.id,
              name: club.name,
              description: club.description || "",
              memberCount: count || 0,
            };
          })
        );
        setClubs(clubsWithMembers);
      }
    };

    if (user) {
      fetchClubs();
    }
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-muted/95" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2 flex items-center gap-3">
              <Sparkles className="h-12 w-12 text-primary animate-glow" />
              Club Hub
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose your club and explore amazing opportunities
            </p>
          </motion.div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clubs.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ClubCard
                name={club.name}
                description={club.description}
                memberCount={club.memberCount}
                onSelect={() => navigate(`/dashboard/${club.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
