import type { LucideIcon } from "lucide-react";
import { Coins, Home, Info, Sparkles, User } from "lucide-react";

export const menuLinks: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/products", label: "Products", icon: Info },
  { to: "/sales", label: "Sales", icon: Sparkles },
  {to: '/users', label: "Users", icon: User},
  {to: '/financial', label: "Financial", icon: Coins}
];

export const menuLinksFooter:  { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Home", icon: Home },

  {to: '/users', label: "Users", icon: User}
];

