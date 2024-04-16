import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import { useState } from 'react';
export default function Navigation() {
  const [show, setShow] = useState(false)

  function hander() {
    setShow(!show)
  }

  return (
    <div className={`header ${show ? 'header--open' : ''}`}>
      <a href="#">
        <img className="header__logo" src="logo.png" alt="yzone logo" />
      </a>
      <nav className="header__navigation">
        <ul className="navigation__list">
          {/* <li>
            <a className="list__link" href="#introduction">
              Cách sử dụng
            </a>
          </li> */}
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
      <button className="navigation__mobile">
        <img className='navigation__icon' src={Menu} alt='menu icon' onClick={hander} />
        <img className='navigation__icon' src={Close} alt='close icon' onClick={hander} />
      </button>
    </div>
  );
}
