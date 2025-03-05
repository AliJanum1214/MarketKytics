import AboutSection from "@/components/Dashboard/AboutSection";
import ClientSection from "@/components/Dashboard/ClientSection";
import Header from "@/components/Dashboard/Header";
import HeroSection from "@/components/Dashboard/HeroSection";
import NextSection from "@/components/Dashboard/NextSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <AboutSection />
        <HeroSection
          title={"AI Enablement"}
          words={[
            { text: "skimming.ai", color: "#fff" },
            { text: "shipGPT", color: "#fff" },
            { text: "recaster.ai", color: "#fff" },
            { text: "chatwebby", color: "#fff" },
          ]}
          description="We leverage the latest open-source, nano, LLMS, and other machine learning algorithms to build AI-enabled applications and modules."
          buttonText="Learn More"
          bgColor="bg-[#24d5b4]" // Allows dynamic background color
          btnLink="#"
          align="left"
        />
        <HeroSection
          title={"Business Intelligence"}
          words={[
            { text: "Data Utilization", color: "#fff" },
            { text: "Data Consultancy", color: "#fff" },
            { text: "Business Forecasting", color: "#fff" },
            { text: "Evidence-Based Insights", color: "#fff" },
            { text: "Dashboarding", color: "#fff" },
          ]}
          description="Drive success with our expert Business Intelligence and Data Solutions."
          buttonText="Learn More"
          bgColor="bg-[#C214AC]" // Allows dynamic background color
          btnLink="#"
          align="right"
        />
        <HeroSection
          title={"DIGITAL MARKETING AND GROWTH"}
          words={[
            { text: "SEO", color: "#fff" },
            { text: "Website Management", color: "#fff" },
            { text: "Lead Generation", color: "#fff" },
            { text: "PPC", color: "#fff" },
            { text: "Social Media", color: "#fff" },
            { text: "Content Creation", color: "#fff" },
          ]}
          description="Growth marketing that can be measured and all the results are calculated in ROI."
          buttonText="Learn More"
          bgColor="bg-[#DAE01C]" // Allows dynamic background color
          btnLink="#"
          align="left"
        />
        <ClientSection />
        <NextSection />
      </div>
    </>
  );
}
