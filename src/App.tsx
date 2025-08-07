import About from "./pages/AboutPage.tsx";
import "./assets/styles/global.css";
import Contact from "./pages/ContactPage.tsx";
import Gallery from "./pages/GalleryPage.tsx";
import Footer from "./components/Footer.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL }>
      <div className="w-full min-h-screen space-y-10">
        <Header/>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
