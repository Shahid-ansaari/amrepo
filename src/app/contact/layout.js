import ConnectWithUs from "@/components/ConnectWithUs";
import ContactPage from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import { Toaster } from "sonner";

export default function AppLayout({ children }) {
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      {children}
      <MapSection/>
      <ConnectWithUs/>
      
      
    </>
  );
}
