import FaceIcon from '../assets/facebook.svg'
import TiktokIcon from '../assets/tiktokshop.svg'
import YoutubeIcon from '../assets/youtube.svg'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--3">
        <div className="footer__container-logo">
          {/* <a href="#">
              <img className="footer__logo" src="logo.png" alt="yzone logo" />
            </a> */}
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Dược sĩ Nguyễn Hoa</p>
        </div>
        <div className="footer__address">
          <p className="footer__heading">Thông tin liên hệ:</p>
          <address>
            <p>phường La Khê, Hà Đông, Hà Nội</p>
            <p>
              <a href="tel:0393354261">0393354261</a>
              <br />
              <a href="mailto:ducanhedison@gmail.com">ducanhedison@gmail.com</a>
            </p>
          </address>
        </div>
        <div className="footer__navigation">
          <ul className="footer__social__links">
            <li>
              <a href="https://www.facebook.com/duocsinguyenhoa84">
                <img src={FaceIcon} alt="facebook logo" />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@duocsinguyenhoa">
                <img src={TiktokIcon} alt="tiktok logo" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@DUOCSINGUYENHOA">
                <img src={YoutubeIcon} alt="youtube logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
