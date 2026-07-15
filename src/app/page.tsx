import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
    <main className="pt-20"> 
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <ContactForm />
    </main>
  );
}
