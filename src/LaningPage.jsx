import Benefit from "./components/Benefit";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Featured from "./components/Featured";

import Footer from "./components/Footer";
import Hashtag from "./components/Hashtag";
function LaningPage() {
  return (
    <>
      <header>
        <Navigation />
        <Hero />
      </header>
      <main>
        <Featured />
        <Benefit />
        {/* <Introduction /> */}
        <SocialProof />
        <FAQ />
        <CTA />
        <Hashtag />
      </main>
      <Footer />
    </>
  );
}

export default LaningPage;
