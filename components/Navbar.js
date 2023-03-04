import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline();
      t1.from(".navbar", {
        width: "50%",
        duration: 0.9,
      }).from(".animate--fade-in", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  const [visible, setVisible] = useState(false);
  const [activeText, setActiveText] = useState("");
  const [activeTextVisible, setActiveTextVisible] = useState(false);
  const toggleVisibility = () => {
    visible ? setVisible(false) : setVisible(true);
    console.log(visible);
  };
  const router = useRouter();
  return (
    <>
      <div ref={comp}>
        <div className="navbar">
          <Link href="/" className="logo animate--fade-in">
            <Image
              src="/logo.png"
              width="50"
              height="50"
              alt="Grow Raylor logo"
              className="logo__img"
            />
            <span className="logo__text">Grow Raylor</span>
          </Link>
          <div
            className={`hamburger ${visible ? "cross" : ""}`}
            onClick={toggleVisibility}
          >
            <div className="hamburger__bar" id="bar-1"></div>
            <div className="hamburger__bar" id="bar-2"></div>
            <div className="hamburger__bar" id="bar-3"></div>
            <div className="hamburger__bar" id="bar-4"></div>
            <div className="hamburger__bar" id="bar-5"></div>
            <div className="hamburger__bar" id="bar-6"></div>
            <div className="hamburger__bar" id="bar-7"></div>
            <div className="hamburger__bar" id="bar-8"></div>
            <div className="hamburger__bar" id="bar-9"></div>
          </div>
          <ul className="navbar__list">
            <li className="navbar__list__item animate--fade-in">
              <Link href="/" className="navbar__list__item__link">
                About us
              </Link>
            </li>
            <li className="navbar__list__item animate--fade-in">
              <Link href="/" className="navbar__list__item__link">
                Our Services
              </Link>
            </li>
            <li className="navbar__list__item animate--fade-in">
              <Link
                href="/pricing"
                className={`navbar__list__item__link ${
                  router.pathname === "/pricing" ? "active" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li className="navbar__list__item animate--fade-in">
              <Link
                href="/contact"
                className={`navbar__list__item__link ${
                  router.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`full-screen-nav ${visible ? "visible" : ""}`}>
        <span className={`active-text ${activeTextVisible ? "visible" : ""}`}>
          {activeText}
        </span>
        <ul className="full-screen-nav__list">
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/about"
              onMouseEnter={() => {
                setActiveText("About us");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              About us
            </Link>
          </li>
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/services"
              onMouseEnter={() => {
                setActiveText("Our Services");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              Our Services
            </Link>
          </li>
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/pricing"
              onMouseEnter={() => {
                setActiveText("Pricing");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              Pricing
            </Link>
          </li>
          <li className="full-screen-nav__list__item">
            <Link
              className="full-screen-nav__list__item__link"
              href="/contact"
              onMouseEnter={() => {
                setActiveText("Contact us");
                setActiveTextVisible(true);
              }}
              onMouseLeave={() => {
                setActiveTextVisible(false);
              }}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
