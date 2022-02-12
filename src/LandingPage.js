import LandingSecOne from "./LandingPageComponents/LandingSecOne";
import Banner from "./LandingPageComponents/Banner";
import Header from "./LandingPageComponents/Header";
import LandingSecTwo from "./LandingPageComponents/LandingSecTwo";
import Footer from "./LandingPageComponents/Footer";

function LandingPage() {

  return (
    <div className="min-h-screen ">
      <Header />
      <Banner />
      <LandingSecOne />
      <LandingSecTwo />
      <Footer />
    </div>
  );
}

export default LandingPage;
