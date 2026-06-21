# She Blooms — Preview App (Deploy to Vercel)

This is the interactive web preview of the She Blooms 90-Day Reset (the same
content as the printable PDF, in browsable form).

## Deploy to Vercel (3 ways)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
cd she-blooms-app
vercel
```
Follow the prompts (link or create a project). Then for production:
```bash
vercel --prod
```

### Option B — GitHub + Vercel dashboard
1. Push this folder to a new GitHub repo:
   ```bash
   cd she-blooms-app
   git init
   git add .
   git commit -m "She Blooms preview app"
   git branch -M main
   git remote add origin <your-empty-github-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import that repo.
3. Vercel auto-detects Next.js — just click **Deploy**.

### Option C — Drag and drop
1. Go to https://vercel.com/new
2. Drag this whole `she-blooms-app` folder onto the page.
   (Vercel will install dependencies and build automatically.)

## Local development
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Project structure
```
she-blooms-app/
├── app/
│   ├── layout.js       # page metadata
│   └── page.js         # entry point, renders the journal component
├── components/
│   └── SheBloomsV3.jsx # the full interactive journal UI
├── package.json
├── next.config.js
└── vercel.json
```

No environment variables or external services required — it's fully static/client-side.
