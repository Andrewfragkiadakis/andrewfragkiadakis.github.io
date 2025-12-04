# Andreas Fragkiadakis - Portfolio v2

Hello! This repository hosts my dynamic personal CV and portfolio website, rebuilt from the ground up using **Next.js 16**. It showcases my skills, education, work experience, and projects in IT and Computer Engineering with a modern, interactive user experience.

This project represents a significant transformation from previous versions, moving to a robust, component-based architecture using the latest web technologies.

## 🚀 Live Site
Visit the live portfolio at: [https://andreas.technology](https://andreas.technology)

## �‍💻 About Me
I’m an IT & Computer Engineering student with expertise in networking, system administration, and web development. This site is a creative and dynamic representation of my professional journey, showcasing my ability to work with modern web technologies to build engaging user experiences.

## ✨ Key Features

The v2 portfolio introduces significant improvements and new features:

- **Modern Tech Stack**: Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**, offering a modular, scalable, and maintainable codebase.
- **Dynamic "Story Mode" CV**: Education and Experience sections are presented as an interactive timeline that animates into view on scroll using **Framer Motion**.
- **Interactive 3D Elements**: Features a custom-built 3D binary trail animation and hero scene using **React Three Fiber**.
- **Bilingual Support**: Full support for **English** and **Greek** languages with smooth switching.
- **Theme System**: Comprehensive **Light/Dark mode** with dynamic color switching.
- **Responsive Design**: Fully mobile-friendly with a dedicated mobile navigation bar and optimized touch interactions.
- **Project Showcase**: A dynamic grid displaying my latest projects with hover effects and detailed information.
- **Performance**: Static export configuration for lightning-fast loading on GitHub Pages.

## 🛠 Built With
- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons**: [Font Awesome](https://fontawesome.com/)

## 📂 Project Structure
- `andreas-technology-v2/`: Source code for the Next.js application.
- `out/`: Static build output (deployed to root).
- `public/`: Static assets (images, icons).
- `backup_v1_2025/`: Backup of the previous version of the site.

## 💻 Development

To run the project locally:

1. Navigate to the project directory:
   ```bash
   cd andreas-technology-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

This project is configured for static export to GitHub Pages.

1. Build the project:
   ```bash
   cd andreas-technology-v2
   npm run build
   ```

2. Copy the static output to the root:
   ```bash
   cp -r out/* ../
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy update"
   git push
   ```

## 📄 License
© 2025 Andreas Fragkiadakis. All rights reserved.
