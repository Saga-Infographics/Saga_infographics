---
title: Nepali Font Not Showing on a Website? Causes and Fixes
description: Nepali text turns into gibberish when it is typed in Preeti, not Unicode. Here is how to check, convert and load a Devanagari font quickly.
date: 2026-10-25
tags: Nepali font, Unicode, Devanagari, web development, web fonts
---

If Nepali text on your website shows as random Latin letters, empty boxes or nothing at all, the likely cause is that the text was saved in a legacy font such as Preeti rather than in Unicode. Converting that text to Unicode and serving a Devanagari font the browser can use fixes most cases. The part many guides skip is loading that font without making every page heavier.

## Why Preeti text breaks on the web

Preeti-style fonts map ordinary keyboard keys to Nepali shapes. The word नेपाल, for example, is stored as `g]kfn`, and it only looks Nepali when the Preeti font is installed. A visitor, a search engine or a browser without that font sees the keyboard letters. [Setopati's Unicode converter](https://en.setopati.com/unicode-converter) notes that Preeti text cannot be used on the internet without a Unicode Nepali font.

Installing the font on the server does not solve it. One [Adobe Community thread](https://community.adobe.com/t5/illustrator-discussions/nepali-font-not-showing-when-copy-pasted-in-illustrator/m-p/15040595) describes installing Preeti and still getting broken text after copying Nepali into Illustrator. That is the same underlying problem: the stored characters are wrong, so no font can fix them on its own.

## Step 1: Check what your text actually contains

Copy a Nepali sentence from the page into a plain text editor. If it shows letters like `g]kfn`, the text is Preeti. Real Unicode Devanagari characters sit in the U+0900 to U+097F block, so नेपाल is stored as five code points:

| What you see | What is stored | Status |
|---|---|---|
| नेपाल | `g]kfn` (Preeti) | Needs conversion |
| नेपाल | न, े, प, ा, ल (U+0928, U+0947, U+092A, U+093E, U+0932) | Correct Unicode |

Convert before you publish, and only convert the Nepali runs. A converter can mangle English words in the same field, so read the output and keep the original file as a backup. A [WebSNP guide to Nepali Unicode on websites](https://www.websnp.com/help/nepali-unicode-fonts-website-typography) covers the same content-first approach.

## Step 2: Serve a Unicode Devanagari font

[Noto Sans Devanagari](https://fontsource.org/fonts/noto-sans-devanagari/cdn) is a free Unicode font. Fontsource packages it as a separate devanagari subset, alongside latin and latin-ext subsets. Splitting a font by script means a browser needs the Devanagari file only when a page contains Devanagari characters. In CSS, `unicode-range` tells the browser which characters a file covers:

```css
@font-face {
  font-family: "Noto Sans Devanagari";
  src: url("/fonts/noto-sans-devanagari-400.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
  unicode-range: U+0900-097F, U+200C-200D, U+20B9;
}
```

Use the range from the subset file you actually serve, not from a snippet you copied. `font-display: swap` shows fallback text straight away, so the page does not sit blank while the font loads.

## Step 3: Measure the weight

Devanagari font files can be large. A [web font performance guide from a vendor](https://www.websnp.com/help/web-fonts-performance-website-speed) estimates they run two to four times heavier than Latin fonts, but it gives no source, so treat that as a rough guess. A more concrete number comes from a [Cobalt project's Noto Sans Devanagari UI Regular WOFF2](https://cobalt.googlesource.com/cobalt/+/f585e2638bbd137762988742fc2cbe613293dc58/src/cobalt/content/fonts/font_files/NotoSansDevanagariUI-Regular.woff2), which is about 41 KB. That is one project's file, not an official figure, but it shows that each weight adds real bytes.

Some practical checks:

- Load only the weights you use. Body text and headings often need two.
- In your browser's developer tools, open the Network tab, filter by Font, and confirm that English-only pages do not download the Devanagari file.
- Throttle the connection and reload. If text flashes or stays invisible, check your `font-display` setting.

## Step 4: Check the result

After converting, search the page for a Nepali word with your browser's find tool. Check the page title and meta description too, since those are often the first Nepali text search engines read. Keep in mind that a converter only fixes text it can read. Nepali text inside images or old PDFs does not change, and it needs retyping or OCR.

## What this guide does not cover

Most of the advice here comes from converter pages, forum threads and vendor help pages, and I could not open several of the pages I looked at while writing it. Font sizes come from a single project, so measure the files you serve. Check any tool's current behavior before you rely on it.

If your Nepali pages still break after conversion, the cause can sit in the content, the font or the loading setup, and each needs a different fix. Saga builds websites as part of its [web and app development](/services/web-development) work. If you want a second look at a site, start with the [contact page](/contact) and mention the pages that show the problem.
