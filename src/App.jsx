import { useEffect } from "react";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Equipment from "./components/sections/Equipment";
import Quotation from "./components/sections/Quotation";
import Pqrs from "./components/sections/Pqrs";
import Contact from "./components/sections/Contact";
import Toast from "./components/common/Toast";

function App() {
  // Smooth scroll para enlaces internos
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const hash = target.getAttribute("href");
      if (hash === "#" || hash === "") return;
      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Equipment />
          <Quotation />
          <Pqrs />
          <Contact />
        </main>
        <Footer />
        <Toast />
      </div>
    </ToastProvider>
  );
}

export default App;