# 🖼️ Zoe's Online Gallery

A lightweight, copyright-protected personal gallery website to showcase drone photography and videography. Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and automated scripts for image processing.

---

## 📁 Project Structure

```
my-gallery/
├── public/
│   ├── images/
│   └── videos/
├── src/
│   ├── components/
│   └── pages/
├── input/
│   ├── homepage/
│   ├── nature/
│   └── ...other categories
├── batchImagePrep.js
├── generateMediaJson.js
├── media.json
├── package.json
└── astro.config.mjs
```

---

## 🚀 Basic Setup Commands

Run these in terminal after cloning the repo:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/your-gallery-project.git
cd your-gallery-project

# 2. Install dependencies
npm install

# 3. Prepare your images (resize + watermark)
node batchImagePrep.js

# 4. Generate metadata for gallery display
node generateMediaJson.js

# 5. Start local development server
npm run dev
```

---

## ⚙️ Script Descriptions

### 🖼 `batchImagePrep.js`

**Function**:  
Processes all images inside the `/input/<category>/` folders (e.g., `input/homepage/`, `input/nature/`) and outputs watermarked, resized versions to `public/images/<category>/`.

**Usage**:
```bash
node batchImagePrep.js
```

### 📄 `generateMediaJson.js`

**Function**:  
Scans all image files under `public/images/` and auto-generates a `media.json` file, used by the site to dynamically render image content.

**Usage**:
```bash
node generateMediaJson.js
```

**Tip**: Run this every time you add or remove image files.

---

## 🧩 Features

- 🖼 Standard image display with zoom-on-hover effect
- 🧭 Subpage support (e.g., Nature, Urban, Events)
- 🧊 Tailwind CSS layout + responsiveness
- 🔐 Right-click and download protection
- 🔄 Batch image resizing + watermarking
- 🧠 Auto metadata generation with JSON
- 🌍 Ready for global deployment via Netlify

---

## 🌐 Deployment Instructions (Netlify)

After pushing to GitHub, connect your repo to [Netlify](https://netlify.com) and configure:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist/`

---

## 📝 License

All photos and videos on this site are © ZoeChow9005.  
Reproduction or use without permission is strictly prohibited.

---

## 🙋‍♀️ Credits

Created and maintained by [Zoe Chow](https://github.com/Zzzzz-yet), with the help of Astro, Tailwind CSS, and open-source tooling.