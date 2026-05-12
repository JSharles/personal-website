import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

export const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden text-foreground border h-80 transform transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${color}18 0%, #F4F5F7 65%)`,
        borderColor: `${color}35`,
      }}
    >
      <div className="relative z-20 flex flex-col justify-between items-center text-center h-full px-6 py-8">
        <div className="flex flex-col items-center">
          <div
            className="mb-4 flex items-center justify-center w-14 h-14 p-3 rounded-full"
            style={{ backgroundColor: `${color}20` }}
          >
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>

        <p className="text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
};
