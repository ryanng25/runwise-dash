import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const runnersData: Record<string, any> = {
  "1": {
    name: "Maria Santos",
    age: 28,
    gender: "Female",
    address: "Manila, Philippines",
    email: "maria.santos@example.com",
    status: "active" as const,
    events: [
      {
        id: 1,
        eventName: "Manila Bay Fun Run 2025",
        organization: "Running Philippines",
        category: "5 km",
        placement: "12th",
        date: "2025-11-15",
      },
      {
        id: 2,
        eventName: "BGC Night Run",
        organization: "Metro Manila Runners",
        category: "10 km",
        placement: "8th",
        date: "2025-10-20",
      },
    ],
  },
  "2": {
    name: "Juan Dela Cruz",
    age: 32,
    gender: "Male",
    address: "Quezon City, Philippines",
    email: "juan.delacruz@example.com",
    status: "active" as const,
    events: [
      {
        id: 1,
        eventName: "Cebu City Marathon",
        organization: "Cebu Runners Club",
        category: "21 km",
        placement: "5th",
        date: "2025-12-01",
      },
    ],
  },
};

export default function RunnerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const runner = runnersData[id || "1"];

  if (!runner) {
    return (
      <div className="p-8">
        <p>Runner not found</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <Button
        variant="ghost"
        className="mb-6 -ml-2"
        onClick={() => navigate("/runners")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Runners
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">Runner Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="font-semibold">{runner.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold">{runner.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Age</p>
                <p className="font-semibold">{runner.age} years old</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Gender</p>
                <p className="font-semibold">{runner.gender}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground mb-1">Address</p>
                <p className="font-semibold">{runner.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Current Status</p>
              <StatusBadge status={runner.status} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Update Status</p>
              <Select defaultValue={runner.status}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white">
              Update Status
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Event Participation History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Event Name</TableHead>
                  <TableHead className="font-semibold">Organization</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Placement</TableHead>
                  <TableHead className="font-semibold">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {runner.events.map((event: any) => (
                  <TableRow key={event.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{event.eventName}</TableCell>
                    <TableCell>{event.organization}</TableCell>
                    <TableCell>{event.category}</TableCell>
                    <TableCell>{event.placement}</TableCell>
                    <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
