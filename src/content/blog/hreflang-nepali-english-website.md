---
title: Hreflang for a Nepali and English Website: Setup Guide
description: Set hreflang for a Nepali and English site: use ne, not np, pair each page with its translation, and avoid reciprocal-link and canonical mistakes.
date: 2026-11-14
tags: hreflang, Nepali SEO, multilingual website, international SEO, web development
---

To tell Google about a Nepali and English site, give each translated page its own URL, then add the same set of `hreflang` links to every version of the page. Use `ne` for Nepali and `en` for English, not `np`, which is Nepal's country code. Google's own guidance says the attribute names a language, with an optional region, so the language code is the one that matters ([Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)).

## Why a translation needs explicit pairing

Google treats a translated page as a separate page, so it does not know that `/ne/services/` and `/en/services/` say the same thing. Hreflang annotations tell Google which version to show to which reader. Google documents three ways to send these annotations: a link tag in the page head, an HTTP header, or an XML sitemap. It says the three are equivalent, so pick one and use it across the whole site ([Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)).

The page-head method keeps each set next to the page it describes, which suits a small site. One guide suggests the sitemap for large sites with thousands of localized URLs, since it avoids repeating the tags on every page ([Propellic on moving hreflang to XML sitemaps](https://www.propellic.com/blog/scaling-hreflang-moving-international-seo-markup-from-html-to-xml-sitemaps)).

## Use language codes, not country codes

Hreflang values follow ISO 639-1 for the language and ISO 3166-1 alpha-2 for the optional region. Nepali is `ne` in ISO 639-1, and `ne-NP` adds Nepal as the region ([Localizely: ne](https://localizely.com/language-code/ne/)). Nepal's country code is `NP`, which is why `np` is the wrong value.

| You want to target | Value | When to use it |
| --- | --- | --- |
| Nepali, any region | `ne` | Default for a Nepali page |
| Nepali for readers in Nepal | `ne-NP` | Only when the content is written for Nepal |
| English, any region | `en` | Default for the English page |
| Fallback for everyone else | `x-default` | Optional; used for a language selector or a default page |

Folder names are your choice. At least one Nepal-focused guide suggests a `/np/` folder for Nepali pages. The folder name does not affect the hreflang value, so `/ne/` with `hreflang="ne"` keeps the code consistent with the standard. Keep one folder pattern across the whole site.

## Write the same set on every version

On the English page, the head would look like this. Replace `example.com` with your domain.

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/services/" />
<link rel="alternate" hreflang="ne" href="https://example.com/ne/services/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/services/" />
```

The Nepali page carries the same three lines, with the same URLs. Each page should also list itself. Guides agree that every version links to the full set, including itself ([ConveyThis](https://www.conveythis.com/blog/hreflang-tags-the-complete-2026-guide); [LinkGraph implementation guide](https://linkgraph.com/blog/hreflang-implementation-guide/)).

Use `x-default` with care. Commentary on Google's page describes it as the value for when no listed language matches the reader, and says it suits a language selector page. One guide cautions that it is not a default for English, so check Google's page before you pick one.

## The mistakes that break the pairs

**One-way links.** If the English page points to the Nepali page but the Nepali page does not point back, the pair is not reciprocal. Guides say Google may ignore an annotation that is not reciprocal, so audit both directions.

**Missing self-reference.** Every page should include its own hreflang line. Audit checklists list a missing self-reference among the common errors.

**Canonicals that point across languages.** Keep each page's canonical tag on its own language version, so it matches the hreflang set. One vendor reports a March 2026 canonical update that we could not check, so this post does not rely on it.

**Translations that do not exist.** A Nepali section with three pages under twenty English pages is a common setup. Do not annotate a Nepali page that has no real translation. Send readers to the English page instead, and leave that page out of the Nepali set.

**Noindex pages in the set.** A page marked noindex should not appear in an hreflang cluster, because it cannot be shown in search.

## How to check the setup

1. View the page source on each language version and confirm the same set appears in both.
2. Confirm the self-reference line is there and each URL resolves.
3. Use the URL Inspection tool in Google Search Console on each language URL to see which version Google indexed.
4. Search for the page in both languages from a browser where you are signed out, and check whether the right version appears.

A status such as "Google chose a different canonical" does not always mean hreflang failed. One article argues that the real test is whether the right version reaches the right reader in results, not whether a report looks clean ([Relevant Audience on hreflang URLs in Google](https://www.relevantaudience.com/seo/google-hreflang-urls-not-indexed-alternate-names/)).

## Nepali search is mixed, so plan the pages around it

Hreflang tells Google which language version to show. It does not decide which words a reader types. Nepali queries often mix Devanagari, Roman Nepali and English, so the Nepali page needs its own keyword research. Our [earlier guide to Nepali keyword research](/blog/nepali-keyword-research-for-nepal-website) covers how to build that list. If the Nepali text does not display, check the [Nepali font guide](/blog/nepali-font-not-showing-on-website), and for screen readers, set the language with `lang="ne"` as described in [the screen reader guide](/blog/how-to-set-nepali-language-for-screen-readers).

## Where Saga fits

Hreflang is a small part of a bilingual site, but a wrong setup can leave a Nepali page out of search. Saga Infographics builds websites, and you can see the service on the [web development page](/services/web-development). If you want the tags on an existing site checked, [contact Saga](/contact) with the URLs of a page in each language.
