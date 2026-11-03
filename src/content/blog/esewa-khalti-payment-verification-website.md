---
title: eSewa and Khalti Payment Integration: Server-Side Checks
description: A redirect does not prove a payment. Learn how eSewa and Khalti checkouts work on a website and how to verify each payment on your server.
date: 2026-11-01
tags: eSewa, Khalti, payment gateway, web development, Nepal, e-commerce
---

A redirect back to your site does not prove that a customer paid. On an eSewa or Khalti checkout, your server should start the payment, send the customer to the gateway, and then confirm the result with the gateway before it marks the order as paid. The return URL tells you what the customer's browser saw. The gateway's lookup or status check is the confirmation you should act on.

## Why the redirect is not enough

Khalti's ePayment docs say the return URL carries the `pidx` and a status such as Completed, Pending or User canceled. A Pending status means you should call the lookup API. The docs call the lookup result the final validation, not the redirect parameters ([Khalti ePayment docs](https://docs.khalti.com/khalti-epayment)).

eSewa's developer pages make the same point from another angle. The ePay v2 page says the merchant should compare the signature eSewa sends with one the merchant generates. The ePay page says that if no response arrives within five minutes, the status check API can confirm the payment ([eSewa ePay](https://developer.esewa.com.np/pages/Epay)).

Community code follows the same pattern. The eSewa PHP SDK keeps a status check as a fallback when a response looks wrong ([esewa-sdk-php](https://github.com/sudiptpa/esewa-sdk-php)). The Python package `nepal-gateways` wraps both gateways with a sandbox mode, success and failure callback URLs and a verify step ([PyPI](https://pypi.org/project/nepal-gateways/)).

## The flow, step by step

1. **Create the order on your server** with a pending status and a unique reference. Store the amount you expect to receive.
2. **Start the payment from your server**, not from the browser. Khalti's getting-started guide describes a server request that returns a `pidx` and a `payment_url`. You keep the `pidx` and redirect the customer to the URL ([Khalti getting started](https://docs.khalti.com/getting-started)).
3. **Send the customer to the eSewa payment form.** A community Laravel guide says the signature covers `total_amount`, `transaction_uuid` and `product_code` ([DEV Community guide](https://dev.to/pembans/step-by-step-guide-to-integrate-esewa-epay-v2-with-laravel-and-livewire-50bk)). Check the field list on eSewa's own page before you rely on it.
4. **The customer returns** to your success or failure URL.
5. **Verify on the server.** For Khalti, call the lookup endpoint with the `pidx`. For eSewa, compare the returned signature and use the status check if the response is missing or unclear.
6. **Mark the order paid only if the gateway confirms it** and the amount matches what you stored in step 1.
7. **Clean up pending orders.** Run a job that re-checks anything still pending, so a payment that finished after the customer closed the tab does not leave an order stuck.

## The two gateways side by side

| | Khalti ePayment | eSewa ePay v2 |
|---|---|---|
| How the payment starts | Server request returns `pidx` and `payment_url` | Signed form fields sent from your server (per a community guide) |
| Identifier to store | `pidx` | Transaction UUID |
| How to confirm | POST to `/epayment/lookup/` with the `pidx` | Compare the signature; use the status check if no response arrives |
| Test environment | Sandbox, but the getting-started guide says e-banking and card payments are not supported there | Test status endpoint on `rc.esewa.com.np`, per a community Flutter plugin ([pub.dev](https://pub.dev/packages/esewa_flutter)) |

## Test the failure paths, not only success

Khalti's getting-started guide says e-banking and debit or credit card payments are not supported in the test environment, so a sandbox run will not cover every payment method. A vendor guide on eSewa and Khalti integration advises testing refunds and failed payments as well as successful ones ([WebsNP](https://www.websnp.com/help/esewa-khalti-payment-integration-website)). In practice, test these cases:

- the customer cancels on the gateway's page
- the payment is still pending when the customer returns
- the callback arrives after the customer has already left
- the amount in the response does not match the order

## What these sources do not settle

- **eSewa has more than one product.** The Intent product uses HmacSHA256 with an access key and different fields and endpoints ([eSewa Intent](https://developer.esewa.com.np/pages/Intent)). Confirm which product you are integrating before you copy any code.
- **The official eSewa pages we could read were partial.** Check the exact field list and signed-field order on developer.esewa.com.np before you build.
- **Integration prices on Nepali agency sites could not be verified.** This post does not quote them.
- **Gateway rules change.** Check the current docs before launch.

## Payments are a business question too

This post covers how the technical flow works. It is not financial, tax or legal advice. For merchant onboarding, settlement timing, invoices or tax treatment, ask the gateway directly and speak with a qualified accountant.

If you are planning a website that takes eSewa or Khalti payments, [Saga's web development service](/services/web-development) covers website builds. [Get in touch](/contact) with your requirements and ask whether payment integration is part of the scope.
