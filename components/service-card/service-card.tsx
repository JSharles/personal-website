import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({
  image,
  icon,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div
      className="
        relative rounded-xl overflow-hidden text-white
        shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        group h-80
        transform transition-transform duration-300 hover:-translate-y-1
      "
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      <div className="relative z-20 flex flex-col justify-between items-center text-center h-full px-6 py-8">
        <div className="flex flex-col items-center">
          <div
            className="
              mb-4 flex items-center justify-center
              w-14 h-14 p-3 bg-white/20 rounded-full
            "
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>

        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
};
