---
title: Viber Transactional Templates 2026: What Changed
description: Viber now requires approved templates for transactional and OTP business messages. Sources give 1 or 15 July 2026. Here is what to check with your provider.
date: 2026-11-17
tags: viber, business messaging, transactional messages, OTP, Nepal, digital marketing
---

Viber now requires transactional and OTP business messages to use templates that Viber has approved in advance. The rule took effect in July 2026, but the sources disagree on the day: most say 1 July, and some say 15 July. Promotional messages are not covered by the rule. Vendors also report that a transactional or OTP message sent without an approved template is billed at the higher promotional rate. In Nepal, most businesses reach Viber through a local partner, so that partner is the first person to ask.

## What changed

Viber's business messages fall into types, and the template rule applies only to some of them. Integrator guides describe the change in similar terms: transactional and OTP messages need a pre-approved template, and promotional messages do not ([Routee](https://docs.routee.net/docs/rakuten-viber-transactional-templates), [Apifon](https://kb.apifon.com/viber-transactional-and-otp-message-templates), [Dexatel](https://dexatel.com/blog/viber-business-messaging-changes/)).

The date is where the sources differ. [Sleekflow](https://sleekflow.io/blog/viber-business) says all transactional messages need approved templates from 1 July 2026, and it dates Viber's announcement to 20 May 2026. [Infobip's release notes](https://www.infobip.com/docs/release-notes/glacier) and an [8x8 developer page](https://developer.8x8.com/connect/docs/viber/templates) give 15 July. We could not open Viber's own announcement, so we cannot say which date is right. Viber's business blog is the place to check: [forbusiness.viber.com](https://forbusiness.viber.com/en/blog).

## Transactional or promotional?

The category decides whether a template is needed, so sort each message before you ask for approval. Transactional messages are updates a customer expects, such as account charges or booking confirmations. A Nepali provider, [Sparrow SMS](https://blog.sparrowsms.com/sms-marketing/viber-marketing-guide-intro-to-viber-business-messaging-in-nepal/), gives those two examples and a few others.

Promotional messages are offers and marketing. One integrator guide notes that transactional templates should not carry promotional content, such as a sale, a product list or a buy button, and that a template with that content may be rejected or moved to the promotional category ([Messageflow](https://messageflow.com/blog/viber-messages-promotional-vs-transactional/)). Read the wording of your own template with that in mind.

## What it can cost

The billing claim is the one most worth checking. Several sources say a transactional or OTP message sent without an approved template is charged at the promotional rate. [SendPulse](https://sendpulse.com/en/knowledge-base/viber/viber-template) describes the same outcome for service messages. These are vendor statements about how Viber bills, and we could not confirm them from Viber. Rate cards differ by country, and we found no published Nepal rate for either message type, so we have left out all price figures.

## How it works in Nepal

Nepali businesses usually reach Viber through an official partner or a reseller. Sparrow SMS describes itself as the official Viber Business partner in Nepal, and [SMSBAT](https://smsbat.com/pricing/viber-business-messages/nepal/) resells the service. Neither page we could read explains how template approval works for Nepali accounts in 2026.

One third-party article on Nepal's SMS rules says formal template registration is not required by law, but that vendors often enforce template use to keep delivery stable ([Foxnett](https://content.foxnett.com/navigating-sms-regulations-in-nepal-kyc-privacy-and-anti-spam-laws/)). That is a secondary source, so treat it as unconfirmed. Do not assume your provider enforces the same rule as the global guides.

## A checklist for a business owner or developer

1. List every message your system sends over Viber, such as order updates, booking confirmations or login codes.
2. Mark each one as transactional, OTP or promotional. Keep promotional messages separate.
3. Ask your provider whether each transactional or OTP message has an approved template, how long approval takes and who submits it.
4. Keep template text plain. Remove offers, product lists and buy buttons from transactional text.
5. For OTP templates, check the placeholder format with the provider. One integrator says the template must include a `{{pin}}` placeholder ([Routee](https://docs.routee.net/docs/rakuten-viber-transactional-templates)).
6. Send a small test batch and check the billing category on the first invoice. A mismatch is a sign a template is missing.

If a message sent through your website is failing or being billed as promotional, the fix may sit in the template, the provider's account or the site's message flow. Check the first two with your provider. For a site that sends order updates or login codes, the message flow is part of the build, so it helps to review it with your developer. [Contact us](/contact) if you want a second look at what your site sends and where. This article covers general rules, not legal or billing advice, so confirm current terms with your provider and Viber.

## What we could not confirm

- The exact enforcement date (1 July or 15 July 2026).
- Viber's official wording and template rules, since its developer and business pages did not open from our session.
- Nepal-specific template approval steps and rates.
- Whether Nepali providers apply the global rule the same way.

If you run a Nepali business that sends transactional Viber messages, ask your provider these questions this week.
