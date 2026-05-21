import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function Card({ src, alt, title, desc, href, techs = [], key }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-darker p-4 rounded flex flex-col md:flex-row gap-4 min-h-[50%] md:min-h-full"
      key={key}
    >
      <Image
        src={imgSrc}
        alt={alt || ""}
        width={300}
        height={300}
        onError={() => {
          setImgSrc('https://placehold.net/default.png')
        }}
        className="rounded mb-4 object-cover"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="flex flex-wrap gap-2 my-2">
          {techs.map((tech, index) => (
            <motion.div whileHover={{scale: 1.2}} className="flex justify-center items-center bg-primary px-2 rounded gap-2" key={index}>
              <img src={`https://skillicons.dev/icons?i=${tech}`} alt={"preview " + tech} width={20} height={20}/>
              <h5 className="">
                {tech}
              </h5>
            </motion.div>
          ))}
        </div>
        <p className="line-clamp-6 mb-4">{desc}</p>
        <a
          href={href}
          className="bg-light text-darker hover:bg-fiveth transition-all duration-150 p-1 rounded mt-auto mr-auto"
        >
          To Project
        </a>
      </div>
    </motion.div>
  );
}
