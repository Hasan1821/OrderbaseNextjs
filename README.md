# OrderBase — Order Management Dashboard

A Next.js 14 (App Router) + Tailwind CSS rebuild of the OrderBase / FCommerce
product screens, fully linked into one clickable flow.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it redirects to `/signup`.

## Flow / page map

| Route | Screen |
|---|---|
| `/signup` | Create account |
| `/login` | Sign in (credential-gated) |
| `/onboarding` | Create your organization (step 2 of 2) |
| `/organizations` | Choose an organization to continue (auth-guarded) |
| `/dashboard` | Tenant (store) dashboard — sales, orders, top products (auth-guarded) |
| `/dashboard/orders` | Orders list with status tabs |
| `/dashboard/products`, `/customers`, `/stock`, `/purchase`, `/returns`, `/discounts`, `/reports`, `/team`, `/settings`, `/billing` | Placeholder sections wired into the sidebar |
| `/dashboard/team/roles` | Assign Role & Permissions |
| `/admin` | Platform Super Admin dashboard |
| `/admin/tenants` | All tenants table |
| `/admin/...` | Every sidebar item (subscriptions, plans, integrations, reports, etc.) has a routed placeholder page |

## Auth flow

- `/login` — the only real gate. Credentials are checked against a mock
  account: **`shovon@example.com` / `password123`** (shown on the page
  itself). Wrong credentials show an inline error and you stay on the form;
  correct credentials start a session (`localStorage`) and route to
  `/organizations`.
- "Sign in" on the signup page always opens `/login` — it never skips
  straight to the dashboard.
- `/signup` → `/onboarding` starts a session automatically (creating an
  account logs you in), so you land on `/organizations` without a second
  login step.
- `/organizations`, everything under `/dashboard`, and everything under
  `/admin` are wrapped in `AuthGuard` (`components/AuthGuard.tsx`), which
  checks the session on mount and redirects to `/login` if there isn't one
  — so deep-linking straight to `/dashboard` without logging in bounces you
  back to the login form.
- A logout icon in both topbars (and the organizations header) clears the
  session and returns to `/login`.

## Notes

- Navigation is fully wired with `next/link` — every button that logically
  leads somewhere (Create Account → onboarding, Continue → choose
  organization, Go to Dashboard → tenant dashboard, View all → orders,
  Roles & Permissions, etc.) actually routes there.
- Fully responsive: both sidebars (tenant + admin) collapse into an
  off-canvas drawer below the `lg` breakpoint, opened via the hamburger
  icon in the topbar and closed by tapping the backdrop, the `X`, or
  navigating. Topbars collapse search/help/labels progressively on
  smaller screens. All data tables scroll horizontally on narrow
  viewports instead of squashing. Stat grids and content grids reflow
  from 1–2 columns on mobile up to full multi-column layouts on
  laptop/desktop.
- The dashboard and admin shells are pinned to the viewport
  (`h-screen overflow-hidden`): the sidebar and topbar never move, and
  only the `<main>` content area scrolls when its content is taller than
  the viewport — the page/body itself never scrolls in those sections.
- Charts use `recharts`; icons use `lucide-react`.
- All data in `lib/data.ts` is mock data — swap in real API calls when ready.
- Tailwind theme tokens (brand indigo + accent orange) live in
  `tailwind.config.js`.
