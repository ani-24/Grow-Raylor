import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="container">
          <div className="contact__form-container">
            <div>
              <ul className="contact__form-container__list">
                <li className="contact__form-container__list__item">
                  <span className="contact__form-container__list__item__icon">
                    <BsFillTelephoneFill />
                  </span>
                  <span className="contact__form-container__list__item__text">
                    +91 9973860205, +91 9204613799
                  </span>
                </li>
                <li className="contact__form-container__list__item">
                  <span className="contact__form-container__list__item__icon">
                    <FaEnvelope />
                  </span>
                  <span className="contact__form-container__list__item__text">
                    aniketkumar2427@gmail.com, rajeshwar9204@gmail.com
                  </span>
                </li>
                <li className="contact__form-container__list__item">
                  <span className="contact__form-container__list__item__icon">
                    <AiFillInstagram />
                  </span>
                  <span className="contact__form-container__list__item__text">
                    /grow_raylor
                  </span>
                </li>
                <li className="contact__form-container__list__item">
                  <span className="contact__form-container__list__item__icon">
                    <BsFacebook />
                  </span>
                  <span className="contact__form-container__list__item__text">
                    /growraylor
                  </span>
                </li>
                <li className="contact__form-container__list__item">
                  <span className="contact__form-container__list__item__icon">
                    <BsTwitter />
                  </span>
                  <span className="contact__form-container__list__item__text">
                    /growraylor
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <form>
                <div className="input-field">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input className="form-input" type="text" id="name" />
                </div>
                <div className="input-field">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input className="form-input" type="email" id="email" />
                </div>
                <div className="input-field">
                  <label htmlFor="message" className="form-label">
                    Mesage:
                  </label>
                  <textarea
                    name=""
                    id="message"
                    cols="30"
                    rows="10"
                    className="form-input"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--submit">
                  Send <FaTelegramPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
