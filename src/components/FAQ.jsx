import { useState } from "react";

FAQ.Item = ({ number, text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="faq__item"
      style={
        show
          ? {
              borderTop: "4px solid #087f5b",
            }
          : {}
      }
      onClick={() => setShow(!show)}
    >
      <p
        className="faq__number"
        style={show ? { color: "#087f5b" } : { color: "#ced4da" }}
      >
        {number}
      </p>
      <p
        className="faq__text"
        style={show ? { color: "#087f5b" } : { color: "#495057" }}
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
          <FAQ.Item number="01" text="Tôi xài mà không hiệu quả thì sao?">
            <p>Chúng tôi tự tin chất lượng sản phẩm của mình. Một số lỗi thường hay gặp khi sử dụng sản phẩm:</p>
            <ul>
              <li>Pha dung dịch không đúng thứ tự theo hướng dẫn</li>
              <li>Pha nước không đủ lượng theo hướng dẫn</li>
              <li>Dùng lượng dung dịch ít hơn hướng dẫn</li>
            </ul>
            <p>
              Nếu bạn nằm ngoài những trường hợp trên, bạn có thể liên hệ tư vấn với chúng tôi để trao đổi thêm về trường
              hợp của bạn. Chúng tôi luôn sẵn sàng lắng nghe và cải thiện chất lượng sản phẩm.
            </p>
          </FAQ.Item>
        )}
      </div>
    </section>
  );
}
