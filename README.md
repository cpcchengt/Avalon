# Avalon

Initial project scaffolded with:

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Tailwind

Tailwind is enabled through the official Vite plugin and loaded from `src/index.css`.

## Routing

React Router is configured with a shared layout and starter pages:

- `/`
- `/about`
- catch-all `404`

## Commit Convention

Commit messages are validated locally through Husky + Commitlint using the Conventional Commits format.

Examples:

```bash
feat: add user profile page
fix: correct router redirect
docs: update project setup guide
chore: configure commit message linting
```

You can also check recent commits manually with:

```bash
npm run commitlint
```

## Start editing

The main starter screen lives in `src/App.tsx`.
