import { motion } from "motion/react";
import Image from "next/image";

export default function LongCard({ src, alt, title, desc, key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-primary p-4 rounded flex flex-col md:flex-row gap-4 min-h-[50%] md:min-h-full justify-center"
      key={key}
    >
      <Image
        src={src}
        alt={alt || ""}
        width={300}
        height={300}
        className="rounded mb-4 object-cover"
      />
      <div className="flex flex-col gap-4 mt-2">
        <h5 className="font-bold text-xl">{title}</h5>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}
