# DT208G Moment 3

This project was created using [Angular](https://angular.dev/) version 19.2.8.

### Implemented Features:

- **Responsive Design** — The site adapts well across screen sizes.

- **Three Pages** — Home, About, and Conversion Calculator. The homepage includes one image.

- **Conversion Calculator** — Allows users to convert between different units: from meters to feet and from celsius to fahrenheit (and vice versa). This functionality is implemented using Angular components and data binding.

- **About Page** — Describes the process of completing the assignment, how the tasks were solved, and the conclusions drawn.

- **Navigation System** — A well-functioning navigation system built using Angular's RouterModule enables users to navigate between subpages.

- **Reusable Component** — The header is a shared component displayed on all subpages. Technically, this could have been placed directly in `app.component.html`, but since the assignment required a component to be used by a page component, this was the most logical choice under those constraints. If the calculator used a button component, or if I'd created a separate form component, I could have used one of those instead.

- **Styling with SCSS** — All styling is written using SCSS. Global styles are organized in the `styles/` folder and imported via `styles.scss`. More specific styles are applied at the component level, primarily for the header. If this app were to grow, I would likely split out more styles into their respective component files.

- **Source Code & Versioning** — The code is version-controlled with Git and published on GitHub.

- **Live Deployment** — The finished, optimized site is deployed via GitHub Pages 👉 [robinhawiz.github.io/DT208G-moment3/](https://robinhawiz.github.io/DT208G-moment3/)

---

### Note on Hosting

Deploying to GitHub Pages was a bit hacky, as it’s intended for static sites. Angular apps are dynamic, and I had to implement workarounds (like copying `index.html` to `404.html`) to make routing and deep links function correctly. For now, this setup works, but for the main project, I plan to use a more appropriate host like Firebase or Netlify.

---
