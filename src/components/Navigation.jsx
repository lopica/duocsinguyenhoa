export default function Navigation() {
  return (
    <div className="header">
      <a href="#">
        <img className="header__logo" src="logo.png" alt="yzone logo" />
      </a>
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li>
            <a className="list__link" href="#">
              Tiktok
            </a>
          </li>
          <li>
            <a className="list__link" href="#">
              Youtube
            </a>
          </li>
          <li>
            <a className="list__link list__link--cta" href="#">
              Fanpage
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
