---
title: Can You Use Vercel Hobby for a Client Website? (2026)
description: Vercel's Hobby plan is for non-commercial use, so paid client sites need Pro. What Netlify and Cloudflare Pages free plans say, and where sources disagree.
date: 2026-11-24
tags: Vercel, Netlify, Cloudflare Pages, web hosting, free hosting, client websites, web development
---

Vercel's Hobby plan is for personal, non-commercial use, and Vercel's documentation says commercial use needs Pro or Enterprise. A website you build for a paying client should not stay on Hobby. Netlify's free tier allows commercial projects, according to Netlify's own statements, but its agreement lets Netlify remove free-tier sites without notice. Cloudflare Pages' free-plan terms did not show up clearly in our search, so read them before a client depends on them.

These points are as of November 2026. Vercel's, Netlify's and Cloudflare's own pages would not open from our research environment, so we worked from search excerpts of those pages. Check the live pages before you choose a plan.

## What the Vercel Hobby plan says

The [Hobby plan documentation](https://vercel.com/docs/plans/hobby) describes the plan as personal and non-commercial, and says commercial use of the platform needs a Pro or Enterprise plan. [Vercel's Terms of Service](https://vercel.com/terms) use similar language but not identical wording: the docs say "personal only", while the terms say "personal or non-commercial". We found no official explanation of that gap, so the stricter reading is the safer one for client work.

The terms also let Vercel change or discontinue the Hobby plan and shut down Hobby projects without notice. That matters for a client site, which has to stay online. The [pricing page](https://vercel.com/platforms/pricing) excerpt we saw lists Pro at $20 a month. Check the current figure before you budget.

## Where forum answers disagree

Vercel's community forum is full of borderline questions. Examples include a [portfolio site that might be used for paid work](https://community.vercel.com/t/can-a-personal-screenwriter-portfolio-use-the-hobby-plan/50298), a [private work-management tool](https://community.vercel.com/t/is-hobby-allowed-for-a-private-work-management-tool/51887), and an [internal reservation app for two or three users](https://community.vercel.com/t/is-hobby-permitted-for-a-small-internal-reservation-app-with-2-3-users/51169). The answers we saw were mostly from other community members, not Vercel staff. One said Hobby is fine for trying ideas and building a prototype, but that you should move to Pro once you charge or plan to charge users. That is looser than the docs on work that has not yet earned money.

A client who pays you for a site is almost certainly doing commercial work, so Pro is the reading most likely to hold. That is our inference from the docs, not a statement from Vercel. If the case is unclear, Vercel says you can contact its support team.

## Netlify: allowed, with a removal clause

Netlify's [introduction to its free plan](https://www.netlify.com/blog/introducing-netlify-free-plan.md) says the free plan can be used for commercial projects, personal sites and other experiments. A [Netlify community answer](https://answers.netlify.com/t/can-we-use-netlify-free-plan-for-commercial-purposes/41545) from January 2024 said the same, and a later staff reply in that thread agreed.

The risk sits in the [Self-Serve Subscription Agreement](https://www.netlify.com/legal/self-serve-subscription-agreement.md). It lets Netlify change the terms for its free tier, discontinue that tier, and disable or remove any site on it without notice. A forum user called this a real problem for client projects, and a [community thread asks the same question](https://answers.netlify.com/t/is-the-free-tier-safe-for-client-projects/13535). The agreement also says that if your use goes beyond the free tier's capacity, you agree to pay extra fees. Netlify's [open source policy](https://www.netlify.com/legal/open-source-policy.md) is different: it excludes commercial projects, so it does not cover client sites.

## Cloudflare Pages: read the full terms

Cloudflare's [Self-Serve Subscription Agreement](https://www.cloudflare.com/en-ca/terms/) covers the free tier too. The excerpts we found did not show a clause that either allows or bars a commercial client site on the free plan. They did show one restriction: the agreement bars processing or collecting personal or business credit card information on any web property that receives free services. If a client site takes payments, that clause matters, and it connects to the [payment verification questions in our eSewa and Khalti post](/blog/esewa-khalti-payment-verification-website).

Cloudflare's [Pages limits page](https://developers.cloudflare.com/pages/platform/limits) lists 500 builds a month on the Free plan. That is a practical limit for a team that deploys often, but it says nothing about commercial use.

## Comparing the three before you deploy

| Question | Vercel Hobby | Netlify free | Cloudflare Pages free |
|---|---|---|---|
| Paid client site allowed? | No, per the docs and terms | Yes, per Netlify's blog and a forum answer | Not shown in our excerpts; read the full terms |
| Can the provider remove a site without notice? | Terms allow shutting down Hobby projects | Yes, per the agreement | Not shown in our excerpts |
| Limits to watch | Not checked | Usage beyond the free tier is billed | 500 builds a month |
| Card-detail restriction | Not checked | Not checked | Yes, per one excerpt of the agreement |

## What to do before you deploy a client site

Choose the plan before the build starts, and write down who owns the hosting account. A live site is harder to move, because the domain, DNS records and deploy settings all have to change together. If the client is paying for the site, agree in writing who pays for hosting and when. Ask the provider about any case you cannot settle from the docs. If the site will take payments, check the payment gateway's rules alongside the hosting terms.

This is general information about published terms, not legal or contract advice. For a client contract or a payment setup, talk to a lawyer or accountant.

If you are planning a client site and want to talk it through, [contact Saga Infographics](/contact). Our [web development](/services/web-development) page describes what we build.
