import { Github, Linkedin, Mail } from "lucide-preact";
import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      class="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-200"
    >
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center dark:text-white">
          Get In Touch
        </h2>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 max-w-xl mx-auto">
          <p class="text-center text-gray-700 dark:text-gray-300 mb-6">
            Interested in working together? Feel free to reach out through any
            of these channels:
          </p>
          <div class="flex justify-center space-x-8">
            <a
              href="mailto:jacksonpwoods@gmail.com"
              class="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Mail class="mr-2" size={20} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/jacksonwoods/"
              class="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Linkedin class="mr-2" size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/jpwoods92"
              class="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <Github class="mr-2" size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
