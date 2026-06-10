{
  "name": "run_terminal_command",
  "parameters": {
    "command": "npx create-next-app@latest --typescript --app"
  }
}

{
  "name": "edit_existing_file",
  "parameters": {
    "filepath": "/home/workspace/components/Header.tsx",
    "changes": `
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-lg font-bold">Healing Rooms</a>
        {/* Navigation menu */}
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/healing-sessions">Healing Sessions</a></li>
          <li><a href="/private-prayer-sessions">Private Prayer Sessions</a></li>
          <li><a href="/inner-restoration">Inner Restoration</a></li>
          <li><a href="/retreat-experiences">Retreat Experiences</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
`
}

{
  "name": "edit_existing_file",
  "parameters": {
    "filepath": "/home/workspace/components/Hero.tsx",
    "changes": `
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-[60vh] flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Find peace and restoration in our serene retreat center</h1>
        <p className="mt-4 text-xl">Escape the stresses of everyday life and rejuvenate your mind, body, and soul.</p>
      </div>
    </section>
  );
};

export default Hero;
`
  }
}

{
  "name": "edit_existing_file",
  "parameters": {
    "filepath": "/home/workspace/styles/tailwind.config.js",
    "changes": `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
`
  }
}

{
  "name": "edit_existing_file",
  "parameters": {
    "filepath": "/home/workspace/package.json",
    "changes": `
{
  "name": "run_terminal_command",
  "parameters": {
    "command": "npm install tailwindcss"
  }
`
  }
}


{
  "name": "edit_existing_file",
  "parameters": {
    "filepath": "/home/workspace/package.json",
    "changes": `
"scripts": {
  ...
  "postinstall": "npx tailwindcss -i ./styles/tailwind.css -o ./public/styles/tailwind.css"
}
`
  }
}

{
  "name": "edit_existing_file",
  "parameters": {
    "filepath": "/home/workspace/styles/tailwind.css",
    "changes": `
@tailwind base;
@tailwind components;
@tailwind utilities;
`
  }
}


{
  "name": "run_terminal_command",
  "parameters": {
    "command": "npm run dev"
  }
}

