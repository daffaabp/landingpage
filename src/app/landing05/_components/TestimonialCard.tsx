import { Star } from "lucide-react";
import Image from "next/image";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-50 shrink-0 w-full md:w-[400px] snap-center">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={`${testimonial.id}-star-${i}`}
            className="fill-brand-orange text-brand-orange"
            size={18}
          />
        ))}
      </div>
      <blockquote className="text-gray-700 text-lg italic mb-6 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover border-2 border-brand-purple"
        />
        <div>
          <h4 className="font-bold text-gray-900 font-heading">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
