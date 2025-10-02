import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "pending" | "inactive";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    active: "bg-[#10B981] text-white",
    pending: "bg-[#F59E0B] text-white",
    inactive: "bg-[#EF4444] text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize",
        styles[status]
      )}
    >
      {status}
    </span>
  );
}
