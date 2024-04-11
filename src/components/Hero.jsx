import CTA from "./CTA";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__heading">
            Biến vùng kín luôn sạch sẽ, thơm tho và hấp dẫn
          </h1>
          <p className="hero__description">
            Bằng bộ sản phẩm rửa âm đạo trong, rửa âm đạo ngoài đến từ
            Yzonecare, Vagiflux.
          </p>
          <a className="hero__btn hero__btn--primary margin-right-sm" href="#">
            Tư vấn cho tôi
          </a>
          <a className="hero__btn" href="#">
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
            <p className="proof__text"><span>10,000+</span> người đã sử dụng năm nay!</p>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="https://images.unsplash.com/photo-1561158317-757a4631770e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="flower illustration for vagina"
          />
        </div>
      </div>
    </section>
  );
}
