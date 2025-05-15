<div align="center">
  <h1>
    Brian's Portfolio Website
    <img src="./src/assets/favicon.png" alt="icon" width="50" height="50" style="vertical-align: middle; margin: 0 0 0 1rem;">
  </h1>
</div>

Available [here](https://brian-lim.netlify.app/)

## Overview

This project is a portfolio website showcasing my skills, experiences and key projects. It is designed with a focus on aesthetics, responsiveness and functionality.

## Tech Stack

- Frontend: React (Vite), TypeScript
- Styling: Tailwind CSS
- Hosting: Netlify

## Key Components

- [`App.tsx`](src/App.tsx): Main application component that sets up routing using `react-router`.
- [`Home.tsx`](src/pages/Home.tsx): The main page containing the different sections: About, Experience, and Projects.
- [`About.tsx`](src/pages/About.tsx): A page with information about me.
- [`Experience.tsx`](src/pages/Experience.tsx): A page displaying my experiences using data from [`experiences.json`](src/assets/experiences.json) and the [`ExperienceCard`](src/components/ExperienceCard/ExperienceCard.tsx) component.
- [`Projects.tsx`](src/pages/Projects.tsx): A page showcasing my projects, using data from [`projects.json`](src/assets/projects/projects.json) and the [`ProjectCard`](src/components/ProjectCard/ProjectCard.tsx) component.
- [`Nav.tsx`](src/components/Nav/Nav.tsx): Navigation component that dynamically highlights the current section in view using `IntersectionObserver`.
- [`Section.tsx`](src/components/Section.tsx): Reusable section component to structure content.
- [`SocialBar.tsx`](src/components/SocialBar/SocialBar.tsx): A component that renders links to my social media profiles.
- [`Footer.tsx`](src/components/Footer.tsx): A simple footer component.

## Development Process

1.  **Setup:**
    - Initialized the project using Vite with the React and TypeScript template.
    - Configured Tailwind CSS for styling.
    - Installed necessary dependencies such as `react-router`, `react-bootstrap-icons`.
2.  **Component Development:**
    - Created reusable components for sections, navigation, experience cards, and project cards.
    - Implemented responsive design using Tailwind CSS utility classes.
    - Used `IntersectionObserver` in the [`Nav`](src/components/Nav/Nav.tsx) component to dynamically highlight the active section.
3.  **Content Integration:**
    - Populated the website with my personal information, experiences, and projects.
    - Stored experience and project data in JSON files ([`experiences.json`](src/assets/experiences.json) and [`projects.json`](src/assets/projects/projects.json)) for easy management.
4.  **Deployment:**
    - Configured Netlify for continuous deployment from the GitHub repository.
    - Ensured proper routing and asset handling by including a `public/_redirects` file.

## Installation

**Clone the repository:**

- `git clone https://github.com/brianxlim/portfolio`

**Navigate to the project directory:**

- `cd portfolio`

**Install dependencies:**

- `npm install` or `yarn install`

## Running Locally

**Start the development server:**

- `npm run dev` or `yarn dev`
- Open `http://localhost:5173` in your browser to view the website.

## Production

**Build the project:**

- `npm run build` or `yarn build`

**Deployment**

- Deploy the `dist` folder to your hosting platform. In my case, I used Netlify.
- Note: The `public/` folder contains static assets like resume.pdf and project images to ensure they load correctly after deployment.
