"use client";

import Image from "next/image";
import Link from "next/link";

import { animate, motion, stagger } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false);

  const liRef = useRef([]);
  const mobileNavRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileNavLinksRef = useRef([]);
  const menuRef = useRef([]);
  const addToLiRef = (item) => {
    liRef.current.push(item);
  };
  const addTomobileNavLink = (item) => {
    mobileNavLinksRef.current.push(item);
  };
  const addInMenuRef = (item) => {
    menuRef.current.push(item);
  };
  useEffect(() => {
    animate(
      liRef.current,
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.1) }
    );
  }, []);

  const toggleMobileNav = () => {
    if (!mobileNavVisibility) {
      animate([
        [mobileNavRef.current, { top: 0 }, { duration: 0.7 }],
        [
          mobileNavLinksRef.current,
          { opacity: [0, 1], y: [20, 0] },
          { delay: stagger(0.1) },
          { ease: "easeInOut" },
        ],
      ]);
    } else {
      animate([
        [
          mobileNavLinksRef.current,
          { opacity: [1, 0], y: [0, -20] },
          { delay: stagger(0.1) },
        ],
        [
          mobileNavRef.current,
          { top: "-100%" },
          { duration: 0.7 },
          { delay: 0.5 },
          { ease: "easeInOut" },
        ],
      ]);
    }
  };

  return (
    <>
      <div className="container z-50">
        <div className="w-full py-5 flex items-center justify-between z-50">
          <motion.div ref={addToLiRef} initial={{ y: 20, opacity: 0 }}>
            <Link href="/">
              <Image
                src="/Logo.png"
                alt=""
                width={250}
                height={50}
                className="w-[200px] md:w-[250px]"
              />
            </Link>
          </motion.div>
          <motion.div
            className="grid md:hidden grid-cols-3 grid-rows-3 gap-1 cursor-pointer"
            ref={hamburgerRef}
            onClick={() => {
              setMobileNavVisibility(!mobileNavVisibility);
              toggleMobileNav();
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-900 rounded-[1px]"></div>
          </motion.div>
          <motion.ul className="gap-5 hidden md:flex font-semibold uppercase">
            <motion.li
              className="list-item"
              ref={addToLiRef}
              initial={{ y: 20, opacity: 0 }}
            >
              <Link href="/#team">Team</Link>
            </motion.li>
            <motion.li
              className="list-item"
              ref={addToLiRef}
              initial={{ y: 20, opacity: 0 }}
            >
              <Link href="/pricing">Pricing</Link>
            </motion.li>
            <motion.li
              ref={addToLiRef}
              className="list-item"
              initial={{ y: 20, opacity: 0 }}
            >
              <Link href="/contact">Contact</Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
      <motion.div
        ref={mobileNavRef}
        className="fixed h-screen w-full -top-[150%] left-0 bg-black z-[100] flex justify-center items-center"
      >
        <div className="absolute top-0 container flex justify-end py-10">
          <div
            className="grid grid-cols-3 grid-rows-3 gap-1 cursor-pointer"
            onClick={() => {
              setMobileNavVisibility(!mobileNavVisibility);
              toggleMobileNav();
            }}
          >
            <div className="h-1 w-1 bg-gray-100 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px] opacity-0"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px] opacity-0"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px] opacity-0"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px]"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px] opacity-0"></div>
            <div className="h-1 w-1 bg-gray-100 rounded-[1px]"></div>
          </div>
        </div>
        <motion.ul className="flex flex-col items-center gap-16">
          <motion.li ref={addTomobileNavLink}>
            <Link
              href="/#team"
              className="mobile-nav-link"
              style={mobileNavLink}
              onClick={() => {
                setMobileNavVisibility(!mobileNavVisibility);
                toggleMobileNav();
              }}
            >
              Team
            </Link>
          </motion.li>
          <motion.li ref={addTomobileNavLink}>
            <Link
              href="/"
              className="mobile-nav-link"
              style={mobileNavLink}
              onClick={() => {
                setMobileNavVisibility(!mobileNavVisibility);
                toggleMobileNav();
              }}
            >
              Pricing
            </Link>
          </motion.li>
          <motion.li ref={addTomobileNavLink}>
            <Link
              href="/"
              className="mobile-nav-link"
              style={mobileNavLink}
              onClick={() => {
                setMobileNavVisibility(!mobileNavVisibility);
                toggleMobileNav();
              }}
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </>
  );
};

const mobileNavLink = {
  color: "white",
  textTransform: "uppercase",
  fontWeight: "800",
  letterSpacing: "1px",
  fontSize: "3rem",
};

export default Navbar;
