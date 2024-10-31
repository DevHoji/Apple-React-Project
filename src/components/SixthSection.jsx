import ipadLogo from "../images/icons/new-ipad-logo.png";

const SixthSection = () => {
  return (
    <section className="sixth-heghlight-wrapper">
      <div className="left-side-wrapper">
        <div className="model">16-inch model</div>

        <div className="product-title-small">MacBook Pro</div>

        <div className="description-wraper">The best for the brightest.</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-side-wrapper">
        <div className="top-logo-wrapper">
          <div className="logo-wrapper">
            <img src={ipadLogo} />
          </div>
        </div>

        <div className="description-wraper">
          Like a computer. Unlike any computer.
        </div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SixthSection
