import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__inner__left">
            <h3 className="footer__left__title">Grow Raylor</h3>
            <p className="footer__left__text">Grow Raylor Agency LLC.</p>
          </div>
          <ul className="footer__right social-list">
            <li className="social-list__item">
              <a href="#" className="social-list__item__link">
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-list__item">
              <a href="#" className="social-list__item__link">
                <BsFacebook />
              </a>
            </li>
            <li className="social-list__item">
              <a href="#" className="social-list__item__link">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
