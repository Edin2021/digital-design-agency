import CursorCircle from "../components/CursorCircle";
import FeaturedWorkSection from "../components/FeaturedWorkSection";
import Footer from "../components/Footer";
import HeroButtons from "../components/HeroButtons";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Menu from "../components/Menu";
import VideoBubble from "../components/VideoBubble";

function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <VideoBubble />
      <InfoSection />
      <FeaturedWorkSection />
      <Footer />
      <CursorCircle />
      <HeroButtons />
    </>
  );
}

export default Home;
