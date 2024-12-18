import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center ">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="px-2 py-1 mr-2 text-sm font-medium text-purple-900 rounded bg-neutral-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
