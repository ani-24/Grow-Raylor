import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImg from "../public/bg.png";
import webDevImg from "../public/web-dev.png";
import webDesignImg from "../public/web-design.png";
import digitalMarketingImg from "../public/digital-marketing.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="container">
          <div className="hero-section__inner">
            <div className="hero-section__text">
              <h1 className="hero-section__text__title">
                Our growth is in your growth
              </h1>
              <p className="hero-section__text__subtitle">
                The ambition and objective of our digitized agency <br /> is the{" "}
                <span className="hero-section__text__subtitle__attention">
                  Unlimited Result
                </span>
                .
              </p>
              <div className="hero-section__text__btns-container">
                <Link href="/" className="btn btn--secondary btn--white">
                  Schedule a meeting
                </Link>
                <Link
                  href="/"
                  className="btn btn--secondary btn--gradient--primary"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <Image
              className="hero-section__img"
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
            <h1 className="services__title">What do we offer?</h1>
          </div>
          <div className="services__service">
            <div className="services__service__img">
              <Image src={webDevImg} />
            </div>
            <div className="services__service__text">
              <h2 className="services__service__text__title">
                Website Development
              </h2>
              <p className="services__service__text__subtitle">
                We’ll build your site to suit your specific needs, creating the
                custom functions to make it faster and more secure.
              </p>
              <Link href="/" className="btn btn--primary">
                Learn more
              </Link>
            </div>
          </div>
          <div className="services__service">
            <div className="services__service__img">
              <Image src={webDesignImg} />
            </div>
            <div className="services__service__text">
              <h2 className="services__service__text__title">Website Design</h2>
              <p className="services__service__text__subtitle">
                Bring your brand to life online with a bespoke website that
                boosts engagement and brings a return on creativity.
              </p>
              <Link href="/" className="btn btn--primary">
                Find out more
              </Link>
            </div>
          </div>
          <div className="services__service">
            <div className="services__service__img">
              <Image src={digitalMarketingImg} />
            </div>
            <div className="services__service__text">
              <h2 className="services__service__text__title">
                Digital Marketing
              </h2>
              <p className="services__service__text__subtitle">
                With a proven track record for game-changing results, our
                marketing experts design digital campaigns that captivate and
                convert.
              </p>
              <Link href="/" className="btn btn--primary">
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
