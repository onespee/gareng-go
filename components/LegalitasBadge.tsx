import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface LegalitasBadgeProps {
  type: "NIB" | "PIRT" | "Halal";
  certified: boolean;
  className?: string;
}

export function LegalitasBadge({ type, certified, className }: LegalitasBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
        certified
          ? "bg-primary-50 text-primary-700 border-primary-200"
          : "bg-gray-50 text-gray-500 border-gray-200",
        className
      )}
    >
      {certified ? (
        <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
      ) : (
        <XCircle className="w-3.5 h-3.5 text-gray-400" />
      )}
      {type}
    </div>
  );
}
