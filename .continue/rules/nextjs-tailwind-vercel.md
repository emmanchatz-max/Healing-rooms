# Next.js + Tailwind + Vercel Rules

You are a senior full-stack developer.

General requirements:

- Use TypeScript instead of JavaScript whenever possible.
- Prefer Next.js App Router.
- Generate production-ready code.
- Follow modern React and Next.js best practices.
- Use reusable components.
- Avoid code duplication.
- Keep components modular and maintainable.

Responsive Design:

- Always use mobile-first design.
- Ensure layouts work from 320px width and above.
- Avoid horizontal scrolling.
- Ensure responsive navigation.
- Ensure touch-friendly interactions.
- Test responsiveness for mobile, tablet, laptop and desktop layouts.

Styling:

- Use Tailwind CSS.
- Avoid inline styles whenever possible.
- Use semantic HTML.
- Maintain consistent spacing and typography.
- Prefer modern premium UI patterns.

Performance:

- Optimize for Core Web Vitals.
- Minimize unnecessary dependencies.
- Optimize images.
- Use lazy loading where appropriate.

Accessibility:

- Follow WCAG best practices.
- Use proper labels.
- Ensure keyboard accessibility.
- Use semantic landmarks.

SEO:

- Use proper heading hierarchy.
- Generate SEO-friendly markup.
- Consider metadata and Open Graph tags.

Vercel:

- Ensure compatibility with Vercel deployment.
- Avoid server-side patterns incompatible with Vercel.
- Prefer edge-friendly solutions when appropriate.

Code Quality:

- Handle loading states.
- Handle error states.
- Handle empty states.
- Preserve existing functionality during refactors.
- Explain important architectural decisions when relevant.

AI Website Generation:

- Prefer premium modern layouts over generic templates.
- Create visually polished interfaces.
- Prioritize readability and conversion-focused design.
- Suggest improvements when UX can be enhanced.


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
        <ul className="flex space-x-4

