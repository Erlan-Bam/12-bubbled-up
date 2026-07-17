# Bubbled Up Car Wash & Detailing — unofficial website concept

This repository contains one standalone, noindex prospect preview for Bubbled Up Car Wash & Detailing. It does not contain routes, facts, or assets for any other prospect.

- Production: [https://12-bubbled-up.vercel.app](https://12-bubbled-up.vercel.app/)
- Reusable industry system: Auto detailing (derived from `template/auto-detailing`)
- Canonical business facts: `src/data/prospect.ts`

## Run and verify

```bash
npm install
npm run dev
```

Run the complete generated-output safeguard check:

```bash
npm run verify
```

The command type-checks the project, builds the single root page, and checks the business disclosure, noindex policy, exact form-safety copy, absent form action, absent review schema, canonical hostname, site-wide robots rule, and Vercel response-header configuration.

## Public research sources

- [BBB Business Profile](https://www.bbb.org/us/ok/tulsa/profile/car-wash/bubbled-up-car-wash-1025-38107142): Phone, address, owner contact, and car wash/detailing/truck/mobile categories.
- [Google Maps listing search](https://www.google.com/maps/search/?api=1&query=Bubbled%20Up%20Car%20Wash%20%26%20Detailing%20Tulsa%20OK): Public listing and rating snapshot to recheck before launch.

Rating values are dated research snapshots, not review schema. Recheck volatile facts before owner-approved use.

## Confirm with the owner before launch

- Current rating and review count
- Current hours
- Walk-in policy
- Mobile coverage
- Current service menu and prices
- Permission to use project photos

## Safety boundary

- Keep the fixed unofficial-concept disclosure and full noindex policy until owner approval.
- Keep the form browser-only; it must not email, store, or transmit visitor data.
- Do not add testimonials, licenses, insurance, awards, prices, response times, warranties, guarantees, staff, or expanded service areas without evidence.
- Replace code-native placeholders only with owner-supplied, rights-cleared photography.

## Deployment

This isolated repository deploys as one Astro static site to Vercel. The configured project name is `12-bubbled-up`, and the output directory is `dist/`.
