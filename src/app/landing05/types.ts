export interface Service {
    id: number;
    title: string;
    image: string;
    description: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    layout: 'left' | 'right';
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
}
