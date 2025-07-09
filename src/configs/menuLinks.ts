import type { LucideIcon } from "lucide-react";
import { Home, Info } from "lucide-react";

export const menuLinks: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
];
