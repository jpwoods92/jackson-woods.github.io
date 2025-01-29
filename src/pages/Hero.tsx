import React from "react";
import profilePicture from "../assets/profile.jpg";
import { Github, Linkedin, Mail } from "lucide-preact";

export const Hero = () => {
  return (
    <div
      id="home"
      class="bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <div class="max-w-6xl mx-auto px-4 py-20 text-center">
        <img
          src={profilePicture}
          alt="Profile"
          class="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
        />
        <h1 class="text-4xl font-bold mb-4 dark:text-white">
          Senior Frontend Web Developer
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Building beautiful, responsive, and user-friendly web applications
        </p>
        <div class="flex justify-center space-x-4">
          <a
            href="https://github.com/jpwoods92"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jacksonwoods/"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:jacksonpwoods@gmail.com"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
