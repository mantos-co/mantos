# Mantos — public site

Next.js (App Router) public marketing site for Mantos Technology Studio. Renders Projects and Team content live from the [backend API](https://github.com/TJaqui/mantos-back) on every request — there's no local content store here.

## Setup

```
cp .env.local.example .env.local   # set INTERNAL_API_URL to your backend's URL
npm install
npm run dev
```

Runs on `http://localhost:3000`. Requires the backend API to be running and reachable.

## Structure

- `app/` — routes: home, `/projects/[slug]`, `/team/[slug]`
- `components/` — page sections (Hero, Topics, ProjectsCarousel, Team, Contact)
- `lib/api.ts` — fetch helpers that hit the backend (server-side only, `cache: 'no-store'`)
- `lib/data.ts` — the one piece of static content (the "What we do" topics), not backend-managed

## Deploying

Deploy as a standard Next.js app (e.g. Vercel). Set `INTERNAL_API_URL` in the deployment's environment variables to the deployed backend's URL — it's read server-side only, so it never reaches the browser bundle.

Content (projects, team) is managed via the companion [admin panel](https://github.com/TJaqui/mantos-admin), not by editing this repo.
