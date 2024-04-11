import Benefit from "./components/Benefit";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Featured from "./components/Featured";
import FaceIcon from './assets/facebook.svg'
import TiktokIcon from './assets/tiktokshop.svg'
import YoutubeIcon from './assets/youtube.svg'
function LaningPage() {
  return (
    <>
      <header>
        <Navigation />
        <Hero />
      </header>
      <main>
        <Featured />
        <Introduction />
        {/* <Benefit />
        <SocialProof />
        <FAQ />
        <CTA /> */}
      </main>
      <footer className="footer">
        <div className="container grid grid--5">
          <div className="footer__container-logo">
            <a href="#">
              <img className="footer__logo" src="/logo.png" alt="yzone logo" />
            </a>
            <p className="footer__copyright">
              Bản quyền &copy; 2027 của Dược sĩ Nguyễn Hoa. Mọi quyền đã được
              bảo lưu.
            </p>
          </div>
          <div className="footer__address">
            <p className="footer__heading">Thông tin liên hệ:</p>
            <address>
              <p>địa chỉ</p>
              <p>
                <a href="tel:0393354261">0393354261</a>
                <br />
                <a href="mailto:ducanhedison@gmail.com">
                  ducanhedison@gmail.com
                </a>
              </p>
            </address>
          </div>
          <div className="footer__navigation">
            <ul className="footer__social__links">
              <li>
                <a href="#">
                  <img src={YoutubeIcon} alt="youtube logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={TiktokIcon} alt="tiktok logo" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={FaceIcon} alt="facebook logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LaningPage;
