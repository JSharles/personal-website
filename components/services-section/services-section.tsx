import { Briefcase, FileText, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const services = [
  {
    icon: <User className="h-6 w-6" />,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications using React, TypeScript, and cutting-edge technologies.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from frontend to backend, APIs, and database design.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native for iOS and Android.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
