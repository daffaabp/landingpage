import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import type React from "react";
import Button from "./Button";
import { COURSES } from "./constants";

const Courses: React.FC = () => {
  return (
    <section id="materi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sticky Content */}
          <div className="lg:w-1/3">
            <div className="sticky top-28">
              <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm mb-2 block">
                Materi Webinar
              </span>
              <h2 className="text-3xl md:text-4xl font-(family-name:--font-lora) font-bold text-gray-900 mb-6 leading-tight">
                Topik Bahasan <br />
                <span className="text-[#1E3A8A]">Eksklusif</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Kami merancang materi ini khusus untuk menjawab kebuntuan yang
                sering dialami peneliti saat menyusun naskah jurnal
                internasional.
              </p>
              <Button variant="outline" icon={<Calendar size={20} />}>
                Lihat Jadwal Lengkap
              </Button>
            </div>
          </div>

          {/* Right Images */}
          <div className="lg:w-2/3 grid gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px] border border-gray-100"
              >
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-50 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-md mb-3">
                    {course.ageGroup}
                  </span>
                  <h3 className="text-2xl font-(family-name:--font-lora) font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <div className="absolute bottom-8 right-8 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A8A] transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
