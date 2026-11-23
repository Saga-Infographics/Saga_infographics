---
title: Gmail Bulk Sender Requirements 2026: Who Must Comply
description: Gmail's bulk sender rules start near 5,000 messages a day per domain. Check DMARC, one-click unsubscribe and spam rate, and what sources still leave unclear.
date: 2026-11-23
tags: Gmail, email marketing, email deliverability, DMARC, small business, digital marketing
---

Gmail treats a sender as a bulk sender once it sends close to 5,000 messages to personal Gmail addresses within 24 hours. Google counts every message from the same primary domain together, so newsletters, order emails and password resets all add up. Below that line the extra bulk rules do not apply, but the sources disagree on how much authentication a smaller sender needs, so it is safer to set everything up now.

These rules come from Google's documentation as summarised in November 2026. Check the current [sender guidelines FAQ](https://support.google.com/a/answer/14229414) before you rely on any number here.

## What counts toward the 5,000 limit

Google's FAQ describes a bulk sender as one that sends close to 5,000 messages or more to personal Gmail accounts in a 24-hour period. It says messages from the same primary domain count toward that limit. The wording does not single out newsletters.

Two things follow. The count belongs to the domain, not to a mailing list or to the tool you send from. And the status is sticky: a sender that has been classed as bulk stays classed as bulk, so a quiet week does not reverse it.

Here is an example. A shop sends 1,200 newsletter emails and 4,100 order and shipping emails to Gmail users on the same day. That is 5,300 messages from one domain. The newsletter alone is well under the line, but the domain is over it.

## Authentication: SPF, DKIM and DMARC

Google's FAQ requires bulk senders to have a DMARC record for their sending domain. A vendor table is less strict. It lists DMARC as required for bulk senders and only recommended for lower-volume senders, as [Bird's Gmail and Yahoo requirements page](https://bird.com/docs/knowledge-base/deliverability/gmail-yahoo-requirements) summarises it. Both sources agree that SPF and DKIM are part of the setup.

The practical reading is simple. Publish SPF, DKIM and DMARC for any domain that sends mail to Gmail, whatever your volume. These are DNS records. Your email provider should document how to create them.

## One-click unsubscribe

For bulk marketing mail, Gmail expects one-click unsubscribe. [RFC 8058](https://www.rfc-editor.org/rfc/rfc8058.html) describes the setup with two headers:

- `List-Unsubscribe`, which carries an HTTPS link. A mailto address is optional.
- `List-Unsubscribe-Post`, which must contain exactly `List-Unsubscribe=One-Click`.

The DKIM signature has to cover both headers. Your server must accept an HTTPS POST at that link and remove the address without asking the reader to log in or fill in a survey.

Transactional mail is handled differently. [OneSignal's notes on Google and Yahoo's email rules](https://documentation.onesignal.com/docs/en/new-google-and-yahoo-email-updates) say receipts, password resets and similar messages are exempt from the unsubscribe requirement but should still authenticate properly.

## Spam rate: the 0.10% and 0.30% lines

Google's guidance is to keep the user-reported spam rate under 0.10% and never let it reach 0.30%. Google calculates the rate daily. Above 0.30%, a bulk sender is ineligible for mitigation, so the margin is much smaller than it looks.

To watch the number, use Gmail Postmaster Tools. You must add and verify your sending domain first, and the Spam Rate dashboard only fills in after that. [Google's Postmaster Tools help](https://support.google.com/mail/answer/14668346) lists a few limits you need to keep in mind:

- It covers only mail that is DKIM-signed.
- It covers only recipients with gmail.com or googlemail.com addresses.
- A very low rate can mislead. If Gmail sends much of your mail to spam, fewer recipients see your messages in their inbox, so the reported rate drops.

## Summary

| Check | Under about 5,000 a day | About 5,000 or more a day |
|---|---|---|
| Bulk classification | No | Yes, and it stays |
| SPF and DKIM | Recommended; publish them anyway | Part of the required setup |
| DMARC | Recommended in one vendor table | Required under Google's FAQ |
| One-click unsubscribe | Marketing mail: check the current rules | Required for marketing mail |
| Spam rate | Watch in Postmaster Tools once volume is steady | Keep under 0.10%, never reach 0.30% |

## What is still unclear: transactional mail

The biggest open question is whether transactional mail counts toward the 5,000 limit. Google's wording counts messages, and none of the sources we read says that receipts or password resets are excluded from the count. Bird's guide says the volume threshold changes which extra requirements apply. It does not make a transactional sender invisible to Gmail.

The sources do not settle whether a day of 5,000 or more order emails brings the full marketing set into force. Until Google's current FAQ answers that, count all mail per domain and meet the stricter rules once you are near the line.

Saga Infographics builds websites and edits short-form video for YouTube Shorts, Instagram Reels and TikTok. We do not run email campaigns. If your website's contact form or order emails are part of a build we could help with, [get in touch](/contact). This is general information, not legal advice, so ask a professional about your own obligations.
