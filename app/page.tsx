import Guarantee from "./components/Guarantee";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Steps from "./components/Steps";
import Support from "./components/Support";
import TopDestinations from "./components/TopDestinations";
import VisaTypes from "./components/VisaTypes";

export default function Home() {
  return (
    <>
      <Hero />
      <TopDestinations />
      <VisaTypes />
      <Steps />
      <Support />
      <Pricing />
      <Guarantee />
    </>
  );
}