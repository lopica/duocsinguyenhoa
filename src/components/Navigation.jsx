export default function Navigation() {
  return (
    <div className="header">
      <a href="#">
        <img className="header__logo" src="logo.png" alt="yzone logo" />
      </a>
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li>
            <a className="list__link" href="#introduction">
              Cách sử dụng
            </a>
          </li>
          <li>
            <a className="list__link" href="#faq">
              Câu hỏi thường gặp
            </a>
          </li>
          <li>
            <a className="list__link list__link--cta" href="https://www.facebook.com/duocsinguyenhoa84">
              Fanpage
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
