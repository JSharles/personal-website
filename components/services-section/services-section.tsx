"use client";

import { Target, Sparkles, Briefcase, RefreshCw } from "lucide-react";
import { ServiceCard } from "../service-card/service-card";
import { useTranslations } from "next-intl";

export const ServicesSection = () => {
  const t = useTranslations("services");

  const services = [
    { icon: <Target className="h-6 w-6" />, titleKey: "workflow_title", descKey: "workflow_desc", color: "#9333ea" },
    { icon: <Sparkles className="h-6 w-6" />, titleKey: "ai_title", descKey: "ai_desc", color: "#3b82f6" },
    { icon: <Briefcase className="h-6 w-6" />, titleKey: "fullstack_title", descKey: "fullstack_desc", color: "#10b981" },
    { icon: <RefreshCw className="h-6 w-6" />, titleKey: "revamp_title", descKey: "revamp_desc", color: "#f97316" },
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
