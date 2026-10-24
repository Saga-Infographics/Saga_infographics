# Blog workflow

Posts are markdown files in `src/content/blog/<slug>.md`. Pushing a new file to the deploy branch publishes it.
The file name becomes the URL (`/blog/<slug>`), and the post is added to the sitemap automatically.

```
---
title: Post title (aim for under 60 characters)
description: One or two sentences for search results (under 160 characters)
date: 2026-10-24
tags: tag one, tag two
---

Body in markdown. Start with an intro, then `##` sections. Link to a service page where it fits,
for example [YouTube Shorts editing](/services/youtube-shorts).
```

Rules for posts:
- Write original text. Use sources for facts only, and link them.
- Report only what the sources say. Flag anything unverified.
- Do not invent statistics, client results or quotes.
- One post per topic. Check existing files in `src/content/blog/` before writing.
- A post dated in the future stays hidden until its date and the next deploy.
