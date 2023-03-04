import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { BsCheckCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const comp = useRef(null);
  const fadeInRefs = useRef([]);

  const addToFadeInRefs = (el) => {
    fadeInRefs.current.push(el);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      fadeInRefs.current.forEach((el) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.7,
          delay: 0.05,
          scrollTrigger: {
            trigger: el,
            start: "10% bottom",
          },
        });
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container pricing--main" ref={comp}>
        <div className="card-gallery">
          <div className="card card--basic" ref={addToFadeInRefs}>
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
          <div className="card card--advanced" ref={addToFadeInRefs}>
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
          <div className="card card--professional" ref={addToFadeInRefs}>
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

export default Pricing;
