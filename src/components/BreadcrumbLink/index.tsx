import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"; // caso você use essa função do ShadCN

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbLinkProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  items,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        "flex items-center text-sm text-muted-foreground  mb-3",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <button
            disabled={item.active || !item.href}
            onClick={() => item.href && navigate(item.href)}
            className={cn(
              "transition-colors hover:text-primary",
              item.active ? "font-semibold text-foreground cursor-default" : ""
            )}
          >
            {item.label}
          </button>

          {index < items.length - 1 && (
            <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </nav>
  );
};
