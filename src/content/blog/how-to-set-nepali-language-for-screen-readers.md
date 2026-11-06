---
title: How to Set Nepali Language for Screen Readers (lang=ne)
description: Set lang="ne" on Nepali pages so screen readers pronounce Devanagari text correctly. Covers WCAG 3.1.2, mixed-language pages, Hindi mix-ups and testing.
date: 2026-11-06
tags: accessibility, Nepali, web development, HTML, screen readers
---

To make a Nepali page read correctly in a screen reader, declare the language in the markup: `<html lang="ne">`. If only some passages are in Nepali, put `lang="ne"` on the element that wraps them. The attribute tells a screen reader which pronunciation rules to use. Without it, the reader falls back to its default language, and Nepali text can come out sounding wrong or hard to follow. [MDN's `lang` reference](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/lang) describes the attribute's role for screen readers.

## Why the language attribute matters

WCAG 3.1.2, "Language of Parts," is a Level AA requirement. It says the human language of each passage or phrase should be determinable by software. The [W3C's Understanding document for WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html) lists exceptions: proper names, technical terms, words of indeterminate language, and words that have become part of the surrounding language. In practice, a Nepali name inside an English sentence does not need its own tag. A Nepali paragraph does.

MDN describes the value as a single [BCP 47](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/lang) language tag. An element with no `lang` inherits the value from its parent, and an empty value marks the language as unknown. MDN recommends always giving an appropriate value.

## Step 1: Set the page language

Start with the root element:

```html
<!doctype html>
<html lang="ne">
  <head>
    <meta charset="utf-8">
    <title>...</title>
  </head>
  ...
```

`ne` is the two-letter code for Nepali. An [Ohio State University Devanagari test page](https://u.osu.edu/drupaltraining/?p=271) uses the same code for its Nepali paragraph. We did not check whether a regional tag such as `ne-NP` changes anything for screen readers. The examples we found all use plain `ne`.

## Step 2: Mark mixed-language passages

Most real pages mix languages. Use the element that wraps the text in the other language:

| Page content | Markup |
|---|---|
| Entire page in Nepali | `<html lang="ne">` |
| English page with one Nepali paragraph | `<p lang="ne">...</p>` |
| Nepali phrase inside an English sentence | `<span lang="ne">...</span>` |
| Hindi passage on a Nepali page | `<p lang="hi">...</p>` |
| Nepali name in English text | No tag needed (proper name exception) |

Devanagari is a script shared by several languages, and the script alone does not identify the language. The OSU [screen reader training page](https://u.osu.edu/drupaltraining/category/accessibility-2/screen-readers) marks Nepali as `lang="ne"` and Hindi as `lang="hi"`. It also notes that Garhwali, which uses Devanagari, has no ISO 639 code and is tagged as Hindi. For a Nepali page, the rule is simple: do not tag Nepali text as `hi` because the letters look alike.

## Step 3: Check the labels, not just the paragraphs

Screen readers read more than body text. Buttons, form fields and image descriptions also need the right language. An [August 2025 arXiv paper on the LangCrUX dataset](https://web3.arxiv.org/pdf/2508.18328) reports that many sites give their accessibility text in English or as placeholder wording, and it cites Nepali as an example of that mismatch. We could only read a search excerpt of that paper, so treat its findings as a pointer rather than a measurement.

For a Nepali-speaking audience, write the button labels, form labels and image alt text in Nepali as well. Otherwise a visitor hears English labels between Nepali paragraphs, and the page sounds like two sites.

## Step 4: Test the markup and the speech

Use three checks, because each catches a different problem:

1. **Automated validation.** The axe `valid-lang` rule checks that a `lang` value is valid, and it maps to WCAG 3.1.2 ([Deque's rule page](https://dequeuniversity.com/rules/axe/4.9/valid-lang)). It confirms the tag is valid. It cannot tell you whether the language is correct.
2. **Listen to it.** NVDA is an open source screen reader for Windows. Open the page, move through the Nepali paragraph and listen to the pronunciation. The OSU pages are useful test material here.
3. **Check the voice.** The OSU screen reader page suggests a more multilingual synthesizer such as eSpeak NG for non-Latin languages. One search summary also said eSpeak NG has a Nepali voice in NVDA's speech settings. We could not confirm that as of November 2026. Open NVDA's speech settings and look at the voice list on your own machine. If no Nepali voice is there, your markup can still be correct, but the pronunciation may be poor, and markup cannot fix that. Testing with a Nepali-speaking screen reader user, if you can reach one, is the only sure check.

## Common mistakes

- Using a word such as `english` in place of a language code.
- Leaving `lang` off the `<html>` element, so the default language is used.
- On a bilingual page, tagging only one of the two language blocks.
- Tagging Nepali text as `hi`.
- Writing alt text and button labels in English on a page that is otherwise in Nepali.

## Where this fits

Our earlier post on [Nepali fonts that do not show](/blog/nepali-font-not-showing-on-website) covers how Nepali text is displayed. This post covers how it is spoken. A Nepali page needs both: text and fonts that render on screen, and a correct language in the markup.

If you are planning a Nepali-language website, our [web development service](/services/web-development) covers site builds. [Get in touch](/contact) to talk through your requirements, including how the Nepali text, labels and language markup should be set up.
