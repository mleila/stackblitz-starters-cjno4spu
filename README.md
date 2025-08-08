## Grownomic App

A Next.js (App Router) application using Tailwind CSS v4 and Supabase. This guide covers how to build, run, invoke endpoints, set up GitHub webhooks, and add new endpoints.

### Tech Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS 4 (CSS-first config via `@theme` in `app/globals.css`)
- Supabase (SSR client)

### Prerequisites

- Node.js 18+
- Supabase project (URL + keys)

### Install

```bash
npm install
```

### Development

```bash
# Start dev server at http://localhost:3000
npm run dev
```

### Build

```bash
npm run build
```

### Start (Production)

```bash
npm run start
```

### Lint

```bash
npm run lint
```

---

## Tailwind CSS v4

Tailwind v4 uses CSS-first config. Tokens live in `app/globals.css` inside an `@theme` block:

```css
@import "tailwindcss";

@theme {
  /* colors, fonts, etc. */
  --color-primary-600: rgb(55 75 135);
  /* See full palette in app/globals.css */
}
```

No `theme.extend` in `tailwind.config.ts` is needed; keep only `content` paths if you keep the file at all.

---

## Environment Variables

Create `.env.local` with your Supabase settings (example):

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## Server Actions (Form Submissions)

The contact form submits via a Server Action in `app/actions.tsx`:

```ts
"use server";

export async function submitFormPayload({
  payload,
}: {
  payload: Record<string, any>;
}) {
  // Persists to Supabase (see file for details)
}
```

Enable Server Actions in `next.config.js` (experimental):

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
```

Restart the dev server after changing Next.js config.

---

## GitHub Webhook Setup

1. Expose an HTTPS endpoint in your app, e.g., `POST /api/github/webhook`.
2. In GitHub: Repo → Settings → Webhooks → Add webhook
   - Payload URL: your public endpoint (or tunneled URL via `ngrok`)
   - Content type: `application/json`
   - Secret: set a strong secret, store as `GITHUB_WEBHOOK_SECRET`
   - Events: select what you need (e.g., `push`, `pull_request`)
3. Verify via “Recent Deliveries”.

Signature verification: validate `X-Hub-Signature-256` (HMAC SHA-256 of the raw body with your secret) before processing.

Example handler:

```ts
// app/api/github/webhook/route.ts
import { NextResponse } from "next/server";
import crypto from "node:crypto";

function verifySignature(
  body: string,
  signature: string | null,
  secret: string
) {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = `sha256=${hmac.update(body).digest("hex")}`;
  return crypto.timingSafeEqual(
    Buffer.from(digest),
    Buffer.from(signature ?? "")
  );
}

export async function POST(request: Request) {
  const text = await request.text(); // raw body for signature
  const signature = request.headers.get("x-hub-signature-256");
  const secret = process.env.GITHUB_WEBHOOK_SECRET ?? "";

  if (!secret || !signature || !verifySignature(text, signature, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  const event = request.headers.get("x-github-event");
  const payload = JSON.parse(text);

  // handle event types (e.g., push, pull_request)

  return NextResponse.json({ ok: true });
}
```

---

## Add New API Endpoints

Use Route Handlers under `app/api`.

Example: `app/api/ping/route.ts`

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ received: body }, { status: 201 });
}
```

### Invoke endpoints

```bash
# GET
curl -s http://localhost:3000/api/ping

# POST
curl -s -X POST http://localhost:3000/api/ping \
  -H 'Content-Type: application/json' \
  -d '{"hello":"world"}'
```

---

## Common Commands

```bash
# Dev
npm run dev

# Build & Start
npm run build && npm run start

# Lint
npm run lint
```

---

## Notes

- Tailwind v4 theme config lives in `app/globals.css` under `@theme {}`
- Keep `tailwind.config.ts` minimal (content paths) if present at all
- Always restart dev server after changing `next.config.js`
