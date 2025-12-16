import type { BlogPost, Feature, Service, Testimonial } from './types';

// Bagian "Apa yang Akan Anda Pelajari" (Materi Webinar)
export const SERVICES: Service[] = [
    {
        id: 1,
        title: "Teknik Prompting Akademik",
        image: "https://picsum.photos/id/60/400/300", // Ganti dengan gambar relevan (komputer/riset)
        description: "Pelajari struktur prompt yang tepat untuk menghasilkan tinjauan pustaka yang mendalam dan relevan secara akademis."
    },
    {
        id: 2,
        title: "Bebas Plagiasi & Etika",
        image: "https://picsum.photos/id/20/400/300", // Gambar buku/menulis
        description: "Strategi parafrase tingkat lanjut menggunakan AI untuk memastikan orisinalitas karya dan lolos uji Turnitin."
    },
    {
        id: 3,
        title: "Efisiensi Publikasi",
        image: "https://picsum.photos/id/3/400/300", // Gambar teknologi/ceklis
        description: "Mempercepat proses penulisan dari berbulan-bulan menjadi hitungan hari tanpa mengorbankan kualitas ilmiah."
    }
];

// Bagian "Masalah vs Solusi" (Pain Points)
export const FEATURES: Feature[] = [
    {
        id: 1,
        title: "Stres Menghadapi Deadline dan Writer's Block?",
        description: "Tantangan terbesar peneliti adalah memulai. Layar kosong seringkali menjadi musuh utama. Kami akan menunjukkan bagaimana AI dapat menjadi asisten riset yang menyediakan kerangka berpikir awal, sehingga Anda tidak pernah menulis dari nol lagi.",
        image: "https://picsum.photos/id/4/600/500", // Orang berpikir/stres
        tags: ["Masalah Umum", "Writer's Block", "Efisiensi Waktu"],
        layout: 'left'
    },
    {
        id: 2,
        title: "Ketakutan Akan Plagiasi dan Penolakan Jurnal",
        description: "Kekhawatiran terbesar akademisi adalah integritas. Banyak yang salah menggunakan AI sehingga terdeteksi sebagai plagiasi. Di webinar ini, Anda akan mempelajari metode 'Human-in-the-loop' untuk menjaga suara penulis tetap otentik dan lolos standar jurnal bereputasi.",
        image: "https://picsum.photos/id/180/600/500", // Dokumen/Laptop
        tags: ["Integritas Akademik", "Lolos Turnitin", "Publikasi Scopus"],
        layout: 'right'
    },
    {
        id: 3,
        title: "Alur Kerja Riset Modern Berbasis Data",
        description: "Jangan habiskan waktu untuk hal teknis yang repetitif. Biarkan AI menangani pemformatan, sitasi, dan pencarian referensi, sehingga Anda dapat fokus pada analisis substansial dan kontribusi keilmuan yang nyata.",
        image: "https://picsum.photos/id/1/600/500", // Data/Analitik
        tags: ["Metodologi Baru", "Riset Cerdas", "Fokus Analisis"],
        layout: 'left'
    }
];

// Bukti Sosial
export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Budi Santoso, M.Pd.",
        role: "Dosen Universitas Negeri",
        content: "Awalnya saya skeptis menggunakan AI untuk jurnal. Setelah webinar ini, produktivitas publikasi saya meningkat 300% dengan tetap menjaga integritas akademik.",
        avatar: "https://picsum.photos/id/64/100/100",
        rating: 5
    },
    {
        id: 2,
        name: "Siti Aminah, S.Si.",
        role: "Mahasiswa Pascasarjana",
        content: "Tesis saya sempat macet selama 4 bulan. Teknik prompting yang diajarkan membantu saya menyelesaikan Bab 2 hanya dalam waktu satu minggu.",
        avatar: "https://picsum.photos/id/91/100/100",
        rating: 5
    },
    {
        id: 3,
        name: "Prof. Hendra Wijaya",
        role: "Reviewer Jurnal Internasional",
        content: "Materi yang sangat penting. Mengajarkan cara menggunakan teknologi secara etis, bukan curang. Sangat direkomendasikan untuk para peneliti.",
        avatar: "https://picsum.photos/id/65/100/100",
        rating: 5
    }
];

// Tidak digunakan dalam landing page konversi tinggi (distraksi), tapi dibiarkan kosong atau dummy agar tidak error
export const BLOG_POSTS: BlogPost[] = [];
