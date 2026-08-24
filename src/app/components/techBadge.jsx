import { motion } from "motion/react";
import Image from "next/image";

export default function TechBadge({ name, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center bg-primary p-4 rounded"
    >
      <Image src={icon} alt={name} width={50} height={50}/>
      <span className="text-lg font-bold">{name}</span>
    </motion.div>
  );
}
