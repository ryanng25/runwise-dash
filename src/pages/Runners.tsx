import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
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
const runners = [
  {
    id: 1,
    name: "Maria Santos",
    email: "maria.santos@example.com",
    status: "active" as const,
    age: 28,
    gender: "Female",
    address: "Manila, Philippines",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.com",
    status: "active" as const,
    age: 32,
    gender: "Male",
    address: "Quezon City, Philippines",
  },
  {
    id: 3,
    name: "Anna Reyes",
    email: "anna.reyes@example.com",
    status: "inactive" as const,
    age: 25,
    gender: "Female",
    address: "Cebu City, Philippines",
  },
  {
    id: 4,
    name: "Pedro Garcia",
    email: "pedro.garcia@example.com",
    status: "active" as const,
    age: 35,
    gender: "Male",
    address: "Davao City, Philippines",
  },
  {
    id: 5,
    name: "Lisa Tan",
    email: "lisa.tan@example.com",
    status: "active" as const,
    age: 29,
    gender: "Female",
    address: "Makati, Philippines",
  },
];

export default function Runners() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground">Registered Users</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter by
        </Button>
        <Button variant="outline" className="gap-2">
          <FileDown className="w-4 h-4" />
          Export
        </Button>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {runners
              .filter((runner) =>
                runner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                runner.email.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((runner) => (
                <TableRow
                  key={runner.id}
                  className="hover:bg-muted/30 cursor-pointer"
                  onClick={() => navigate(`/runners/${runner.id}`)}
                >
                  <TableCell className="font-medium">{runner.name}</TableCell>
                  <TableCell>{runner.email}</TableCell>
                  <TableCell>
                    <StatusBadge status={runner.status} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Rows per page</span>
          <Select defaultValue="5">
            <SelectTrigger className="w-16">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Showing 1-5 of 5</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-muted">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
