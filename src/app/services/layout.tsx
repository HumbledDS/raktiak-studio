import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | RakTiak Studio",
  description: "Découvrez mes services de développement web sur mesure pour votre entreprise. Sites vitrines, e-commerce et applications web personnalisées.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 