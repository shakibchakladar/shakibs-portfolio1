import {RiReactjsLine} from "react-icons/ri";
const Tecnologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center">Tecnologies</h1>
      <div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-4">
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
