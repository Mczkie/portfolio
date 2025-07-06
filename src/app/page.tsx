"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaDownload,
  FaArrowDown,
  FaArrowUp,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaCss3, FaGit, FaHtml5, FaReact } from "react-icons/fa6";

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4); //once: true

  return (
    <main className=" h-screen">
      <section className=" flex h-full items-center justify-evenly gap-20">
        <motion.div
          className=" w-auto h-auto p-10 text-xl flex-col align-center space-y-8"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl">Mc Peterson Mercader</h1>
          <p className="text-xl w-170 text-balance text-gray-300">
            Hi! I'm an aspiring Front End Developer with experience in Web
            Development during my Internship and throught personal projects.
          </p>
          <p className="text-4xl">
            <b>Web</b>{" "}
            <span className="text-gray-400 font-bold">Developer</span>
          </p>

          <div className=" flex gap-3 text-2xl">
            <a href="https://github.com/Mczkie" target="_blank">
              <FaGithub size={30} className="hover:text-blue-500" />
            </a>
            <a
              href="https://www.facebook.com/mcpetersontan.mercader"
              target="_blank"
            >
              <FaFacebook size={30} className="hover:text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/mc-peterson-mercader-838186225/"
              target="_blank"
            >
              <FaLinkedin size={30} className="hover:text-blue-500" />
            </a>
          </div>
          <button className="group bg-blue-600 p-2 rounded-md text-gray-300 flex items-center gap-2 hover:bg-blue-700">
            <FaArrowUp className="transform transition-transform duration-50 group-hover:rotate-180" />
            <a
              href="https://drive.google.com/uc?export=download&id=11TrJIUkjmHTkWoZVxzf9Itq4ouJq53oF"
              target="_blank"
              download
            >
              Download my CV
            </a>
          </button>
        </motion.div>

        <motion.div
          className="bg-blue-600 text-center content-center rounded-full md:hidden lg:block"
          animate={{ scale: 1, opacity: 1 }}
          initial={
            isInView2 ? { scale: 0.8, opacity: 0 } : { scale: 0, opacity: 0 }
          }
          exit={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          ref={ref2}
        >
          <img
            src="profile.png"
            alt="My profile picture"
            className="mask-clip-border w-100 h-100 border-4 border-white rounded-full shadow-xl"
          />
        </motion.div>
      </section>

      <section className="bg-neutral-900 w-screen h-screen" id="aboutme">
        <motion.div
          className=" p-10 h-full flex gap-15 items-center justify-center"
          animate={
            isInView4 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          initial={{ scale: 0.8, opacity: 0 }}
          exit={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          ref={ref4}
        >
          <div>
            <img
              src="profile.png"
              alt="my picture"
              className="w-150 h-130 rounded-full border"
            />
          </div>

          <div className="p-2 w-4xl space-y-8">
            <h1 className=" text-5xl font-extrabold">ABOUT ME</h1>
            <p className="text-justify max-w-2xl">
              Hello! I'm Mc Peterson Mercader, A passionate aspiring Front-End
              Developer, who's building a useful and responsive web application,
              with strong foundation in different Tech Stack such as{" "}
              <b>HTML, CSS, TAILWINDCSS</b> and modern Frameworks like{" "}
              <b>NEXTJS, REACTJS, and ANGULAR.</b> I'am passionate about
              transforming ideas into an fully functional websites. I'am eager
              to expand my knowledge and skills.
            </p>
            <hr className="w-2xl" />
            <div className="space-y-4">
              <h1 className="font-extrabold text-2xl">Skills:</h1>
              <div className="flex gap-3">
                <FaHtml5 size={50} className="text-red-600 border p-2 hover:bg-red-400"/>
                <FaCss3 size={50}  className="text-blue-600 border p-2 hover:bg-blue-400"/>
                <FaReact size={50} className="text-blue-300 border p-2 hover:bg-blue-600"/>
                <img
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  alt="Tailwind CSS"
                  className="w-12 h-12.5 border p-2 hover:bg-blue-900"
                />
                <FaGit size={50} className="text-orange-500 border p-2 hover:bg-orange-700"/>
                <FaGithub size={50} className="text-zinc-700 border border-white p-2 hover:bg-zinc-500"/>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-neutral-500 h-50">
        <div className="grid grid-cols-3 p-10 gap-10">
          <h1>About Me</h1>
        </div>
      </section>
    </main>
  );
}
