import { Briefcase, Smartphone, User, Palette } from "lucide-react";
import { ServiceCard } from "../service-card/service-card";

const services = [
  {
    icon: <User className="h-6 w-6" />,
    title: "Product-focused Frontend",
    description:
      "Elegant, responsive UIs with React & TypeScript — crafted to engage users and enhance your product experience.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "End-to-End Product Development",
    description:
      "From UX wireframes to production-ready apps — fullstack development tailored to your product vision. Includes blockchain integrations (certified by Alyra).",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile App Development",
    description:
      "Native-like cross-platform apps with React Native — delivering seamless experiences on iOS and Android.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UX & Branding Support",
    description:
      "Shape your product’s identity — branding, design systems and UX/UI guidance for a cohesive and memorable experience.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
