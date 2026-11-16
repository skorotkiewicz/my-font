# Handwritten-ish

A tiny, fully offline playground for your own handwriting font.

1. Put your `MyHand-Regular.woff2` file **next to `index.html`**.
2. Open `index.html` in Firefox or another browser.
3. Type silly things with your handwriting.

Alternatively, use **Load my font** or drag a `.woff2` or `.woff` font file onto the notebook to test it without copying it into the folder. The selected font is temporary and stays local to your browser session.

Files:

- `index.html` — interface
- `styles.css` — styling, paper and handwriting font
- `script.js` — typing tools, font loading and jokes
- `MyHand-Regular.woff2` — **your file**; not included in the download

No build step, npm, CDN, server, network calls, or dependencies needed. Saving as `.txt` saves the text only, not the handwritten appearance.
