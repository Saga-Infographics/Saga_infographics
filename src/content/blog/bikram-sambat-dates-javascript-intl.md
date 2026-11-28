---
title: Bikram Sambat Dates in JavaScript: What Intl Supports
description: The Intl API has no Bikram Sambat calendar. Our Node and Chromium tests show what it can format, and how to add BS dates to a site.
date: 2026-11-28
tags: JavaScript, web development, localization, Nepal, dates
---

The built-in `Intl` API in JavaScript cannot show Bikram Sambat (BS) dates. Neither the Node build nor the Chromium build we tested lists a Nepali or Bikram Sambat calendar, so a Nepali-language site needs a conversion table or a small library to show BS dates. `Intl` can still format Nepali digits, but the result depends on the browser's locale data.

## What we tested

On 28 November 2026 we ran the same `Intl` checks in two places: Node 22 (ICU 78.3) and headless Chromium 158, the build installed in our sandbox. Both returned the same 18 supported calendar values, and neither includes a Nepali or Bikram Sambat calendar.

| Check | Node 22 (ICU 78.3) | Chromium 158 (sandbox) |
|---|---|---|
| `ne-NP` number, 1234567.5 | १२,३४,५६७.५ | 1,234,567.5 |
| `en-IN` number, 1234567.5 | 12,34,567.5 | 12,34,567.5 |
| `ne-NP` full date, 28 Nov 2026 | २०२६ नोभेम्बर २८, शनिबार | Saturday, November 28, 2026 |
| `ne-NP-u-ca-nepali` requested | Gregorian year shown | Gregorian shown |

Three things stand out.

- **Requesting the Nepali calendar falls back to Gregorian.** The browser does not error. It quietly shows the Gregorian date, so a page can look correct while showing the wrong calendar.
- **The Indian calendar is not a substitute.** Under the `ne-NP` locale, Node printed the Saka year (साक १९४८) when asked for `ne-NP-u-ca-indian`. Saka is India's national calendar, not BS. Chromium printed a Gregorian date for the same request, so the two builds disagree.
- **Nepali locale data varies by build.** Node printed Devanagari digits and Nepali month names. The sandbox's Chromium printed Western digits and English text for `ne-NP`. We cannot say what a visitor's phone will show, so the only safe approach is to test on real devices.

## Pick a conversion method

Because `Intl` cannot produce BS dates, you need a conversion step. The [medic/bikram-sambat](https://github.com/medic/bikram-sambat) repository is a JavaScript and Java utility that converts between BS and Gregorian dates in both directions. Its README gives a worked example: `toBik_euro('2017-03-28')` returns `2073-12-15`. It also refers to a days-in-month data file, because BS month lengths are not a fixed pattern from year to year. The README does not state a supported year range, so check that yourself before you rely on it.

Other npm packages exist, and their claimed ranges differ. One search result listed a package covering 1975 to 2099 BS, but we could not open its README, so we make no claim about it here. Read each package's data source and tests, and run your own known dates through it.

## A checklist for a Nepali site

1. **Test the range you need.** Convert a set of known dates both ways. Include the first and last day of a month and the first and last day of a year, because those are where off-by-one errors show up.
2. **Store dates in Gregorian form and convert only for display.** Keeping one canonical format in your database makes sorting, booking logic and time zone handling simpler. This is a common pattern, not a rule from a source.
3. **Decide where conversion runs.** If the page is rendered on the server, convert there. Then visitors with different browser locale data see the same BS date. If the conversion runs in the browser, the result depends on that browser's data and library version.
4. **Check digits and month names on a phone with the Nepali language set.** Compare at least two browsers. The sandbox results above show why a desktop check alone is not enough.
5. **Keep your test dates in the repository.** When the library updates, rerun the same dates. A changed result is an early warning.

## What this test does not cover

We ran the checks in one sandbox with two builds. We did not test Safari, Firefox or Android WebView. The statements about the calendar come from the `Intl` output and the repository README, not from the official specification or a calendar reference, because the documentation sites we tried were unreachable from this session.

If your Nepali site needs date handling, bilingual pages or a booking form, Saga Infographics builds websites, and you can [ask us about your project](/contact). Send the languages you need and the dates your visitors will see, and we can scope the work from there.
