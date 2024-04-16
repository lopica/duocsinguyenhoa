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
          </li>
          <li>
            <img className="benefit__icon" src={Simple} alt="simple kit icon" />
          </li>
          <li>
            <img className="benefit__icon" src={Piggy} alt="piggy save money" />
          </li>
          <li>
            <p className="benefit__text">An tâm</p>
            <small className="benefit__description">
              Đội ngũ tư vấn có kinh nghiệm và chuyên môn cao, sãn sàng hỗ trợ
              bạn
            </small>
          </li>
          <li>
            <p className="benefit__text">Đơn giản</p>
            <small className="benefit__description">
              Chúng tôi hỗ trợ tư vấn bạn trên mọi nền tảng phổ biến hiện nay
              (facebook, zalo)
            </small>
          </li>
          <li>
            <p className="benefit__text">Tiết kiệm</p>
            <small className="benefit__description">
              Đảm bảo chi phí luôn hợp lý, tiết kiệm
            </small>
          </li>
        </ul>
      </div>
    </section>
  );
}
