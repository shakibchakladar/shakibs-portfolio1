import { FaDatabase, FaGithub, FaNode, FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
const Tecnologies = () => {
  return (
    <div id="tecnologies" className="pb-24 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center">Tecnologies</h1>
      <div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </div>
        <div className="flex justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <SiMongodb className="text-green-700 text-7xl" />
        </div>
        <div className="flex items-center justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <FaNode className="text-green-600 text-7xl" />
        </div>
        <div className="flex items-center justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <IoLogoFirebase className="text-yellow-400 bg-black text-7xl" />
        </div>
        <div className="flex items-center justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <FaGithub className="bg-black text-7xl " />
        </div>
        <div className="flex items-center justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <RiTailwindCssFill className="text-blue-500 bg-black text-7xl " />
        </div>
        <div className="flex items-center justify-center p-4 border-4 rounded-2xl border-neutral-800">
          <FaNodeJs className="text-yellow-400 bg-black text-7xl " />
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
