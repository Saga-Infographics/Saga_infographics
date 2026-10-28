---
title: Android Developer Verification 2026: What to Know
description: Google's Android developer verification starts September 30, 2026 in four countries. See who must register, which account to pick and what is still unclear.
date: 2026-10-28
tags: Android, developer verification, app development, sideloading, Google Play
---

Android developer verification is Google's requirement that developers who distribute Android apps confirm their identity and register their apps. Protections for users begin on September 30, 2026, in Brazil, Indonesia, Singapore and Thailand, and Google says it will expand the requirement to all apps on certified Android devices in 2027. If you publish only through Google Play, Google says most of the registration is handled for you. If you distribute outside Google Play, you need to register through a developer console.

This post walks through the timeline, the two account types and the parts Google has not yet explained, based on Google's own developer pages and news coverage from 2026.

## The timeline

Google's [developer verification guide](https://developer.android.com/developer-verification/guides) lists these milestones:

| When | What happens |
|---|---|
| June 2026 | System service rollout and limited distribution early access |
| July 2026 | Status API launch, Console API and limited distribution early access |
| August 2026 | Global Console API, limited distribution accounts and the advanced flow |
| September 30, 2026 | Protections begin in Brazil, Indonesia, Singapore and Thailand |
| 2027 | Global rollout for all apps on certified Android devices |

Today is October 2026, so the earlier milestones are already scheduled to have passed. I did not find any published reporting on how the September 30 rollout went, so check Google's pages for updates before you plan around the dates.

## Play Console or Android Developer Console

Google's [developer verification page](https://developer.android.com/developer-verification) describes two paths. The Google Play Console is for developers who distribute on Google Play and outside it. Google says Play automatically registers 99% of apps, and the Play Console can be used to register the rest. The Android Developer Console is for developers who distribute apps only outside Google Play.

If you already ship through Play, start by opening the Play Console and checking whether your apps show as registered. Most teams will not need to do anything else for those apps.

## Full or limited distribution

Within the console, there are two account types:

| | Full distribution | Limited distribution |
|---|---|---|
| Who it is for | Organizations and professional developers with wide distribution | Students, teachers and hobbyists |
| Identity verification | Required | Not required |
| Where you can distribute | Any app store or channel, such as your own website | Up to 20 devices |
| What users see | Nothing changes from today | Install after accepting an invitation from a developer they know |

Google's guide says limited distribution lets people share apps with up to 20 devices "without a government-issued ID or registration fee." Google's pages do not list a fee for full distribution. A third-party checklist reports a one-time $25 fee, but I could not confirm that figure on Google's own pages, so check the console before you budget for it.

## What you need ready for full distribution

Full distribution is the path for a business that wants to publish outside Play. Prepare these before you start:

- **Identity documents.** Google asks individuals and organizations to provide information and documents that confirm who they are.
- **A verified website for organizations.** The guide says an organization must provide its website, and Google verifies it through [Google Search Console](https://search.google.com/search-console). Set this up early so it does not hold up your application.
- **Proof of app ownership.** You link an app to your developer account by providing an APK signed with your private key. Protect that signing key, since it is what ties every future update to your account.

## Sideloading still works, with a delay

Google's guide says apps can still be sideloaded, and the ADB workflow does not change. For apps from unregistered developers, the advanced flow adds friction. Reporting from [9to5Google](https://9to5google.com/2026/03/19/android-advanced-flow-sideloading/) and [The Hacker News](https://thehackernews.com/2026/03/google-adds-24-hour-wait-for-unverified.html) describes the steps as turning on Developer mode, confirming that no one is coaching you through the install, restarting and re-authenticating, and then waiting a day. The install prompt still warns that the app comes from an unverified developer, and the flow does not apply to installs through ADB.

For a user, that means an extra set of steps and a warning. Google's table says full distribution keeps today's install experience, so for a developer the practical difference between a registered and an unregistered app is that the first one avoids the advanced flow.

## Which stores are covered

Google's guide lists the stores covered in the four launch countries: Google Play, HONOR, OPPO, Samsung Galaxy Store, Transsion's Palm Store, vivo, and Xiaomi GetApps. Google says it will expand verification to all third-party Android app stores later. Stores not on this list are not covered yet, so check the store's own developer documentation if you publish there.

## What is still unclear

Some questions remain open in the sources I checked:

- **Fees.** Google's pages do not state a fee for full distribution. The $25 figure comes from a third-party checklist.
- **Real-world effects after September 30.** I found no post-enforcement reporting from October 2026.
- **The advanced flow in detail.** Google's guide links to a blog post for details but does not describe its limits in full.
- **Nepal.** Nepal is not among the four launch countries, and Google's page gives only 2027 for the global rollout. No Nepal-specific date appears in the sources.

## A simple plan for a small team

1. Open the Play Console and check whether your existing apps are registered.
2. If you distribute outside Play, decide whether you need full distribution, and start the website verification in Search Console.
3. Keep your signing key safe and keep a record of which APKs you publish and where.
4. If you give testers APKs, decide whether limited distribution fits, since it covers up to 20 devices.
5. Check Google's developer verification pages again before the 2027 rollout, because the details may change.

This is a summary of Google's public guidance, not legal advice. If registration involves company documents or contracts, speak with a qualified adviser.

Saga's listed services are short-form video editing, motion graphics, content creation, and web development. We build React and Next.js websites and custom web applications through our [web development service](/services/web-development). We do not list native Android app development or app store submission as services, so for store registration itself, follow Google's documentation or work with your app developer. If you are weighing a web app against a native app for your product, [contact us](/contact) and we can talk through what you need.
