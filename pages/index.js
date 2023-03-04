import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImg from "../public/bg.png";
import webDevImg from "../public/web-dev.png";
import webDesignImg from "../public/web-design.png";
import digitalMarketingImg from "../public/digital-marketing.png";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comp = useRef(null);
  const fadeInRefs = useRef([]);

  const addToFadeInRefs = (el) => {
    fadeInRefs.current.push(el);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".animate--intro", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1,
      });
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
      <div className="hero-section" ref={comp}>
        <div className="container">
          <div className="hero-section__inner">
            <div className="hero-section__text">
              <h1 className="hero-section__text__title animate--intro">
                Our growth is in your growth
              </h1>
              <p className="hero-section__text__subtitle animate--intro">
                The ambition and objective of our digitized agency <br /> is the{" "}
                <span className="hero-section__text__subtitle__attention">
                  Unlimited Result
                </span>
                .
              </p>
              <div className="hero-section__text__btns-container">
                <Link
                  href="/contact"
                  className="btn btn--secondary btn--white animate--intro"
                >
                  Schedule a meeting
                </Link>
                <Link
                  href="/contact"
                  className="btn btn--secondary btn--gradient--primary animate--intro"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <Image
              className="hero-section__img animate--intro"
              src={bgImg}
              alt="Background image for the hero section"
              priority
            />
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="services__inner">
            <h1 className="services__title" ref={addToFadeInRefs}>
              What do we offer?
            </h1>
          </div>
          <div className="services__service">
            <div className="services__service__img">
              <Image
                src={webDevImg}
                ref={addToFadeInRefs}
                alt="a computer monitor, keyboard and mouse with a wrench and settings icon floating in air"
              />
            </div>
            <div className="services__service__text">
              <h2
                className="services__service__text__title"
                ref={addToFadeInRefs}
              >
                Website Development
              </h2>
              <p
                className="services__service__text__subtitle"
                ref={addToFadeInRefs}
              >
                We&apos;ll build your site to suit your specific needs, creating
                the custom functions to make it faster and more secure.
              </p>
              <Link href="/" className="btn btn--primary" ref={addToFadeInRefs}>
                Learn more
              </Link>
            </div>
          </div>
          <div className="services__service">
            <div className="services__service__img" ref={addToFadeInRefs}>
              <Image src={webDesignImg} alt="" />
            </div>
            <div className="services__service__text">
              <h2
                className="services__service__text__title"
                ref={addToFadeInRefs}
              >
                Website Design
              </h2>
              <p
                className="services__service__text__subtitle"
                ref={addToFadeInRefs}
              >
                Bring your brand to life online with a bespoke website that
                boosts engagement and brings a return on creativity.
              </p>
              <Link href="/" className="btn btn--primary" ref={addToFadeInRefs}>
                Find out more
              </Link>
            </div>
          </div>
          <div className="services__service">
            <div className="services__service__img" ref={addToFadeInRefs}>
              <Image src={digitalMarketingImg} alt="" />
            </div>
            <div className="services__service__text">
              <h2
                className="services__service__text__title"
                ref={addToFadeInRefs}
              >
                Digital Marketing
              </h2>
              <p
                className="services__service__text__subtitle"
                ref={addToFadeInRefs}
              >
                With a proven track record for game-changing results, our
                marketing experts design digital campaigns that captivate and
                convert.
              </p>
              <Link href="/" className="btn btn--primary" ref={addToFadeInRefs}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
