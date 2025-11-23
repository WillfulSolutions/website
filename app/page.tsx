import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import WhyChooseUs from "@/components/why-choose-us";
import ServicesList from "@/components/services-list";
import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/features";

export default function Home() {
    return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          {/* Add other sections/components below (Why us, Services, Features, etc.) */}
            <WhyChooseUs />
            <ServicesList />
            <CallToAction />
            <FeaturesSection />
        </main>
        <Footer />
      </div>

    </>
  );
}
