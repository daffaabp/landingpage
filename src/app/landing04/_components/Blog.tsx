import Image from "next/image";
import type React from "react";
import { BLOG_POSTS } from "./constants";
import SectionHeader from "./SectionHeader";

const Blog: React.FC = () => {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Wawasan Terbaru Dunia Riset AI"
          subtitle="Artikel Pilihan"
          highlightWord="Riset"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Featured Post */}
          <div className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden shadow-md h-[350px] mb-6 relative">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-md text-xs font-bold text-[#1E3A8A] shadow-sm uppercase tracking-wide">
                {featured.category}
              </div>
            </div>
            <div className="pr-4">
              <div className="text-gray-500 text-sm mb-2">{featured.date}</div>
              <h3 className="text-2xl font-(family-name:--font-lora) font-bold text-gray-900 mb-3 group-hover:text-[#1E3A8A] transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">
                Pelajari batasan etis dan integritas akademik saat menggunakan
                Large Language Models (LLM) dalam penulisan...
              </p>
            </div>
          </div>

          {/* Side Posts */}
          <div className="flex flex-col gap-8 justify-center">
            {others.map((post) => (
              <div
                key={post.id}
                className="flex flex-col sm:flex-row gap-6 group cursor-pointer items-start"
              >
                <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden shadow-sm shrink-0 relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="text-[#D97706] text-xs font-bold uppercase mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-(family-name:--font-lora) font-bold text-gray-900 mb-2 group-hover:text-[#1E3A8A] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="text-gray-400 text-sm">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
