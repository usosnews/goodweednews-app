# USOS Field Guide — Deploy to GitHub Pages
## Full step-by-step guide for Android PWA install

---

### What you're deploying
A fully self-contained Progressive Web App (PWA). No server needed. No database. No app store.
The app works offline once installed. Laws are baked in and update when you push a new version.

---

## Files in this package

| File | What it does |
|---|---|
| `index.html` | The entire app — all 25 states + DC, all data, all logic |
| `manifest.json` | Tells Android "this is an installable app" |
| `sw.js` | Service worker — enables offline use |
| `icon-192.svg` | App icon (home screen) |
| `icon-512.svg` | App icon (splash screen) |

---

## Step 1 — Create a free GitHub account
Go to **github.com** → Sign up (free). Skip if you already have one.

---

## Step 2 — Create a new repository

1. Click the **+** icon (top right) → **New repository**
2. Repository name: `usos-app` (or any name you like)
3. Set to **Public** (required for free GitHub Pages)
4. Click **Create repository**

---

## Step 3 — Upload your files

On the new repository page:

1. Click **uploading an existing file**
2. Drag ALL FIVE files into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.svg`
   - `icon-512.svg`
3. Scroll down → click **Commit changes**

---

## Step 4 — Enable GitHub Pages

1. Click **Settings** tab (top of the repository)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source** → select **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**
6. Wait ~60 seconds → refresh the page
7. You'll see: *"Your site is live at https://YOUR-USERNAME.github.io/usos-app/"*

---

## Step 5 — Connect your custom domain (goodweednews.app)

In GitHub Pages settings → **Custom domain** → type: `goodweednews.app` → Save.

Then in your domain registrar (Namecheap / Google Domains), add these DNS records:

```
Type: A       Host: @    Value: 185.199.108.153
Type: A       Host: @    Value: 185.199.109.153
Type: A       Host: @    Value: 185.199.110.153
Type: A       Host: @    Value: 185.199.111.153
Type: CNAME   Host: www  Value: YOUR-USERNAME.github.io
```

DNS propagates in 5–30 minutes. GitHub auto-issues a free SSL certificate.

---

## Step 6 — Install on Freida's Android

1. Open **Chrome** on the Android phone
2. Navigate to `https://goodweednews.app` (or the github.io URL)
3. Wait for the **"Add to Home Screen"** banner to appear at the bottom of the screen
   - If it doesn't appear automatically: tap the **3-dot menu** (top right) → **Add to Home Screen**
4. Tap **Add**
5. The USOS icon appears on the home screen
6. Tap it — opens full-screen, no browser chrome, indistinguishable from a native app
7. Works offline immediately

---

## Updating the app (when laws change)

1. Edit `index.html` on your computer (find the state in the STATES array)
2. Go to your GitHub repository
3. Click `index.html` → pencil icon (Edit) → paste updated content → **Commit changes**
4. GitHub Pages auto-deploys in ~60 seconds
5. The app updates on everyone's phone next time they open it

---

## Sponsorship enquiry emails

Each state card has an **"Enquire"** button that opens a pre-filled email to:
`freida@goodweednews.com`

Subject line is pre-filled: `USOS Sponsorship — [State Name]`

When you're ready to accept sponsors, just make sure that inbox is monitored.

---

## Cost summary

| Item | Cost |
|---|---|
| GitHub Pages hosting | **Free** |
| SSL certificate | **Free** (auto via GitHub) |
| goodweednews.app domain | ~$15/year |
| **Total to run the app** | **~$15/year** |

---

*Stay Elevated. Stay Curious. — United States of Stoners*
*Science : History : Facts*
