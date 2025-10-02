import { StatsCard } from "@/components/dashboard/StatsCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data
const activeEvents = [
  {
    id: 1,
    name: "Manila Bay Fun Run 2025",
    organization: "Running Philippines",
    runners: 450,
    date: "2025-11-15",
    status: "active",
  },
  {
    id: 2,
    name: "Cebu City Marathon",
    organization: "Cebu Runners Club",
    runners: 320,
    date: "2025-12-01",
    status: "active",
  },
  {
    id: 3,
    name: "Davao Sunset Run",
    organization: "Mindanao Athletics",
    runners: 280,
    date: "2025-11-22",
    status: "active",
  },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, Pace</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Total Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Admin" value={5} />
          <StatsCard title="Organizational Admin" value={12} />
          <StatsCard title="Organization Users" value={12} />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Active Events & Organization</h2>
        <p className="text-muted-foreground mb-6">Overview of current platform activity</p>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Event Name</TableHead>
                <TableHead className="font-semibold">Organization</TableHead>
                <TableHead className="font-semibold">Number of Runners</TableHead>
                <TableHead className="font-semibold">Event Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeEvents.map((event) => (
                <TableRow key={event.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.organization}</TableCell>
                  <TableCell>{event.runners}</TableCell>
                  <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
