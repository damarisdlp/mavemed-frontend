import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutSection from "./components/AboutSection"
import InstagramFeed from "./components/InstagramFeed"

export default function AboutUs() {
  return (
    <section>
        <PromoBanner/>
        <Header />
        <AboutSection />
        <InstagramFeed />
        <Footer />
    </section>
  )
}
