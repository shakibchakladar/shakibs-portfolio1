import { ABOUT_TEXT } from ".";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <section id="about-me" className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center text-white">About Me</h2>
      <div className="lg:flex lg:flex-wrap">
        <div className="justify-between w-full gap-4 p-2 lg:flex lg:p-8">
          <div className="items-center justify-center w-full lg:flex sm:flex-col lg:w-1/2">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </div>
          <div className="w-full lg:h-1/2">
            <div className="flex justify-center lg:justify-start">
              <p>{ABOUT_TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
