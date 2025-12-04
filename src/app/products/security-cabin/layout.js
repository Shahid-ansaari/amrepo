import ConnectWithUs from "@/components/ConnectWithUs";
import ContactPage from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <>
      <Toaster position="top-left" richColors closeButton />
      {children}
      
      
      
    </>
  );
}
