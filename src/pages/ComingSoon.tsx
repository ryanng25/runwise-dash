import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Coming Soon</h1>
        <p className="text-muted-foreground mb-8">
          This feature is currently under development
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-[#EF6D58] hover:bg-[#EF6D58]/90 text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
