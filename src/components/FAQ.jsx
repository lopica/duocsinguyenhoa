import { useState } from "react";

FAQ.Item = ({ number, text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="faq__item"
      style={
        show
          ? {
              borderTop: "4px solid #7c4256",
            }
          : {}
      }
      onClick={() => setShow(!show)}
    >
      <p
        className="faq__number"
        style={show ? { color: "#7c4256" } : { color: "#ced4da" }}
      >
        {number}
      </p>
      <p
        className="faq__text"
        style={show ? { color: "#7c4256" } : { color: "#495057" }}
      >
        {text}
      </p>
      <svg
        className="faq__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
      <div
        className="faq__hiddenbox"
        style={show ? { display: "block" } : { display: "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default function FAQ({ children }) {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h3 className="faq__heading">Câu hỏi thường gặp</h3>
        {children}
        {!children && (
          <>
            <FAQ.Item
              number="01"
              text="Tôi được tư vấn mà không hiệu quả thì sao?"
            >
              <p>
                Chúng tôi luôn tự tin chất lượng tư vấn của mình. Chúng tôi luôn
                sẵn sàng lắng nghe và cải thiện chất lượng dịch vụ.
              </p>
            </FAQ.Item>
            <FAQ.Item
              number="02"
              text="Thông tin khi tôi cung cấp để tư vấn sẽ dùng để làm gì?"
            >
              <p>
                Mọi thông tin bạn cung cấp sẽ chỉ được được sử dụng vào việc tư
                vấn. Chúng tôi cam kết không chia sẻ thông tin cho bên thứ 3.
              </p>
            </FAQ.Item>
          </>
        )}
      </div>
    </section>
  );
}
