<div align="center">
  <a href="https://meshchane-of-taganrog.vercel.app/">
    <img src="src/app/icon.png" alt="Meshchane of Taganrog logo" height="256" />
  </a>
  <h1>Meshchane of Taganrog | Мещане Таганрога</h1>
  <p>
    An educational and tourism-focused project dedicated to organizing immersive excursions exploring the history, lifestyle, and traditions of Taganrog’s urban estate (meshchane).
  </p>
</div>

## Mission

We want to preserve and promote the cultural heritage of Taganrog through innovative, immersive tour experiences. By combining modern web technologies with rich historical content, we aim to make the city's unique stories and landmarks accessible to both locals and visitors, fostering a deeper connection with Taganrog's past and present.

## Technology Stack

### Core

- **Next.js 16 (App Router)** – The latest version of the React framework for production.
- **React 19** – Leveraging the newest features like Actions and improved transitions.
- **TypeScript** – Strictly typed codebase for maximum reliability.
- **Zustand** – Lightweight, centralized state management.
- **Prisma & PostgreSQL** – Type-safe ORM with automated migrations and a robust relational database.

### UI & Styling

- **Tailwind CSS 4** – Utility-first CSS framework with the latest features and performance improvements.
- **ShadCN UI** – Beautiful, customizable components built on top of Radix UI.
- **Radix UI** – Unstyled, accessible component primitives for building high-quality design systems.
- **Lucide React** – Comprehensive icon library with consistent design.

### Forms & Validation

- **React Hook Form** – Efficient, flexible form handling with minimal re-renders.
- **Zod** – Schema-first validation for both API and form data.

### Testing & Documentation

- **Vitest** – Fast, modern unit testing framework.
- **Playwright** – Reliable end-to-end testing for web applications.
- **Storybook** – Interactive component documentation and visual testing.
- **React Scan** – Real-time performance monitoring to catch unnecessary re-renders.

### Development Tools

- **Husky & lint-staged** – Pre-commit hooks for automated code linting and formatting.
- **ESLint & Prettier** – Code quality and consistent formatting.
- **Steiger** – FSD architecture linter for maintaining clean project structure.

### DevOps & Deployment

- **Docker Compose** – Containerized local development environment.
- **Vercel** – Automated CI/CD with global CDN and edge functions.

## Architecture

The project follows [**Feature-Sliced Design (FSD)**](https://fsd.how/) methodology, ensuring:

- Clear separation of concerns
- Scalable and maintainable codebase
- Well-defined domain entities and relationships
- Modular feature organization
- Architecture validation with Steiger

## Getting Started

### Prerequisites

- [**Node.js**](https://nodejs.org/)
- [**Docker**](https://www.docker.com/)
- [**PostgreSQL**](https://www.postgresql.org/) (or use the provided Docker setup)

### Installation and launch

1. Install dependencies

```bash
npm install
```

2. Start the database

```bash
npm run db
```

3. Generate Prisma client

```bash
npm run generate
```

4. Run database migrations

```bash
npm run db:migrate
```

5. Start the development server

```bash
npm run dev
```

6. The application will be available at `http://localhost:3000`.

## Project Structure

```
├─ src/
│  ├─ app/        # app initialization, routes, global configuration
│  ├─ app-pages/  # main app pages
│  ├─ widgets/    # large independent UI blocks
│  ├─ features/   # user scenarios and business features
│  ├─ entities/   # business entities and domain models
│  └─ shared/     # reusable components, utilities, styles
├─ .husky/        # Git hooks
├─ .next/         # Next.js build output
├─ .storybook/    # Storybook configuration
├─ prisma/        # schema, migrations, and Prisma-related tooling
├─ components.json     # ShadCN configuration
├─ docker-compose.yml  # local PostgreSQL service
├─ next.config.ts      # Next.js configuration
├─ postcss.config      # PostCSS configuration for TailwindCSS
├─ prisma.config.ts    # Prisma configuration
└─ steiger.config.js   # FSD linter configuraion
```

## Available Scripts

### Development

- `npm run dev` – Start development server with Turbopack
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run ESLint
- `npm run format` – Format code with Prettier

### Database

- `npm run db` – Start PostgreSQL container with Docker Compose
- `npm run db:stop` – Stop PostgreSQL container
- `npm run db:migrate` – Create and apply migrations
- `npm run db:reset` – Reset database and apply all migrations
- `npm run generate` – Generate Prisma client
- `npm run studio` – Open Prisma Studio for database management

### Testing & Documentation

- `npm run storybook` – Start Storybook on port 6006
- `npm run build-storybook` – Build Storybook for production

### Deployment

- `npm run vercel-build` – Build script for Vercel deployment (includes Prisma setup)

## Contributing

This project was developed as part of a youth competition in collaboration with a university. Contributions, issues, and feature requests are welcome.

## Acknowledgments

Developed in partnership with [**Rostov State University of Economics**](https://rsue.ru/).
