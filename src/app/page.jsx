"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center w-full p-4 fixed z-10 text-xl backdrop-blur-sm">
        <h1 className="text-2xl">Farel</h1>
        <ul className="flex gap-6 ">
          <li>
            <button className="cursor-pointer">Home</button>
          </li>
          <li>
            <button className="cursor-pointer">Aboute</button>
          </li>
          <li>
            <button className="cursor-pointer">Project</button>
          </li>
        </ul>
      </header>
      <section className="h-[100vh] flex justify-center items-center text-center gap-4 bg-[url('/images/bg-head.jpg')] bg-no-repeat bg-cover bg-fixed bg-opacity-5">
        <div>
          <h1 className="font-extrabold text-5xl">HELLO I'AM FAREL NANDA</h1>
          <h1 className="text-4xl">JUNIOR PROGRAMER</h1>
        </div>
      </section>
      <div className="backround top-[85vh] bg-primary h-[100vh] w-[130vw] absolute z-[5] -rotate-6"></div>
      <section className="h-[100vh] flex justify-center items-center gap-4 z-10 relative">
        <div className="flex justify-center items-center gap-8 m-8 w-[80%]">
          <Image
            src={"/images/foto_diri.jpg"}
            width={300}
            height={300}
            className="w-1/4 rounded-xl"
            alt="foto diri"
          />
          <div>
            <h1 className="text-3xl font-bold">About</h1>
            <p>Perkenalkan, saya Farel Nanda Setiawan, seorang junior programmer yang sedang meniti karier di dunia rekayasa perangkat lunak. Sebagai pelajar SMK, saya memiliki semangat tinggi untuk terus belajar dan mengembangkan solusi inovatif melalui pemrograman. Portofolio ini adalah bukti dedikasi saya dalam menerapkan ilmu dan kreativitas untuk menyelesaikan tantangan di bidang IT.</p>
          </div>
        </div>
      </section>
      <section className="h-[100vh] bg-third">

      </section>
    </>
  );
}
