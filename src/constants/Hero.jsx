import { HERO_CONTENT } from ".";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
      <div className="text-center ">
        <div className="w-full">
          <div className="">
            <h1 className="pb-16 text-6xl font-extrabold tracking-tight text-center text-white lg:mt-16 ">
              Shahariar Shakib Chakladar
            </h1>
            <span className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text ">
              Frontend Web Developer
            </span>
            <p className="p-4 mt-5 text-white">{HERO_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
