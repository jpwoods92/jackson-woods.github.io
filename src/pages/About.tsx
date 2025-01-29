import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      class="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-200"
    >
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">
          About Me
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Senior Frontend Engineer with 6 years of experience building
            scalable web applications. Specializing in React, TypeScript, and
            modern frontend architectures. Passionate about creating intuitive
            user interfaces and optimizing application performance.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Creative problem solving and story telling are my specialty, they
            are critical in defining problems and discovering solutions.
            Compelling stories are what bring these discovered solutions to life
            and explain how they will be implemented to both the client and
            end-user.
          </p>
          <div class="mt-8">
            <h3 class="text-xl font-semibold dark:text-white mb-4">Skills</h3>
            <div class="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Micro-Frontend",
                "HTML5",
                "CSS3",
                "Redux",
                "GraphQL",
                "Node.js",
                "Git",
                "Jira",
                "AWS",
                "PostgreSQL",
                "Ruby",
                "Ruby on Rails",
              ].map((skill) => (
                <span
                  key={skill}
                  class="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
