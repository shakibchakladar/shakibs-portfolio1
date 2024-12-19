import { HERO_CONTENT } from ".";
import { motion } from "motion/react";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="text-center ">
        <div className="w-full">
          <div className="">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-extrabold tracking-tight text-center text-white lg:mt-16 "
            >
              Shahariar Shakib Chakladar
            </motion.h1>
            <motion.span
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text "
            >
              Frontend Web Developer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="p-4 mt-5 text-white"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
