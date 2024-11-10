import Footer from "./components/footer";
import FreeTrial from "./components/freetrial";
import Header from "./components/header";
import HeroSection from "./components/heroection";
import Pricing from "./components/pricing";
import OurSponsors from "./components/sponsors";
import YourWork from "./components/yourwork";

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Pricing />
      <YourWork />
      <OurSponsors />
      <FreeTrial />
      <Footer />
    </div>
  );
}

export default App;
