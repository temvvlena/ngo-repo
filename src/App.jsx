import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import EmergencyNotice from "./components/EmergencyNotice.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Mission from "./components/Mission.jsx";
import Services from "./components/Services.jsx";
import Trust from "./components/Trust.jsx";
import WhoWeHelp from "./components/WhoWeHelp.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Mission />
        <Services />
        <WhoWeHelp />
        <Trust />
        <About />
        <Contact />
        <EmergencyNotice />
      </main>
      <Footer />
    </div>
  );
}
