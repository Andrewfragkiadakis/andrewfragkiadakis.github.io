# Andreas Fragkiadakis - Portfolio v2

Welcome to my personal portfolio website! This project showcases my work, skills, and experience as a Creative Technologist and Software Engineer.

## 🚀 Live Site
[https://andreas.technology](https://andreas.technology)

## 🛠 Technologies Used
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Three.js](https://threejs.org/) (via React Three Fiber)
- **Deployment**: GitHub Pages (Static Export)

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
