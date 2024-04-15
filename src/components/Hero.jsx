import CTA from "./CTA";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__heading">DƯỢC SĨ NGUYỄN HOA</h1>
          <p className="hero__description">
            ThS Dược học – ĐH Paris Descartes <br /> Tư vấn chăm sóc Yzone – Sắc đẹp &
            sinh lý nữ
          </p>
          <small>Nhà sáng lập YZONE CARE Chuẩn y khoa</small>
          <a
            className="hero__btn hero__btn--primary margin-right-sm"
            href="https://www.facebook.com/duocsinguyenhoa84"
          >
            Tư vấn cho tôi
          </a>
          <a className="hero__btn" href="#featured">
            Tìm hiểu thêm &darr;
          </a>
          <div className="hero__proof">
            <div className="proof__image">
              <img
                src="https://images.unsplash.com/photo-1437572848259-df63caa1a552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vietnamese woman"
              />
              <img
                src="https://images.unsplash.com/photo-1614104301615-9467f637be75?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vietnamese woman"
              />
              <img
                src="https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vietnamese woman"
              />
              <img
                src="https://images.unsplash.com/photo-1552550286-8c53e2cb50ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vietnamese woman"
              />
              <img
                src="https://images.unsplash.com/photo-1610296818832-315333eb628d?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vietnamese woman"
              />
              <img
                src="https://images.unsplash.com/photo-1522314522391-5f574fb4140d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vietnamese woman"
              />
            </div>
            <p className="proof__text">
              <span>5,000+</span> người đã nhận tư vấn năm nay!
            </p>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="new_hero.jpg"
            alt="duoc si nguyen hoa image"
          />
        </div>
      </div>
    </section>
  );
}
