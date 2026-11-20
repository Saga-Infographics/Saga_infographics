---
title: PWA Push Notifications on iPhone in 2026: What Works
description: PWA push on iPhone works only for web apps added to the Home Screen. What changed in iOS 16.4, 18.4 and 26, and how to test it.
date: 2026-11-20
tags: PWA, iOS, push notifications, web apps, web development
---

Yes, a progressive web app (PWA) can send push notifications to an iPhone, but only when the site has been added to the Home Screen and the phone runs iOS or iPadOS 16.4 or later. A site open in a normal Safari tab does not get web push. Apple's own engineers have said this in its developer forums, and the rules have changed in each major iOS release since, so the version matters as much as the setup.

## What changed, by iOS version

| Version | Year | What changed | Where we read it |
|---|---|---|---|
| iOS and iPadOS 16.4 | 2023 | Web Push for Home Screen web apps, enabled by default. Not supported inside Safari on iOS. | [Apple engineer's reply, Apple Developer Forums, July 2023](https://developer.apple.com/forums/thread/732594) |
| iOS and iPadOS 18.4 | 2025 | Declarative Web Push for Home Screen web apps. Secondary coverage says it does not need a service worker. | [WebKit announcement](https://webkit.org/?p=16535), read as a search excerpt |
| iOS and iPadOS 26 | 2025 | Any site added to the Home Screen from Safari opens as a web app by default, whether or not it was built as one. An "Open as Web App" toggle turns this off. | [heise.de](https://heise.de/-10749652) and [iDownloadBlog](https://www.idownloadblog.com/?p=1042117), read as search excerpts |

The 16.4 change is the one that matters most for push. The 18.4 and 26 changes are newer, and we could not open the WebKit page or Apple's full documentation from our session, so treat their details as secondary until you check the original.

## Why a Safari tab gets nothing

In a 2023 thread, a developer found that web push worked on other devices, including a MacBook, but not on an iPhone running iOS 16.5.1. They found an experimental Safari setting and asked whether they had to wait for Apple. The Apple engineer replied that web push works in Home Screen web apps from 16.4 and is on by default. The experimental settings only affect Safari, so they do not control push for an installed app.

The same thread shows a trap. The developer's feature checks for push support returned false in Safari, and still returned false after the site was installed with a manifest. Nobody in the thread solved that. Our practical takeaway is that a feature check run in a browser tab cannot tell you whether the installed app will get push. Test on the installed app, not in Safari.

## Wrapped apps are where teams get stuck

A 2025 thread shows the usual failure. A developer packaged a React PWA with PWA Builder, and push worked on Android through Firebase Cloud Messaging but not on iOS. Capacitor pointed at the hosted site (`server.url`) did not work, while a local build inside the native shell did.

Apple's engineer said Apple does not help with building PWAs or sending their push through third-party tools. They also said push works once the user grants permission and the app is on the Home Screen, and that if "embedding" meant adding the app to the Home Screen, that explains the failure. The reply does not say that a local build is the only approved route, and it does not endorse any push plugin. The lesson is narrower: a wrapper does not replace the Home Screen install.

## A test plan for an iPhone

Use this order to find out whether your PWA push works, and where it fails:

1. **Serve the site over HTTPS** and confirm the manifest and service worker load in a desktop browser.
2. **Install it to the Home Screen** on an iPhone running iOS or iPadOS 16.4 or later. Use a real device, not a simulator.
3. **Open it from the icon**, not from Safari. Subscribe and accept the permission prompt.
4. **Send a test push from your server** while the app is closed. Confirm the notification arrives.
5. **Open the same site in a Safari tab** and check that it shows no subscription. Decide what that visitor sees, such as a short "Add to Home Screen" instruction.
6. **Repeat with the iOS 26 toggle** on and off, and note how each Home Screen icon opens. We did not verify whether a bookmark-style icon can receive push, so check this on your own device.

Keep a log of the iOS version and the Home Screen state for each test. In the two threads we read in full, the failures came down to these two causes: a Safari tab instead of the installed app, and a wrapper that was not installed to the Home Screen.

## What we could not confirm

We could not open Apple's full web push documentation, the WebKit posts or MDN from this session, so the version details rest on Apple forum replies and news and search excerpts. The forum replies are the most reliable part. We did not find any Nepal-specific data on iPhone or PWA use, and this post does not cover Android. We left out claims about a European exception and about iOS 27 because we could not confirm them.

## Where Saga fits

If you are deciding between an installable web app and a native app, the first question is whether your users need push, offline use or App Store discovery. Saga's [web development service](/services/web-development) covers React and Next.js websites and custom web applications. If you want a web app that installs on iPhone and needs notifications, [contact us](/contact) and ask about push and testing on a real device as part of the scope.
