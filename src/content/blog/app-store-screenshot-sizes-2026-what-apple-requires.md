---
title: App Store screenshot sizes 2026: what Apple requires
description: Apple's App Store Connect page now requires a medium Dynamic Island iPhone set. Sizes, the iPhone Duo rule from April 2027, and why vendor charts disagree.
date: 2026-11-27
tags: App Store, App Store Connect, iOS development, app screenshots, app development
---

As of late November 2026, Apple's App Store Connect Help page requires at least one iPhone screenshot set for the medium Dynamic Island display, which is 1179 × 2556 or 1206 × 2622 pixels in portrait. If your app supports iPadOS, it also needs at least one screenshot for the 13-inch iPad display. Screenshots cannot contain transparency or an alpha channel. Apple also says iPhone Duo screenshots become mandatory from April 2027 for apps built with the iOS 27.1 SDK or later.

Many size guides still start from 1320 × 2868 pixels, the 6.9-inch size. That size is on Apple's list, but as a large-display option rather than the required set. This post follows [Apple's screenshot specifications page](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications) as it read on 27 November 2026, and it marks the points we could not confirm.

## What Apple's page requires

Apple's "Required device sizes" section asks for two things:

- **iPhone:** at least one screenshot for iPhone with Dynamic Island (medium display).
- **iPad,** if your app supports iPadOS: at least one screenshot for the iPad 13-inch display.

The page also explains scaling. If your interface is consistent across device sizes and localizations, you only need screenshots for the highest required resolution, and App Store Connect scales them down for smaller devices. You can still upload separate sets for each size if you prefer.

## The sizes, by display group

Apple groups iPhones by display, not by the "6.1-inch" or "6.9-inch" labels that many vendor charts use. The table gives portrait sizes; landscape is the same pair of numbers reversed.

| Apple display group | Example models (from Apple's list) | Portrait size (px) | What Apple's page says |
|---|---|---|---|
| Dynamic Island, medium | iPhone 18 Pro, 17 Pro, 17, 16 Pro, 16, 15 Pro, 15, 14 Pro | 1179 × 2556; 1206 × 2622 | Required: at least one set |
| Dynamic Island, large | iPhone Air, 18 Pro Max, 17 Pro Max, 16 Pro Max, 16 Plus, 15 Pro Max, 15 Plus, 14 Pro Max | 1260 × 2736; 1290 × 2796; 1320 × 2868 | Accepted size; if missing, scaled Face ID (large) sets are used |
| Face ID, large | iPhone 14 Plus, 13 Pro Max, 12 Pro Max, 11 Pro Max, 11, XS Max, XR | 1284 × 2778; 1242 × 2688 | Required only if no Dynamic Island (large) set is provided |
| iPhone Duo | Outer and inner displays | 1398 × 2034 (outer); 2007 × 2853 (inner) | Mandatory from April 2027 for apps built with the iOS 27.1 SDK |

The page is harder to read than it should be. Its top section names only the medium set as required, but the Face ID (large) group has its own line saying that set is required if no Dynamic Island (large) screenshots are supplied. Read literally, that means a large-display set can also be needed. Apple's page does not settle this in one sentence, so check the live page in App Store Connect before you submit.

## Why the size charts disagree

One search for "app store screenshot sizes 2026" returned about fifteen links, mostly vendor blogs and dev.to posts. We could only read them as search excerpts, because the vendor sites would not open from this session. Two patterns stood out:

- Several guides lead with 1320 × 2868 as the most important iPhone size. One 2026 guide, seen in an excerpt, calls it the single most important number. Apple's page lists it as a large-display size, not the required one, and it lists 1179 × 2556 as an accepted size.
- Some guides describe fallbacks in terms of 6.5-inch and 6.9-inch sets. Apple's page describes them by display group, so the labels in a vendor chart may not match the groups in App Store Connect.

Apple's own page did not appear in that first set of results.

## The iPhone Duo rule and the SDK rule

Two Apple pages set the dates, and they are separate rules:

- The screenshot page says that starting in April 2027, screenshots will be required for any app built with the iOS 27.1 SDK or later. It lists the Duo sizes and says that submitting Duo screenshots gives your product page a Duo badge.
- [Apple's developer news](https://developer.apple.com/news/?id=k1mtkt1k) says that starting April 2027, iOS and iPadOS apps uploaded to App Store Connect must be built with the iOS 27 and iPadOS 27 SDK or later.

Apple gives only the month, not a day. The screenshot rule names iOS 27.1, while the upload rule names iOS 27, so do not treat them as the same requirement. We found news and vendor coverage of the Duo screenshot rule, for example [ppc.land](https://ppc.land/apple-forces-developers-to-add-iphone-duo-screenshots-from-april-2027/), but we could not open those articles, so we cite Apple's pages only.

## What to do now

1. **Make the medium set first.** Export at 1179 × 2556 or 1206 × 2622 pixels in portrait. Add landscape only if your app supports it.
2. **Remove transparency.** Apple says images cannot include alpha channels or transparency, so flatten any transparent layers before export.
3. **Decide on scaling.** If one design works at every size, Apple says the highest required resolution is enough, and App Store Connect scales it. Check how the scaled screens look before you submit.
4. **Plan Duo sets only if your build needs them.** The Duo requirement applies to apps built with the iOS 27.1 SDK or later from April 2027. Under that rule, an app built with an earlier SDK does not need them.
5. **Leave Android for later.** Google's Play Console help page would not open from this session. The third-party guides we saw disagree on aspect ratio (2:1 or 16:9) and on the minimum number of screenshots (2 or 4), so check Google's own page before you make Android sets.

## Where this fits

Screenshots are the design side of an app listing, and the sizes above are the part Apple has written down. Saga Infographics works on web and app development. The [web development service](/services/web-development) covers site builds, and if you are planning an app and want to talk through the screens and scope, you can [contact us](/contact). Store submission is not among the services listed on our site, so ask us about scope before assuming it is included.
