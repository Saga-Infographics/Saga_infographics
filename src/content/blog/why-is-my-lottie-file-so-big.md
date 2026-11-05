---
title: Why Is My Lottie File So Big? How to Reduce It
description: Lottie files get big from image layers, image sequences and extra keyframes. Here is how to find the cause, shrink the file and know when to use video.
date: 2026-11-05
tags: Lottie, After Effects, web animation, motion graphics, web performance
---

A Lottie file is usually large for one of three reasons: it contains raster images or a frame-by-frame image sequence, it has more keyframes or frames per second than the motion needs, or it uses effects that are costly to draw. Find which of these applies to your file, fix it in After Effects before you export, and only then look at compression.

Lottie-web, Airbnb's HTML player, renders After Effects animations exported as JSON through the Bodymovin plugin ([lottie-web on GitHub](https://github.com/airbnb/lottie-web)). Because the JSON describes shapes and motion rather than pixels, a file built mostly from shapes stays small. Problems start when the source material is images, or when the timeline is denser than it needs to be.

The advice below is current as of November 2026. It draws on the lottie-web README and on user reports in forum threads. We could not open the LottieFiles documentation or its forum directly from this session, so treat the forum details as reports, not benchmarks, and test each change on your own file.

## Image layers are the first thing to check

The lottie-web README says image and AI layers should be converted to shapes. Otherwise they are exported as separate image files ([lottie-web README](https://github.com/airbnb/lottie-web)). That gives you extra files to load, and each raster image adds weight.

Image sequences are worse. The same README says image sequences, videos and audio are not supported in lottie-web ([lottie-web README](https://github.com/airbnb/lottie-web)). People who work around that by exporting a PNG for every frame often find the size grows fast. One Webflow forum user reported that 15 to 20 MB of source images became about 160 MB in the exported file for 105 frames ([Webflow forum thread](https://discourse.webflow.com/t/lottie-animation-file-size-too-large/98287)). That is a single report, but it fits the pattern: pixels are heavy, and vector shapes are light.

The usual fix is to redraw the image as shapes where the look allows it. If the content is footage or a photographic clip, use a video file instead (more on that below).

## Keyframes and frame rate

Every keyframe and every frame of motion adds data. One forum user with a file of about 400 shape layers found that a script-driven animation was the likely cause of the size. The likely culprit was scripts that had been converted into keyframes ([LottieFiles forum thread](https://forum.lottiefiles.com/t/why-is-my-lottiefile-so-big/3504)).

Frame rate is the other easy lever. A Webflow user reported good results from lowering the frame rate to 15 fps ([Webflow forum thread](https://discourse.webflow.com/t/lottie-animation-file-size-too-large/98287)). Smoother motion costs more data, so check whether the animation looks right at a lower rate before you export at a high one.

Keyframes deserve the same scrutiny. Set keys only where the motion changes direction or speed, and delete the ones that sit on a straight, even move. A layer keyed on every frame costs more than the same movement with a few keys.

## Masks and project weight

The lottie-web README notes that inverted masks carry a significant performance cost ([lottie-web README](https://github.com/airbnb/lottie-web)). That is a rendering cost, so it can slow playback even when the file size looks fine. The same README recommends keeping After Effects projects lean, which means removing unused layers and precomps before export.

## A checklist you can run in an hour

| What you see | Likely cause | What to try |
|---|---|---|
| Hundreds of PNG frames | Image sequence | Redraw as shapes, or switch to video |
| A few large images | Raster image layers | Convert to shapes, or compress images before import |
| Many keys on simple motion | Dense keyframes, or scripts baked into keys | Remove unneeded keys, simplify the motion |
| Heavy motion at a high frame rate | Extra frames per second | Test at a lower frame rate |
| Inverted masks | Rendering cost | Replace with simpler masks |

Change one thing at a time and check the file size after each change, so you know which fix did the work.

## Consider dotLottie for delivery

dotLottie is a compressed container. The dotlottie-web README says it bundles multiple animations, themes, state machines and embedded assets into one compressed file, and that the player loads it with a `src` ([dotlottie-web README](https://github.com/LottieFiles/dotlottie-web)). That README gives no file-size figures. Vendor material cites large savings, but we could not check those numbers, so compare your own JSON and dotLottie files before you decide.

## When Lottie is the wrong tool

Because lottie-web does not handle video, image sequences or audio, footage and photographic clips belong in a video format such as WebM or MP4. Lottie works best for vector-style motion: icons, logo reveals, lower thirds built from shapes, and interface animations. If your idea needs a real camera shot, a video is usually the honest answer.

## What we can help with

Saga's team builds 2D and 3D motion graphics, kinetic typography, lower thirds and logo animations in After Effects, for videos and product stories ([motion graphics services](/services/motion-graphics)). If you need an animation that will run on a website, say so when you get in touch, because the file format depends on where it will play. You can reach us through [the contact page](/contact), and if the animation is part of a larger site, see our [web development](/services/web-development) page.

## What we could not verify

Some of the figures you will find online are vendor claims about percentage savings, and the sources for them were blocked from this session. Forum reports describe individual files and settings, not controlled tests. Use them as a list of things to try, not as promised results, and measure the file before and after each change.
