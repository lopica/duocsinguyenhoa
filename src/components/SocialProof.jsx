import { useState } from "react";

const data = [
  {
    img: "https://images.unsplash.com/photo-1625900172227-99d357eea494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Vân",
    job: "Nhân viên văn phòng",
    quote:
      "Mình luôn cảm thấy tự ti và không thoải mái với vùng kín của mình. Sau khi được dược sĩ Hoa tư vấn, đời sống tình dục của mình cái thiện, mình cảm thấy tự tin hơn về bản thân mình",
  },
  {
    img: "https://images.unsplash.com/photo-1614104301615-9467f637be75?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlldG5hbWVzZSUyMHdvbWFufGVufDB8fDB8fHww",
    name: "Hồng",
    job: "Người mẫu",
    quote:
      "Nhờ tư vấn của cô, cháu cảm thấy am hiểu hơn về cơ thể của mình ạ",
  },
  {
    img: "https://images.unsplash.com/photo-1439778615639-28529f7628bc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Minh",
    job: "Nhân viên văn phòng",
    quote:
      "Mình cảm thấy thoải mái khi tư vấn, cô rất nhiệt tình chia sẻ và lắng nghe mình",
  },
  {
    img: "https://images.unsplash.com/photo-1615561077140-15e436dd1b92?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZXRuYW1lc2UlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Trang",
    job: "Sinh viên",
    quote:
      "Ban đầu mình có hơi ngại chia sẻ nhưng cô khiến mình cởi mở hơn chia sẻ chủ đề nhạy cảm này.",
  },
];
export default function SocialProof() {
  const [carousel, setCarousel] = useState({
    index: 0,
    user: data[0],
  });

  function handler(direction) {
    setCarousel((prevState) => {
      // Calculate the new index based on the direction
      let nextIndex =
        direction === "right" ? prevState.index + 1 : prevState.index - 1;

      // Optional: Handle wrapping of the carousel
      if (nextIndex >= data.length) {
        nextIndex = 0; // Wrap around to the first item
      } else if (nextIndex < 0) {
        nextIndex = data.length - 1; // Wrap around to the last item
      }

      return {
        index: nextIndex,
        user: data[nextIndex], // Access the user at the new index from the data array
      };
    });
  }

  function dotHander(nextIndex) {
    setCarousel({
      index: nextIndex,
      user: data[nextIndex], // Access the user at the new index from the data array
    });
  }

  return (
    <section className="social-proof">
      <h2 className="social-proof__heading">Trải nghiệm sử dụng</h2>
      <div className="carousel">
        <img
          className="carousel__img"
          src={carousel.user.img}
          alt={`${carousel.user.name} image`}
        />
        <blockquote>
          <p className="carousel__text">"{carousel.user.quote}"</p>
          <p className="carousel__author">{carousel.user.name}</p>
          <p className="carousel__job">{carousel.user.job}</p>
        </blockquote>
        <button
          className="carousel__btn carousel__btn--left"
          onClick={() => handler("left")}
        >
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
        <button
          className="carousel__btn carousel__btn--right"
          onClick={() => handler("right")}
        >
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
          {/* <button className="carousel__dot carousel__dot--fill" /> */}
          {data.map((user, index) => (
            <button
              key={index} // Always use keys when rendering lists in React
              className={`carousel__dot ${
                index === carousel.index ? "carousel__dot--fill" : ""
              }`}
              onClick={() => dotHander(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
