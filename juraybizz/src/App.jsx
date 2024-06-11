import "./App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Discover from "../src/Discover";
import Stories from "./Stories";
import Team from "./Team";
import Integration from "./Integration";
import CTA from "./CTA";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Discover />
      <Stories />
      <Team />
      <Integration />
      <CTA />
      <Footer />
    </>
  );
}
export default App;
