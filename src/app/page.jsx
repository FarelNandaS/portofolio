"use client";

import Image from "next/image";
import Card from "./components/card";
import { motion, scale, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import TechBadge from "./components/techBadge";

export default function Home() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (current > prev && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const projects = [
    {
      title: "TahuAnimeList",
      techs: ["nextjs", "vercel"],
      desc: "TahuAnimeList is a web application for managing and browsing your favorite anime lists. Built using Next.js, it provides a user-friendly interface for anime fans.",
      href: "https://tahuanimelist.vercel.app",
      img: {
        src: "/images/tahuanimelist.png",
        alt: "priview tahuanimelist.png",
      },
    },
    {
      title: "Let's Discussion",
      techs: ["laravel", "tailwind"],
      desc: "this is a web site that contain some discussion about anything and you can craete your account and start to make topic about anything you want. this project still   prototype and will ready as soon as posiblef",
      href: "https://github.com/FarelNandaS/Discussion",
      img: {
        src: "/images/discussion.png",
        alt: "priview discussion.png",
      },
    },
  ];

  const techStack = {
    languages: [
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
      { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    ],
    frameworks: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
    ],
    tools: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    ],
  };

  return (
    <>
      <motion.header
        animate={{
          y: hidden ? -100 : 0,
          opacity: hidden ? 0 : 1,
          animationDuration: 500,
        }}
        className="flex justify-between items-center w-full p-4 fixed z-20 text-xl backdrop-blur-sm"
      >
        <h1 className="text-2xl">Farel</h1>
        <nav className="hidden md:flex">
          <ul className="flex gap-6 ">
            <li>
              <button className="cursor-pointer hover:text-primary hover:bg-fiveth hover:transition-all hover:duration-150 rounded p-1">
                Home
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:text-primary hover:bg-fiveth hover:transition-all hover:duration-150 rounded p-1">
                About
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:text-primary hover:bg-fiveth hover:transition-all hover:duration-150 rounded p-1">
                Project
              </button>
            </li>
          </ul>
        </nav>
      </motion.header>
      <section className="h-[100vh] flex flex-col md:flex-row justify-center items-center text-center gap-4 bg-[url('/images/bg-head.jpg')] bg-no-repeat bg-cover bg-fixed bg-opacity-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/images/programmer.svg"}
            width={400}
            height={400}
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-start"
        >
          <h1 className="font-extrabold text-5xl">FAREL NANDA SETIAWAN</h1>
          <h2 className="text-4xl">JUNIOR PROGRAMER</h2>
          <button className="bg-primary mt-4 p-2 rounded text-xl">
            Lihat Project
          </button>
        </motion.div>
      </section>

      <section className="min-h-[110vh] flex justify-center items-center gap-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 m-8 w-[80%]"
        >
          <Image
            src={"/images/foto_diri.png"}
            width={300}
            height={300}
            className="md:w-1/4 rounded-xl bg-primary"
            alt="foto diri"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">About Me</h3>
            <p>
              Perkenalkan, saya Farel Nanda Setiawan, seorang junior programmer
              yang sedang meniti karier di dunia pemerograman. Sebagai seorang
              lulusan SMK jurusan Rekayasa Perangkat Lunak, saya memiliki
              semangat tinggi untuk terus belajar dan mengembangkan solusi
              inovatif melalui pemrograman. Saya memiliki pengalaman berlomba
              dalam bidang Web Technology dan meraih juara 3 setingkat kota
              surabaya tahun 2025.
            </p>
            <p>
              Melalui pemerograman saya berminat untuk terus belajar dan
              memberikan solusi pada masalah yang di berikan. Dengan terus
              berkembangnya teknologi infomasi saat ini yang membuat saya ingin
              terus belajar dan terus mencari pengalaman sebanyak-banyak nya.
              Dan dengan terus nya era yang berkembang yang membuat saya ingin
              selalu memberikan solusi kepada semua masalah yang di berikan
              kepada saya dengan pemerograman.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="min-h-[110vh] bg-dark gap-8 p-4 flex flex-col justify-center items-center">
        <h3 className="font-bold text-3xl mt-4 ">Tech Stack</h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-center w-[90vw]"
        >
          <Image
            src={"/images/tech-stack.svg"}
            width={300}
            height={300}
            className=" mb-4 md:mb-0 md:w-1/3 w-[90vw]"
          />
          <div className="md:w-2/3 md:ml-12 w-[90vw]">
            <div className="flex flex-col w-[100%] mb-4">
              <h5 className="text-2xl font-bold mb-4">Bahasa Pemerograman</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                  techStack.languages.map((item, index) => (
                    <TechBadge name={item.name} icon={item.icon} key={index}/>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col w-[100%] mb-4">
              <h5 className="text-2xl font-bold mb-4">Framework & Library</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                  techStack.frameworks.map((item, index) => (
                    <TechBadge name={item.name} icon={item.icon} key={index}/>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col w-[100%] mb-4">
              <h5 className="text-2xl font-bold mb-4">Tools</h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                  techStack.tools.map((item, index) => (
                    <TechBadge name={item.name} icon={item.icon} key={index}/>
                  ))
                }
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="min-h-[110vh] bg-primary gap-8 p-4 flex flex-col justify-center items-center">
        <h3 className="font-bold text-3xl mt-4 ">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 h-5/6">
          {projects.map((project, index) => (
            <Card
              title={project.title ?? ""}
              techs={project.techs ?? []}
              desc={project.desc ?? ""}
              href={project.href ?? ""}
              src={project.img.src ?? ""}
              alt={project.img.alt ?? ""}
              key={index}
            ></Card>
          ))}
        </div>
      </section>

      <section className="min-h-[110vh] bg-dark gap-8 p-4 flex flex-col justify-center items-center">
        <h3 className="font-bold text-3xl mt-4 ">My Experiance</h3>
        <div></div>
      </section>

      <footer className="flex justify-center items-center">
        farel nanda setiawan
      </footer>
    </>
  );
}
