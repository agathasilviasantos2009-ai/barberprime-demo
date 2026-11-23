import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MediaPlaceholder({ className = "", iconClassName = "" }) {
  return (
    <div className={cn("flex items-center justify-center bg-black", className)}>
      <Camera
        aria-hidden="true"
        strokeWidth={1.2}
        className={cn("h-8 w-8 text-primary/60 sm:h-10 sm:w-10", iconClassName)}
      />
    </div>
  );
}