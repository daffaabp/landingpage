"use client";

import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import type React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Button from "./Button";

const data = [
  { name: "Minggu 1", manual: 20, ai: 20 },
  { name: "Minggu 2", manual: 35, ai: 55 },
  { name: "Minggu 3", manual: 45, ai: 85 },
  { name: "Minggu 4", manual: 50, ai: 98 },
];

const ValueProp: React.FC = () => {
  return (
    <section id="masalah" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content - Problem & Solution */}
          <div className="w-full lg:w-1/2">
            <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm mb-2 block">
              Tantangan Peneliti
            </span>
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-lora) font-bold text-gray-900 mb-6 leading-tight">
              Lalu Lintas Ide Tinggi, <br />
              <span className="text-[#1E3A8A]">Konversi Tulisan Rendah?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 text-justify">
              Banyak peneliti memiliki ide brilian, namun terhambat dalam proses
              penuangan ke dalam naskah. Tanpa alat yang tepat, waktu berharga
              terbuang untuk hal teknis, bukan substansi.
            </p>
            <div className="bg-orange-50 border-l-4 border-[#D97706] p-4 mb-8 italic text-gray-700">
              "Satu minggu tertunda karena buntu mencari referensi bisa menunda
              publikasi hingga berbulan-bulan."
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                  <XCircle className="text-red-500 mr-2" size={20} /> Cara Lama
                  (Manual)
                </h4>
                <p className="text-sm text-gray-600 ml-7">
                  Mencari satu per satu di Google Scholar, membaca abstrak
                  manual, menyusun kalimat dari nol.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A8A] mb-2 flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} /> Cara
                  Baru (AI Assisted)
                </h4>
                <p className="text-sm text-gray-600 ml-7">
                  Mapping literatur otomatis, sintesis ide instan, dan parafrase
                  anti-plagiasi dalam hitungan menit.
                </p>
              </div>
            </div>

            <Button variant="primary" icon={<ArrowRight size={20} />}>
              Pelajari Metodenya
            </Button>
          </div>

          {/* Visual - Chart */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  Progres Penulisan Naskah
                </h3>
                <p className="text-sm text-gray-500">Manual vs Bantuan AI</p>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#1E3A8A"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#1E3A8A"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorManual"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#94a3b8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#94a3b8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e2e8f0"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="manual"
                      stroke="#94a3b8"
                      fillOpacity={1}
                      fill="url(#colorManual)"
                      strokeWidth={2}
                      name="Metode Manual"
                    />
                    <Area
                      type="monotone"
                      dataKey="ai"
                      stroke="#1E3A8A"
                      fillOpacity={1}
                      fill="url(#colorAi)"
                      strokeWidth={3}
                      name="Dengan AI"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex justify-between items-center text-sm border-t pt-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-slate-400 rounded-full mr-2"></span>
                  <span className="text-gray-600">Manual (Lambat)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#1E3A8A] rounded-full mr-2"></span>
                  <span className="font-bold text-[#1E3A8A]">
                    AI (Eksponensial)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
