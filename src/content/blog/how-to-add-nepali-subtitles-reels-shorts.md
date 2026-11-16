---
title: How to Add Nepali Subtitles to Reels and Shorts
description: Nepali may be missing from auto-caption lists, and Devanagari can break in some editors. Check the language list, test the text, then burn in captions.
date: 2026-11-16
tags: captions, Nepali, Devanagari, Instagram Reels, YouTube Shorts, TikTok, video editing
---

To add Nepali subtitles to a Reel or Short, first check whether your app's auto-captions offer Nepali. As of November 2026, we could not confirm Nepali on the auto-caption list for Instagram, CapCut or YouTube, so you may need to type or correct the captions yourself. Then check that the Devanagari text renders correctly in your editor and on a phone. If the editor or platform breaks the script, the most reliable fallback is to burn the captions into the video.

This post covers the Nepali-specific problems. For general caption setup on each platform, see our [guide to captions for short-form video](/blog/how-to-add-captions-to-short-form-videos).

## Step 1: Check the auto-caption language list

Do not assume Nepali is supported. Instagram's auto-captions launched in 2022 with [17 languages, according to news coverage](https://www.neowin.net/news/instagram-now-offers-auto-generated-captions-to-videos-17-languages-supported-at-launch/). A later third-party list of Edits bilingual caption languages [does not include Nepali](https://mobilemasr.com/en/blogs/instagram-edits-adds-support-for-bilingual-captions-and-new-templates), though that list may be incomplete. Meta's [November 2025 update](https://about.fb.com/news/2025/11/instagram-empowers-creators-to-go-global-with-local-voice-translations-and-fonts/) added Devanagari fonts to Edits for several Indian languages. The coverage we saw names Hindi, Marathi and Bengali, not Nepali, and it says the change started on Android.

For CapCut, one third-party tool page says its auto-captions [do not reliably support Nepali](https://caption-x.com/capcut-captions/nepali). That page sells its own caption product, so treat it as one vendor's view. We found no official YouTube list confirming Nepali auto-captions either.

The only reliable check is the language picker in your own app, on your own device. Take a screenshot of the list when you check, because menus change.

## Step 2: Test whether Devanagari renders

Nepali is written in Devanagari, the same script as Hindi. The script alone does not tell software which language it is, which is why [our screen-reader guide](/blog/how-to-set-nepali-language-for-screen-readers) tags the two languages differently on web pages. For video, the practical issue is different: some editors break Devanagari letters after they are typed or pasted, and most of the reports we found are about Hindi.

The problems people describe include:

- **Conjuncts breaking apart.** Premiere Pro users report that Devanagari compound letters look correct in the text panel but separate in the program monitor. A reply in [a September 2025 Adobe community thread](https://community.adobe.com/t5/premiere-pro-bugs/hindi-devanagari-font-ligature-issue-broken-syllables-not-connecting-problem-help/idc-p/15495347) says the team could confirm that zero-width joiner characters in pasted text cause the problem. We could only read this in a search summary, we could not confirm who wrote the reply, and another participant said typing the text gave the same result.
- **Wrong character order.** A [KDE bug report](https://bugs.kde.org/show_bug.cgi?id=504129) describes Hindi SRT subtitles where a word such as कोशिश (try) displayed with its letters out of order. The same file rendered correctly in Shotcut, DaVinci Resolve and Premiere Pro. The summary we read said the report was still waiting for more information.

These are reports from other editors and users, not a list of confirmed bugs in the version you use. Run your own test:

1. Make a 10-second test clip with one line of Nepali text. Include a word with a conjunct, such as कोशिश.
2. Type the line in one text layer and paste it in another. Compare them.
3. Switch to a different font with Devanagari support and compare again.
4. Export the clip and watch it on a phone. Device fonts differ, so the text may look different on another phone.
5. In Premiere Pro, forum users report that setting the text engine to South Asian in the title or caption styling sometimes fixes the display. A [2021 Adobe forum thread about Hindi subtitles](https://community.adobe.com/t5/premiere-pro-discussions/premiere-pro-2021-update-hindi-subtitles-no-longer-working/m-p/12355816) is one place this appears, but it is a user's report, not an official fix.

Some users also suggest pasting through a plain text editor first to strip hidden formatting. That is untested. A plain text editor does not show zero-width joiners either, so this is a guess to test, not a fix to trust.

## Step 3: Burn in the captions if the text still breaks

If the editor or the platform keeps breaking the script, export the subtitles as image or graphic layers and place them on the timeline. The KDE report's reporter said pre-rendered image subtitles worked as a temporary workaround. A KDE forum user also said they moved Devanagari subtitles to [Subtitle Edit or Aegisub](https://discuss.kde.org/t/kdenlive-subtitles-not-rendering-unicode-fonts-properly-on-final-output/45170). That is one user's experience.

Each method has a trade-off:

| Method | Works when | Watch out for |
| --- | --- | --- |
| Platform auto-captions | Nepali is in the language list you can see on your device | Nepali support is unconfirmed; output may need manual fixes |
| Typed text layers | Your test clip renders correctly on the phone | Pasted text can carry hidden characters; retest after each change |
| Burned-in image captions | The editor or platform breaks the script | Captions are not editable or searchable later; each fix needs a re-export |

If you use auto-captions, proofread every line. Automatic transcription can also struggle with names, brand terms and speech that switches between Nepali and English, which is common in Nepal. That is our own observation, not a measured result.

## When to ask for help

Nepali subtitles take a few extra checks that generic caption guides skip. A short test clip on each device you care about will tell you more than any list. If you want the captions designed and timed for each frame, our [video editing](/services/video-edits) and [Instagram Reels](/services/instagram-reels) pages describe our short-form work, and you can [contact us](/contact) with the platform, the language mix and a sample clip. We can then talk through which of the three methods fits your video.
