import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="mt-20" id="services">
      <h1 className={`text-3xl font-bold uppercase text-center mb-10`}>
        What do we offer?
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-7">
        <div className="service-slide">
          <div className="container service-slide-inner ">
            <Image
              src="/web-dev.png"
              height={500}
              width={500}
              className="service-slide-image"
            />
            <div className="service-slide-text">
              <h1 className="service-slide-text-title">Web Development</h1>
              <p className="service-slide-text-subtitle">
                We offer website development with expert developers with more
                than 5+ years of experience. For all types of business!
              </p>
            </div>
          </div>
        </div>
        <div className="service-slide">
          <div className="container service-slide-inner ">
            <Image
              src="/web-design.png"
              height={5000}
              width={5000}
              className="service-slide-image"
            />
            <div className="service-slide-text">
              <h1 className="service-slide-text-title">UI / UX</h1>
              <p className="service-slide-text-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora tenetur sint, iure a deserunt perspiciatis rem iste
                pariatur suscipit eos neque asperiores eum repellendus aperiam.
              </p>
            </div>
          </div>
        </div>
        <div className="service-slide">
          <div className="container service-slide-inner ">
            <Image
              src="/digital-marketing.png"
              height={5000}
              width={5000}
              className="service-slide-image"
            />
            <div className="service-slide-text">
              <h1 className="service-slide-text-title">Digital Marketing</h1>
              <p className="service-slide-text-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora tenetur sint, iure a deserunt perspiciatis rem iste
                pariatur suscipit eos neque asperiores eum repellendus aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
