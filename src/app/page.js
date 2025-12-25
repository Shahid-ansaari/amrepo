import Image from "next/image";
import ContactButtons from "@/components/ContactButtons";
import ModernChatbot from "@/components/ModernChatbot";
import HeroSection from "@/components/Hero";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import ProductOfferings from "@/components/ProductOfferings";
import ChooseUs from "@/components/ChooseUs";
import FeaturesSection from "@/components/featuresCard";
import WhyChooseGlass from "@/components/WhyChooseGlass";
import WhyChooseMinimal from "@/components/WhyChooseMinimal";
import TrustIndicators from "@/components/TrustIndicators";
import ProcessSteps from "@/components/ProcessSteps";
import FeatureGrid from "@/components/FeatureGrid";
import ConnectWithUs from "@/components/ConnectWithUs";
import ProductGrid from "@/components/ProductGrid";
import ProjectGallery from "@/components/ProjectGallery";
import TrustedPartners from "@/components/TrustedPartners";
import FAQSection from "@/components/FAQSection";
import MapSection from "@/components/MapSection";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";



export default function Home() {
  return (
    <div className="  ">
      {/* Hello Shahid */}
      <HeroSection />
      <ContactButtons />
      <ModernChatbot />
      <ProductOfferings />
      <div className=" hidden md:block">

        <FeaturesSection />
      </div>
      {/* <WhyChooseGlass/> */}
      <ChooseUs />
      <TrustIndicators />
      <ProductGrid />
      <TrustedPartners />
      {/* <WhyChooseMinimal/> */}
      <ProcessSteps />
      <FeatureGrid />
      <ConnectWithUs />
      <ProjectGallery />
      <ContactForm/>
      <FAQSection />
      <MapSection />








    </div>
  );
}


