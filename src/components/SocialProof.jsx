import { useState } from "react";

export default function SocialProof() {
  const [currentCustomer, setCurrentCustomer] = useState({})

  const data = [
    {
      img: '',
      name: '',
      job: '',
      quote: ''
    },
  ]

  function handler() {

  }
  
  return (
    <section className="social-proof">
      <h2 className="social-proof__heading">Trải nghiệm sử dụng</h2>
      <div className="carousel">
        <img
          className="carousel__img"
          src="https://images.unsplash.com/photo-1625900172227-99d357eea494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="human"
        />
        <blockquote>
          <p className="carousel__text">
            "Mình luôn cảm thấy tự tin và thoải mái với vùng kín của mình sau
            khi sử dụng sản phẩm. Đời sống hôn nhân của mình cũng trở nên viên
            mãn hơn"
          </p>
          <p className="carousel__author">Vân</p>
          <p className="carousel__job">Nhân viên văn phòng</p>
        </blockquote>
        <button className="carousel__btn carousel__btn--left">
          <svg
            className="carousel__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="carousel__btn carousel__btn--right">
          <svg
            className="carousel__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="carousel__dots">
          <button className="carousel__dot carousel__dot--fill" />
          <button className="carousel__dot" />
          <button className="carousel__dot" />
          <button className="carousel__dot" />
          <button className="carousel__dot" />
        </div>
      </div>
    </section>
  );
}
