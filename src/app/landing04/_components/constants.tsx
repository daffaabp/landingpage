import {
  Award,
  BookOpen,
  BrainCircuit,
  Clock,
  Database,
  FileCheck,
  PenTool,
  Search,
} from "lucide-react";
import type {
  BlogPost,
  Course,
  FeatureCard,
  Teacher,
  Testimonial,
} from "./types";

export const HERO_FEATURES: FeatureCard[] = [
  {
    id: 1,
    title: "Referensi Akurat",
    description:
      "Temukan sitasi yang relevan dan valid dalam hitungan detik, bukan jam.",
    color: "purple", // Kept keys for mapping, but styling will use theme colors
    icon: Database,
  },
  {
    id: 2,
    title: "Kebaruan (Novelty)",
    description:
      "Identifikasi celah riset (research gap) dengan analisis data besar berbasis AI.",
    color: "orange",
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: "Efisiensi Waktu",
    description:
      "Pangkas waktu penulisan hingga 50% tanpa mengurangi kualitas ilmiah.",
    color: "yellow",
    icon: Clock,
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: 1,
    name: "Prof. Dr. Budi Santoso",
    subject: "Reviewer Jurnal Scopus Q1",
    imageUrl: "https://picsum.photos/id/1053/300/400",
    color: "bg-[#1E3A8A]",
  },
  {
    id: 2,
    name: "Dr. Siti Aminah, M.Sc.",
    subject: "Pakar Etika AI Akademik",
    imageUrl: "https://picsum.photos/id/1011/300/400",
    color: "bg-[#D97706]",
  },
  {
    id: 3,
    name: "Rahmat Hidayat, Ph.D.",
    subject: "Peneliti Senior BRIN",
    imageUrl: "https://picsum.photos/id/1060/300/400",
    color: "bg-[#3B82F6]",
  },
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Prompt Engineering untuk Riset",
    ageGroup: "Sesi 1: 09.00 - 10.30 WIB",
    imageUrl: "https://picsum.photos/id/1/600/400",
  },
  {
    id: 2,
    title: "Etika & Validasi Data AI",
    ageGroup: "Sesi 2: 10.45 - 12.00 WIB",
    imageUrl: "https://picsum.photos/id/3/600/400",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Hendra Gunawan",
    role: "Dosen Universitas Negeri",
    rating: 5,
    quote:
      "Webinar ini membuka mata saya. Dulu saya skeptis dengan AI, sekarang saya menggunakannya untuk mempercepat literature review.",
    avatarUrl: "https://picsum.photos/id/1005/100/100",
  },
  {
    id: 2,
    name: "Sari Wulandari, M.Pd.",
    role: "Peneliti Sosial",
    rating: 5,
    quote:
      "Sangat praktis dan aplikatif. Masalah 'writer's block' saat menulis pendahuluan teratasi berkat teknik yang diajarkan.",
    avatarUrl: "https://picsum.photos/id/338/100/100",
  },
  {
    id: 3,
    name: "Prof. Agus Salim",
    role: "Guru Besar Teknik",
    rating: 5,
    quote:
      "Materi tentang mencari novelty sangat akurat. Wajib diikuti oleh mahasiswa S2 dan S3 yang sedang menyusun tesis.",
    avatarUrl: "https://picsum.photos/id/47/100/100",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Etika Penggunaan ChatGPT dalam Jurnal Ilmiah",
    date: "12 Okt 2023",
    category: "Etika Akademik",
    imageUrl: "https://picsum.photos/id/20/800/600",
    isFeatured: true,
  },
  {
    id: 2,
    title: "5 Tools AI Terbaik untuk Literature Mapping",
    date: "08 Okt 2023",
    category: "Teknologi",
    imageUrl: "https://picsum.photos/id/48/400/300",
  },
  {
    id: 3,
    title: "Cara Menghindari Plagiarisme AI",
    date: "29 Sep 2023",
    category: "Tips Menulis",
    imageUrl: "https://picsum.photos/id/60/400/300",
  },
];

export const TICKER_ITEMS = [
  { text: "Literature Review Cepat", icon: <BookOpen className="w-5 h-5" /> },
  { text: "Parafrase Akademik", icon: <PenTool className="w-5 h-5" /> },
  { text: "Validasi Data", icon: <FileCheck className="w-5 h-5" /> },
  { text: "Analisis Gap Riset", icon: <Search className="w-5 h-5" /> },
  { text: "Publikasi Internasional", icon: <Award className="w-5 h-5" /> },
];
