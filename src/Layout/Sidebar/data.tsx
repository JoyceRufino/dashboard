import { Coins, Dock, Home, Info, Sparkle, User } from "lucide-react";

export interface SidebarItem {
  to: string;
  label: string;
  icon: React.ElementType;
}

export const sidebarData: SidebarItem[] = [
  {
    to: "/",
    label: "Home",
    icon: Home,
  },
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: Info,
  },
  {
    to: "/students",
    label: "Alunos",
    icon: Dock,
  },
  {
    to: "/instructors",
    label: "Instrutores",
    icon: Sparkle,
  },
  {
    to: "/classes",
    label: "Aulas",
    icon: User,
  },
  {
    to: "/exams",
    label: "Exames",
    icon: User,
  },
  {
    to: "/users",
    label: "Usuarios",
    icon: User,
  },

  {
    to: "/financial",
    label: "Faturas",
    icon: Coins,
  },
  {
    to: "/partnerships",
    label: "Parceiros",
    icon: User,
  },
];
