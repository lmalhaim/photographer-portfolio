import About from "./AboutPage.tsx";
import "./global.css";
import Contact from "./ContactPage.tsx";
import Gallery from "./GalleryPage.tsx";
import { useState } from "react";
import { type Tab, TabList} from "./types/types.ts";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Gallery");

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl ml-3  mr-3 mx-auto px-2 py-5 flex justify-between items-center">
          {/* Logo or site name */}
          <div className="text-white text-2xl tracking-wider font-kanit">
            Jenny's Shutter
          </div>

          {/* Tabs */}
          <nav className="flex space-x-8">
            {TabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-white relative pb-1 transition-all duration-300 ease-in-out
                ${
                  activeTab === tab
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                    : "hover:text-blue-400"
                }
              `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>
      {activeTab == "Gallery" && <Gallery />}
      {activeTab == "About" && <About />}
      {activeTab == "Contact" && <Contact />}
    </div>
  );
}
