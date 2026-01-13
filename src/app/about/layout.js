import ConnectWithUs from "@/components/ConnectWithUs";
import ContactPage from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import { Toaster } from "sonner";

export const metadata = {

  title: "About Us - AM Office",
  description: "Learn more about AM Offices",
  keywords:
    "portable office cabins,portable toilets, modular homes, security guard rooms, container cafes, prefab solutions, office cabins, portable houses, portable workspaces, AM Office Solutions",
  author: "AM Office Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.amoffices.in/about", // ← ✅ Canonical tag here
  },
};

export default function AppLayout({ children }) {
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      {children}
      {/* <MapSection />
      <ConnectWithUs /> */}
    </>
  );
}
