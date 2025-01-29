import React, { useEffect } from "react";
import { About, Contact, Hero, Navigation, Projects } from "./pages";

export const App = () => {
  return (
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
