import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { OperationCard } from "@/components/clubs/OperationCard";
import { Plus, Users, Edit, LogOut } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

type UserRole = "student" | "coordinator" | "professor";

const Dashboard = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [userRole, setUserRole] = useState<UserRole>("student");
  const [clubName, setClubName] = useState("");
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      try {
        // Get user role
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("user_id", user.id)
          .single();

        if (profile) {
          setUserRole(profile.role as UserRole);
        }

        // Get club info
        const { data: club } = await supabase
          .from("clubs")
          .select("name")
          .eq("id", clubId)
          .single();

        if (club) {
          setClubName(club.name);
        }

        // Check membership
        const { data: membership } = await supabase
          .from("club_members")
          .select("id")
          .eq("club_id", clubId)
          .eq("user_id", user.id)
          .single();

        setIsMember(!!membership);
      } catch (error: any) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, clubId]);

  const handleJoinClub = async () => {
    if (!user || !clubId) return;

    try {
      const { error } = await supabase
        .from("club_members")
        .insert({ club_id: clubId, user_id: user.id });

      if (error) throw error;

      toast.success("Successfully joined the club!");
      setIsMember(true);
    } catch (error: any) {
      toast.error(error.message || "Failed to join club");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  const canCreate = userRole === "professor";
  const canUpdate = userRole === "coordinator" || userRole === "professor";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {clubName}
            </h1>
            <p className="text-muted-foreground mt-2">
              Welcome! Your role: <span className="font-semibold text-foreground capitalize">{userRole}</span>
            </p>
          </motion.div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/")}>
              Back to Clubs
            </Button>
            <Button variant="destructive" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <OperationCard
              title="Create Events"
              description="Create new club events and activities"
              icon={Plus}
              disabled={!canCreate}
              onClick={() => toast.info("Create feature coming soon!")}
              variant="default"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <OperationCard
              title="Update Club"
              description="Edit club information and settings"
              icon={Edit}
              disabled={!canUpdate}
              onClick={() => toast.info("Update feature coming soon!")}
              variant="secondary"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <OperationCard
              title="View Members"
              description="See all club members and their roles"
              icon={Users}
              onClick={() => toast.info("Member list coming soon!")}
              variant="accent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <OperationCard
              title={isMember ? "Already Member" : "Join Club"}
              description={isMember ? "You are part of this club" : "Become a member today"}
              icon={Users}
              disabled={isMember}
              onClick={handleJoinClub}
              variant="accent"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
