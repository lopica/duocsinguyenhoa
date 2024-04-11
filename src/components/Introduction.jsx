export default function Introduction() {
  return (
    <section className="introduction">
      <div className="container">
        <span className="introduction__subheading">
          Sử dụng bộ vệ sinh như nào?
        </span>
        <h2 className="introduction__heading">
          3 bước đơn giản để vệ sinh vùng kín
        </h2>
      </div>
      <div className="container grid grid--2 grid--center-vertical">
        {/* STEP 1 */}
        <div className="introduction__text">
          <p className="text__number">01</p>
          <h3 className="text__tertiary">Pha dung dịch vệ sinh</h3>
          <p className="text__description">
            Sử dụng những túi có sẵn trong sản phẩm để tạo ra dung dịch vệ sinh
          </p>
        </div>
        <div className="introduction__image">
          <img
            src="https://images.unsplash.com/photo-1610547939489-73202bc6afda?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="mix fluid"
          />
        </div>
        {/* STEP 2 */}
        <div className="introduction__image">
          <img
            src="https://images.unsplash.com/photo-1610547939489-73202bc6afda?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="mix fluid"
          />
        </div>
        <div className="introduction__text">
          <p className="text__number">02</p>
          <h3 className="text__tertiary">Pha dung dịch vệ sinh</h3>
          <p className="text__description">
            Sử dụng những túi có sẵn trong sản phẩm để tạo ra dung dịch vệ sinh
          </p>
        </div>
        {/* STEP 3 */}
        <div className="introduction__text">
          <p className="text__number">03</p>
          <h3 className="text__tertiary">Pha dung dịch vệ sinh</h3>
          <p className="text__description">
            Sử dụng những túi có sẵn trong sản phẩm để tạo ra dung dịch vệ sinh
          </p>
        </div>
        <div className="introduction__image">
          <img
            src="https://images.unsplash.com/photo-1610547939489-73202bc6afda?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="mix fluid"
          />
        </div>
      </div>
    </section>
  );
}
