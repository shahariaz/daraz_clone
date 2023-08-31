import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__item">
        <div className="header__left">
          <ul className="header__ul">
            <li>
              <p>Become a Seller</p>
            </li>
            <li>
              <p>Daraz Donates</p>
            </li>
            <li>
              <p>Help & Support</p>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <img
            src="https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png"
            alt=""
            className="header__logo"
          />
          <p>Save More on App</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
