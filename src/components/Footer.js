import React from "react";
import { Bebas_Neue } from "next/font/google";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div className="border-t border-[1px] mt-10">
      <div className="container flex justify-between items-center py-10">
        <div>
          <h3 className={`${bebas.className} mb-2 text-3xl`}>Grow Raylor</h3>
          <p>Grow Raylor Agency LLC</p>
        </div>
        <div className="flex gap-5">
          <Link href="/">
            <div className="footer-icon">
              <BsFacebook />
            </div>
          </Link>
          <Link href="/">
            <div className="footer-icon">
              <BsInstagram />
            </div>
          </Link>
          <Link href="/">
            <div className="footer-icon">
              <BsTwitter />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
