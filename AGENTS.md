# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js 16 application using the App Router. Routes live in `app/`, shared UI components in `components/`, utilities in `lib/`, and metadata/configuration in `config/`. Global styles are in `app/styles/globals.css`; Tailwind configuration is in `tailwind.config.ts`.

Static assets for the Next app belong in `public/`. The `site/` directory contains standalone exported HTML pages and media assets, while `montyforge/` contains design notes, uploads, and source brand materials.

## Build, Test, and Development Commands

This repo includes both `pnpm-lock.yaml` and `package-lock.json`; prefer `pnpm` for normal development unless coordinating an npm lockfile change.

- `pnpm dev` starts the local Next.js dev server with Turbopack.
- `pnpm build` creates a production build.
- `pnpm start` serves the production build after `pnpm build`.
- `pnpm lint` runs ESLint across the repository.

## Coding Style & Naming Conventions

Write TypeScript and React components using existing App Router patterns. Use PascalCase for component exports, kebab-case for route folders, and camelCase for variables and helpers. Prefer the `@/*` path alias from `tsconfig.json` for readable root-relative imports.

Formatting is enforced through ESLint, Prettier, and Tailwind CSS lint rules. Keep imports grouped and alphabetized per `import/order`, and follow Tailwind class ordering.

## Testing Guidelines

No dedicated test framework is currently configured. Treat `pnpm lint` and `pnpm build` as required verification before submitting changes. If adding tests, place them close to the code under test or in a clear test directory, and use suffixes such as `*.test.ts` or `*.test.tsx`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative commit subjects, sometimes with a Conventional Commits prefix such as `fix:`. Keep subjects concise, for example `fix: update navigation spacing` or `Update work page copy`.

Pull requests should include a brief description, verification steps, linked issues when applicable, and screenshots or recordings for visual changes. Call out updates to static assets, lockfiles, or exported HTML.

## Security & Configuration Tips

Do not commit secrets or local environment files. Keep dependency bumps intentional, and run `pnpm lint` plus `pnpm build` after changes to Next.js, React, Tailwind, or lockfiles.
