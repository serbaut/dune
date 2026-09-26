# CarePoint Clinic — GitHub Pages

A sample medical website ready to publish on GitHub Pages.

## Files

- `index.html` — main page (hero, services, doctors, about, contact form)
- `styles.css` — styling (responsive, mobile nav included)
- `script.js` — mobile nav toggle, demo form handler, dynamic footer year

## Publish to GitHub Pages

1. Create a new repository on GitHub (e.g. `med-site`).
2. Push these files to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: medical site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/med-site.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then **Save**.
6. Wait a minute — your site will be live at:

   ```
   https://<your-username>.github.io/med-site/
   ```

## Customize

- Edit text directly in `index.html`.
- Change colors in `styles.css` under `:root` (CSS variables).
- Replace the demo form handler in `script.js` with a real backend or a form service (e.g. Formspree).
