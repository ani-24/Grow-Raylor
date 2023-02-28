import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { BsCheckCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const pricing = () => {
  return (
    <>
      <Navbar />
      <div className="container pricing--main">
        <div className="card-gallery">
          <div className="card card--basic">
            <h1 className="card__title">Basic</h1>
            <ul className="card__list">
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
            </ul>
            <span className="card__bottom">*Prices are negotiable</span>
          </div>
          <div className="card card--advanced">
            <h1 className="card__title">Advanced</h1>
            <ul className="card__list">
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
            </ul>
            <span className="card__bottom">*Prices are negotiable</span>
          </div>
          <div className="card card--professional">
            <h1 className="card__title">Professional</h1>
            <ul className="card__list">
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item">
                <span className="icon">
                  <BsCheckCircleFill />
                </span>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
              <li className="card__list__item card__list__item--cross">
                <span className="icon">
                  <RxCrossCircled />
                </span>
                <span>Lorem ipsum dolor set</span>
              </li>
            </ul>
            <span className="card__bottom">*Prices are negotiable</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pricing;
