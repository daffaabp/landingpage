import type { LucideIcon } from "lucide-react";

export interface FeatureCard {
  id: number;
  title: string;
  description: string;
  color: "purple" | "orange" | "yellow";
  icon: LucideIcon;
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  imageUrl: string;
  color: string;
}

export interface Course {
  id: number;
  title: string;
  ageGroup: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  isFeatured?: boolean;
}
