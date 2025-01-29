import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-preact";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <nav class="bg-white dark:bg-gray-800 z-50 transition-colors duration-200">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a href="#home" class="text-xl font-bold dark:text-white">
            Jackson Woods
          </a>

          {/* Desktop Navigation */}
          <div class="hidden md:flex space-x-8 items-center">
            <a
              href="#about"
              class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#projects"
              class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              class="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div class="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              class="p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} class="p-2">
              {isMenuOpen ? (
                <X size={24} class="text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu size={24} class="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              class="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              class="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Projects
            </a>
            <a
              href="#contact"
              class="block px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
