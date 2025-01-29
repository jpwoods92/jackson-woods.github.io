import React from "react";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      class="bg-white dark:bg-gray-800 py-20 transition-colors duration-200"
    >
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">
          Featured Projects
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6"
            >
              <h3 class="text-xl font-semibold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div class="flex space-x-4">
                {!!project.demo && (
                  <a
                    href={project.demo}
                    class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
