import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming path is correct
import Footer from "./components/Footer"; // Assuming path is correct
import ScrollToTop from "./components/ScrollToTop"; // Assuming path is correct
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// --- START: WhatsApp Icon Component (Inline SVG) ---
const WhatsAppIcon = () => (
  // Simple WhatsApp SVG Icon
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512" // Original viewBox
    fill="currentColor"
    className="w-6 h-6 md:w-8 md:h-8" // Made slightly larger on medium screens
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 .1-59.3-23-115-64.8-156.7zM223.9 439.7c-33.8 0-67.6-9.5-97.8-27.2l-7-4.1-72.6 19.1 19.4-70.9-4.5-7.3c-18.4-29.8-28.1-64-28.1-99.3 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 .1 101.8-82.8 184.5-184.6 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);
// --- END: WhatsApp Icon Component ---


const queryClient = new QueryClient();

const App = () => {
  // --- START: WhatsApp Configuration ---
  // IMPORTANT: Replace this with the actual phone number, including country code, no + or spaces
  const whatsappNumber = "919270245553"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  // --- END: WhatsApp Configuration ---

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Apply min-h-screen and flex structure here for proper footer */}
          <div className="flex flex-col min-h-screen"> 
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow"> {/* Added flex-grow */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>

        {/* --- START: WhatsApp Floating Button --- */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#1DA851] transition-colors duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        {/* --- END: WhatsApp Floating Button --- */}

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

