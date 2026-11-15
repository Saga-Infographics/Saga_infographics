---
title: Google Play Developer Account in Nepal: What to Check
description: Nepal is listed for Google Play developer registration but not merchant registration, which limits paid apps. What to check before you sign up.
date: 2026-11-15
tags: Google Play, Android development, app development, developer account, Nepal, paid apps
---

A Nepal-based developer can register a Google Play developer account, according to Google's country table. The same table lists Nepal as not supported for merchant registration, and a merchant account is what lets an app sell paid downloads or in-app purchases. In practice, a Nepal-based Play Console account may be limited to free apps. This is the position as of November 2026, and Google can change its table, so check the signup screen before you pay.

We could not open Google's support pages from the environment used for this post. The facts below come from search excerpts of those pages, so treat them as leads to confirm in Play Console rather than settled facts.

## What Google's country table shows

Google's [developer registration help page](https://support.google.com/googleplay/android-developer/answer/9306917) has a table with one row per country. The excerpts we read show these entries for Nepal:

| Item | Nepal | What it means for you |
|---|---|---|
| Developer registration | Supported | You can create a Play Console developer account and publish apps. |
| Merchant registration | Not supported | You cannot set up a merchant account to sell paid apps or in-app purchases. |
| Default currency | None listed | The table gives no default payout currency for Nepal. |

The same page says that where merchant registration is available, customers must be in a supported location to buy paid apps. Google's [paid app availability page](https://support.google.com/googleplay/answer/143779) lists Nepal among the places where users can buy paid apps, priced in US dollars. That is an older table, and we did not confirm it against a current version.

So the buyer side looks open, and the seller side does not. The table does not say this outright, but our reading is that a developer based in Nepal probably cannot be paid directly for paid apps or in-app purchases through Play. We found no current statement that Google makes an exception.

## What this means for a small team

Free apps do not depend on merchant registration, so the limit mainly affects paid downloads and in-app purchases. Subscriptions and other in-app sales are likely to fall under the same rule, but the excerpts did not say so for Nepal.

Before you build a monetization plan around Play, decide three things:

- **Is the app free?** If the plan is free with no in-app sales, the table is less likely to block you.
- **Does the revenue need Play billing?** If yes, the table is a blocker, and you need a plan that does not depend on Play sales in Nepal.
- **Who is the seller?** Decide whether a personal or organization account fits the business before you start.

## Account setup: what Google asks for

Google's [account requirements page](https://support.google.com/googleplay/android-developer/answer/13628312) lists the information needed to create a developer account. The excerpts we read describe these points:

- **Payment profile.** Signup links a Google Payments profile. Its type depends on whether you register as a personal or an organization account.
- **Identity.** The legal name and address in the profile are used to verify your developer identity, and you must verify them before you can publish.
- **Organization accounts.** Google's [account page](https://support.google.com/googleplay/android-developer/answer/10841920) says the legal name and address in the payments profile must match the organization's Dun & Bradstreet record. Check this before you start, because a mismatch can hold up an account.

The signup page shows the current registration fee. We did not confirm the amount from Google's own pages, so we have left it out.

## Before you pay

1. **Check the country table on the signup page.** Google's table is the final word for your account, and it can change.
2. **Choose personal or organization.** If you choose organization, check that the legal name and address match the Dun & Bradstreet record.
3. **Keep names consistent.** Use the same legal name on your ID, your payments profile and your Play account.
4. **Ask Google Play support first if you are unsure.** We found older reports of workarounds, such as using another country's merchant account. We could not verify them, and we would not rely on them, because they may break Google's terms.
5. **Get professional advice before you plan income from apps.** Tax, banking and payout questions depend on your situation. This post does not cover them.

## How this compares with Apple

Apple's [enrollment page](https://developer.apple.com/support/enrollment/) does not list countries, so there is no official yes or no for Nepal. Our [Apple developer account post](/blog/apple-developer-account-nepal) covers what Apple's rules say and what to check if an enrollment stalls. Google's table is more specific about Nepal, but it separates developer registration from merchant registration. That separation is the part most Nepali developers need to understand before they plan a paid app.

If you are planning an Android app and want help scoping it before you buy any accounts, [get in touch with Saga Infographics](/contact). If the app will be a web app first, the [web development service](/services/web-development) is the closer fit. This post does not cover account setup.
