"use client";

import { Briefcase, Smartphone, User, Palette } from "lucide-react";
import { ServiceCard } from "../service-card/service-card";
import { useTranslations } from "next-intl";

export const ServicesSection = () => {
  const t = useTranslations("services");

  const services = [
    { icon: <User className="h-6 w-6" />, titleKey: "frontend_title", descKey: "frontend_desc", color: "#9333ea" },
    { icon: <Briefcase className="h-6 w-6" />, titleKey: "e2e_title", descKey: "e2e_desc", color: "#3b82f6" },
    { icon: <Smartphone className="h-6 w-6" />, titleKey: "mobile_title", descKey: "mobile_desc", color: "#10b981" },
    { icon: <Palette className="h-6 w-6" />, titleKey: "ux_title", descKey: "ux_desc", color: "#f97316" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium tracking-[0.25em] uppercase text-center mb-12">{t("title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey as keyof typeof t)}
              description={t(service.descKey as keyof typeof t)}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
