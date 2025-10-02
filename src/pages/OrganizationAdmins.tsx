import { useState } from "react";
import { Plus, Search, Filter, FileDown } from "lucide-react";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const organizationAdmins = [
  { id: 1, name: "Ryan", email: "guditotest@gmail.com", status: "active" as const },
  { id: 2, name: "Kerby Paderogao", email: "kerbyjoy@gmail.com", status: "pending" as const },
  { id: 3, name: "Kerby Paderogao", email: "kerbypaderogao@gmail.com", status: "active" as const },
  { id: 4, name: "Test 700", email: "test700@gmail.com", status: "active" as const },
  { id: 5, name: "Test 600", email: "test600@gmail.com", status: "active" as const },
];

export default function OrganizationAdmins() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-[#EF6D58] hover:bg-[#EF6D58]/90 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add new user
        </Button>
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
            {organizationAdmins
              .filter((admin) =>
                admin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                admin.email.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((admin) => (
                <TableRow key={admin.id} className="hover:bg-muted/30">
                  <TableCell className="font-medium">{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>
                    <StatusBadge status={admin.status} />
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
          <span className="text-sm text-muted-foreground">Showing 1-5 of 24</span>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-muted">
              1
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                <span className="text-destructive">*</span> Email
              </Label>
              <Input id="email" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                <span className="text-destructive">*</span> Password
              </Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-sm">
                <span className="text-destructive">*</span> Full Name
              </Label>
              <Input id="fullname" placeholder="Enter full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm">
                <span className="text-destructive">*</span> Role
              </Label>
              <Select defaultValue="user">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="org-admin">Organization Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization" className="text-sm">
                <span className="text-destructive">*</span> Organization
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select organization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="org1">Running Philippines</SelectItem>
                  <SelectItem value="org2">Cebu Runners Club</SelectItem>
                  <SelectItem value="org3">Mindanao Athletics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white">
              Create User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
