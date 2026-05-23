import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function LongCard({ src, alt, title, desc, key }) {
    const [imgSrc, setImgSrc] = useState(src);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-primary p-4 rounded flex flex-col md:flex-row gap-4 min-h-[50%] md:min-h-full items-center md:items-stretch md:justify-center"
      key={key}
    >
      <Image
        src={imgSrc}
        alt={alt || ""}
        width={300}
        height={500}
        onError={() => {
            setImgSrc('https://placehold.net/default.png');
        }}
        className="rounded object-cover min-w-[300px] max-h-[200px]"
      />
      <div className="flex flex-col gap-4 mt-2">
        <h5 className="font-bold text-xl">{title}</h5>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}
