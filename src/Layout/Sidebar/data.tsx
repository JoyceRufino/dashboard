import {
  ClipboardMinus,
  Coins,
  Component,
  ContactRound,
  CreditCard,
  Dock,
  Home,
  IdCard,
  Info,
  Shapes,
  Sparkle,
  User,
  Users,
} from "lucide-react";

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
    to: "/students",
    label: "Alunos",
    icon: IdCard,
  },
  {
    to: "/instructors",
    label: "Instrutores",
    icon: ContactRound,
  },
  {
    to: "/partnerships",
    label: "Parceiros",
    icon: Component,
  },
  {
    to: "/classes",
    label: "Aulas",
    icon: Shapes,
  },
  {
    to: "/exams",
    label: "Exames",
    icon: ClipboardMinus,
  },
  {
    to: "/users",
    label: "Usuarios",
    icon: Users,
  },

  {
    to: "/financial",
    label: "Faturas",
    icon: CreditCard,
  },
];
