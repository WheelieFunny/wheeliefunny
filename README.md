# wheeliefunny.com

Static recreation of [wheeliefunny.com](https://www.wheeliefunny.com/) for free hosting on GitHub Pages.

## Local preview

Open `index.html` in a browser, or run a simple server:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

1. Create a new GitHub repository (for example `wheeliefunny`).
2. Push this project to the repository:

   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/wheeliefunny.git
   git push -u origin main
   ```

3. In the repository on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder, then save.
6. After a minute or two, the site will be live at `https://YOUR_USERNAME.github.io/wheeliefunny/` (or your custom domain once DNS is configured).

## Custom domain (wheeliefunny.com)

This repo includes a `CNAME` file set to `www.wheeliefunny.com`.

1. In **Settings → Pages → Custom domain**, enter `www.wheeliefunny.com` and save.
2. At your domain registrar, update DNS:

   | Type  | Name | Value                         |
   | ----- | ---- | ----------------------------- |
   | CNAME | www  | YOUR_USERNAME.github.io       |
   | A     | @    | 185.199.108.153               |
   | A     | @    | 185.199.109.153               |
   | A     | @    | 185.199.110.153               |
   | A     | @    | 185.199.111.153               |

3. Enable **Enforce HTTPS** in GitHub Pages settings once DNS has propagated.
4. Cancel the Squarespace subscription after confirming the new site works and the domain points to GitHub Pages.

## Editing content

- Page copy and links: `index.html`
- Layout and colors: `styles.css`
- Hero photo: replace `assets/hero.webp`
