import appleLogo from "../images/icons/logo.png"
import cartLogo from "../images/icons/search-icon.png";
import searchLogo from "../images/icons/cart.png";
const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="internal-wrapper">
        <div className="header-links-wrapper">
          <ul>
            <li className="logo-link">
              <a href="/">
                <img src={appleLogo} />
              </a>
            </li>
            <li>
              <a href="/mac/">Mac</a>
            </li>
            <li>
              <a href="#">iphone</a>
            </li>
            <li>
              <a href="#">ipad</a>
            </li>
            <li>
              <a href="#">watch</a>
            </li>
            <li>
              <a href="#">tv</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li className="search-link">
              <a href="/search/">
                <img src={cartLogo} />
              </a>
            </li>
            <li className="cart-link">
              <a href="/cart/">
                <img src={searchLogo} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header
