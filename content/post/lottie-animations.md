---
title: Lottie Animation Workflow
thumbnail: /uploads/after-effects.png
metadata:
  createdAt: '2023-04-10T04:00:00.000Z'
  editedAt: '2023-04-10T04:00:00.000Z'
tags:
  - tag: art
  - tag: dev
  - tag: video
---

I have again found myself burning the midnight oil on a flight of fancy. This time, the object of my hyperfocus is [Lottie](https://airbnb.design/lottie/ "Lottie").

Lottie is an open-source library developed by AirBnb that lets you export animations as JSON to be delivered in a highly optimized way for the web. I can create an animation in Adobe After Effects, export it as a JSON file using a plugin, and then import it into the app using the Lottie library. Here's the first animation I made:

<lottie slug="orbit" lottieStyle={{ height: 200, width: "" }} />

It may not look like much, but bear in mind the JSON file driving that animation is only 13 kilobytes in size. You may see that animation show up on my [AI songwriting partner](https://sngr.ca "Songwriter's Next Generation Resource") app, SNGR, before too long. (See my blog post about the making of that app [here](/posts/sngr-app "SNGR blog post").)

I have been spending a significant portion of my free time refamiliarizing myself with the Adobe Creative Suite, and this workflow is a perfect complement to that initiative. It has given me a great excuse to learn After Effects, which has remained a black box to me until now. The animations you see in this post were built using only primitive shapes, but I intend to work on integrating Adobe Illustrator with After Effects to unlock a lot more artistic possibilities.

While working on this, I got an idea to make a hyper-optimized web game using Lottie to deliver all of the animations. It may be a while before you see that come to life, but here's a very basic walk cycle I whipped up:

<lottie slug="walkCycle" lottieStyle={{ height: 200 }} />

The power of this workflow becomes really clear when you think of the division of talents in a typical production team. Many animators are already familiar with After Effects, which means they get to just keep using the tools they are used to. Then the web developers (who are always concerned about file size and optimization... right?) can convert all the animators' blood sweat and tears into a tiny JSON file. Everybody is happy.

I'm really happy that I decided to dig into this. It has opened up a world of possibilities for me and given me all the more reason to dig deep into Adobe's offerings.

<signature
  style={{
    height: { base: "100px" },
    width: { base: "100px" },
    justifyContent: { base: "" },
    textAlign: { base: "" }
  }}
/>
