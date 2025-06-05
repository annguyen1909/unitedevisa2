// app/destinations/kenya/page.tsx

import { Metadata } from "next";
import data from "./data";
import DestinationHero from "@/app/components/destinations/DestinationHero";
import AboutEta from "@/app/components/destinations/AboutEta";
import WelcomeSection from "@/app/components/destinations/WelcomeSection";
import VisaTypeSelection from "@/app/components/destinations/VisaTypeSelection";
import HowItWorks from "@/app/components/destinations/HowItWorks";
import InsurancePromo from "@/app/components/destinations/InsurancePromo";
import FeeCalculator from "@/app/components/destinations/FeeCalculator";
import Faqs from "@/app/components/destinations/Faqs";
import WhyChooseUs from "@/app/components/destinations/WhyChooseUs";
import CallToAction from "@/app/components/destinations/CallToAction";

export const metadata: Metadata = {
  title: `${data.name} ETA - Apply Online`,
  description: `Apply for your ${data.name} ETA online easily. Fast processing and secure application.`,
};

export default function KenyaPage() {
  return (
    <div className="space-y-10">
      <DestinationHero hero={data.hero} />
      <AboutEta about={data.about} />
      <WelcomeSection welcome={data.welcome} />
      <VisaTypeSelection visaTypes={data.visaTypes} />
      <HowItWorks steps={data.howItWorks} />
      <InsurancePromo insurance={data.insurance} />
      <FeeCalculator pricing={data.pricing} />
      <Faqs faqs={data.faqs} />
      <WhyChooseUs />
      <CallToAction destination={data.name} applyLink={`/apply/${data.slug}`} />
    </div>
  );
}
