import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
