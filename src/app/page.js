"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { Vollkorn } from "next/font/google";

import { BsPlusCircle } from "react-icons/bs";

const vollkorn = Vollkorn({ subsets: ["latin"], weight: ["700", "900"] });

import { motion } from "framer-motion";
import Image from "next/image";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.div className="h-[80vh] w-full bg-hero-image xl:bg-[center_left_10%] xl:bg-[length:60%_auto] bg-no-repeat bg-bottom bg-[length:110%_auto] sm:bg-[length:90%_auto] md:bg-[length:70%_auto] lg:bg-[length:60%_auto] xl:flex xl:items-center xl:justify-end">
        <div className="w-full h-1/2 flex flex-col gap-7 items-center justify-center text-center max-w-[90%] xl:gap-14 mx-auto xl:max-w-xl xl:h-auto xl:items-start xl:text-start xl:mr-[10%] z-40">
          <h1
            className={`${vollkorn.className} text-4xl md:text-5xl xl:text-6xl`}
          >
            We Grow when you{" "}
            <span className="inline-block relative after:absolute after:bg-secondary-green after:bottom-0 after:left-0 after:-translate-x-[5%] after:-z-10 after:w-[120%] after:h-1/2 ">
              Grow.
            </span>
          </h1>
          <p className="text-sm md:text-base xl:text-lg">
            The ambition and objective of our digitized agency is the Unlimited
            Result.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
          >
            <Link href="/contact" className="button button-primary z-10">
              <BsPlusCircle />
              Start Project
            </Link>
          </motion.button>
        </div>
      </motion.div>
      <div className="container py-10" id="team">
        <h1 className={`text-3xl font-bold uppercase text-center mb-10`}>
          Who we are?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
          <div className="card">
            <div className="card-img-container">
              <Image
                src="/member1.jpg"
                height={100}
                width={100}
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h3 className="card-body-title">Founder</h3>
              <p className="card-body-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                aperiam id. Odit consequuntur, aliquid at vel in doloribus
                necessitatibus quia.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <Image
                src="/member2.jpg"
                height={100}
                width={100}
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h3 className="card-body-title">Web Developer</h3>
              <p className="card-body-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                aperiam id. Odit consequuntur, aliquid at vel in doloribus
                necessitatibus quia.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-img-container">
              <Image
                src="/member3.jpg"
                height={100}
                width={100}
                className="card-img"
              />
            </div>
            <div className="card-body">
              <h3 className="card-body-title">Web Designer</h3>
              <p className="card-body-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                aperiam id. Odit consequuntur, aliquid at vel in doloribus
                necessitatibus quia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}
