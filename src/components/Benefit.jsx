import Piggy from "../assets/piggy.svg";
import Safe from "../assets/safe.svg";
import Simple from "../assets/simple-kit.svg";
export default function Benefit() {
  return (
    <section className="benefit">
      <div className="container">
        <h2 className="benefit__heading">Bạn sẽ nhận được</h2>
        <ul className="benefit__list grid grid--3">
          <li>
            <img className="benefit__icon" src={Safe} alt="safe icon" />
            <p className="benefit__text">An toàn</p>
            <small className="benefit__description">Đạt chuẩn chất lượng và được cấp phép bới bộ y tế</small>
          </li>
          <li>
            <img className="benefit__icon" src={Simple} alt="simple kit icon" />
            <p className="benefit__text">Đơn giản</p>
            <small className="benefit__description">
              Chỉ với 3 bước đơn giản bạn đã có thể tự vệ sinh vùng kín
            </small>
          </li>
          <li>
            <img className="benefit__icon" src={Piggy} alt="piggy save money" />
            <p className="benefit__text">Tiết kiệm</p>
            <small className="benefit__description">Đảm bảo chi phí luôn hợp lý, tiết kiệm</small>
          </li>
        </ul>
      </div>
    </section>
  );
}
