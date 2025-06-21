import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "New York, USA",
    icon: (
      <MapPin className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+64210 8833 974",
    icon: (
      <Phone className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon-Sat 9:00-18:00",
    icon: (
      <Clock className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "ShopCart@gmail.com",
    icon: (
      <Mail className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];
