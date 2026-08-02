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
| `/onboarding` | Create your organization (step 2 of 2) |
| `/organizations` | Choose an organization to continue |
| `/dashboard` | Tenant (store) dashboard — sales, orders, top products |
| `/dashboard/orders` | Orders list with status tabs |
| `/dashboard/products`, `/customers`, `/stock`, `/purchase`, `/returns`, `/discounts`, `/reports`, `/team`, `/settings`, `/billing` | Placeholder sections wired into the sidebar |
| `/dashboard/team/roles` | Assign Role & Permissions |
| `/admin` | Platform Super Admin dashboard |
| `/admin/tenants` | All tenants table |
| `/admin/...` | Every sidebar item (subscriptions, plans, integrations, reports, etc.) has a routed placeholder page |

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
- Charts use `recharts`; icons use `lucide-react`.
- All data in `lib/data.ts` is mock data — swap in real API calls when ready.
- Tailwind theme tokens (brand indigo + accent orange) live in
  `tailwind.config.js`.
