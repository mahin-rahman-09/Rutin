# RUTIN — website preview

A static marketing site with the RUTIN quiz built in. No build step, no framework —
just `index.html`, `css/style.css`, and `js/app.js`. That means it deploys anywhere
that serves static files, including Vercel's free tier, with zero configuration.

## What's in it

- A landing page (hero, value props, waitlist signup)
- The 7-question routine quiz
- A **basic, free** routine result (AM + PM only)
- A **premium teaser** block listing what's locked behind the future app
  (weekly plan, adaptive routine, AI coach, progress tracking), with a
  placeholder price and a waitlist capture
- A **language toggle** (top-right corner: `EN / বাংলা`) that switches the
  entire quiz and report between English and Bangla, instantly, no reload

## Turning on real email capture (Formspree)

The forms are wired to send through [Formspree](https://formspree.io) — you
just need to plug in your own endpoint:

1. Sign up free at formspree.io.
2. Create a new form. Formspree gives you an endpoint that looks like
   `https://formspree.io/f/xxxxabcd`.
3. Open `js/app.js` and paste it into the constant at the very top:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxabcd";
   ```
4. Save, push to GitHub, and Vercel will redeploy automatically.

Until you do this, the forms still work from the visitor's point of view (they
see a "you're on the list" confirmation), but nothing is actually sent or
saved anywhere — so don't rely on it for real signups until the endpoint is
in place. Once it is, every submission arrives in your Formspree inbox
tagged with which form it came from (`hero_waitlist` or `result_waitlist`)
and which language the visitor was using.

---

## Step 1 — Push this to GitHub (private repo)

If you don't have Git set up locally yet, the easiest path is **GitHub
Desktop** (a graphical app, no terminal needed):

1. Install [GitHub Desktop](https://desktop.github.com/) and sign in.
2. `File → New Repository` → point it at this folder → check **Private** →
   Create.
3. Click **Publish repository** in the top bar → make sure **Keep this code
   private** is checked → Publish.

That's it — your private repo is live on GitHub.

*(If you'd rather use the command line instead, let me know and I'll give you
the exact `git init / add / commit / push` commands for this folder.)*

## Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → sign up/log in with your GitHub
   account (this lets Vercel see your private repo).
2. Click **Add New → Project**.
3. Select the RUTIN repo you just pushed.
4. Framework preset: choose **"Other"** (this is a plain static site, no
   framework to detect).
5. Leave build command and output directory blank — there's nothing to build.
6. Click **Deploy**.

Vercel gives you a live `.vercel.app` URL immediately, and will auto-redeploy
every time you push a change to GitHub. You can later attach a custom domain
under the project's **Settings → Domains**.

---

## Local preview (optional)

You don't need a server to look at this — just double-click `index.html` and
it opens in your browser. If a form or font doesn't behave right in a plain
file:// preview, run this from inside the folder instead (needs Node.js):

```bash
npx serve .
```

Then open the URL it prints (usually `http://localhost:3000`).
