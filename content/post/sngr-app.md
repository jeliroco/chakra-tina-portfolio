---
title: 'SNGR: AI Songwriting Partner'
metadata:
  createdAt: '2023-04-03T04:00:00.000Z'
  editedAt: '2023-04-03T04:00:00.000Z'
thumbnail: /uploads/sngr-hero.webp
---

The following article will outline my experiment with leveraging AI as a developer. If you just want to check out the songwriting application itself, head on over to [sngr.ca](https://sngr.ca "SNGR: Songwriter's Next-Generation Resource")

<image />

A few weeks ago, a Twitter trend called [HustleGPT](HustleGPT "https://mashable.com/article/gpt-4-hustlegpt-ai-blueprint-money-making-scheme") caught my eye. Basically, someone told ChatGPT to generate as much money as possible using no manual labor. The AI essentially became his boss, and he just did whatever the AI told him to do. The concept went viral and I'm fairly confident that fellow made a lot of money. But it raised an interesting question for me: how productive could I be as a developer, if I used AI to fulfill every other role in the development lifecycle/ecosystem?

I started with some core assumptions:

* I want to act purely as a developer.
* I want the core feature set of whatever I build to involve the OpenAI API in some way.
* I want to leverage AI for as many tasks as possible.

I started by asking ChatGPT for some ways to leverage the OpenAI API for some novel web application. I stated some of my interests -- music, theatre, etcetera -- and told it to give me 10 ideas.

<image url="/uploads/gpt-ideas.png" caption="You can see where this is going." />

Immediately, the second idea jumped out at me: an AI songwriting application. I immediately asked it for a business plan for such an app. It churned out a really solid document outlining a market analysis, a development roadmap, technical requirements, a marketing plan, even a budget allocation.

From there, I started work on the app. I decided to use [Astro](https://astro.build/ "Astro") as a framework because of its optimized performance compared to other frameworks -- this would be helpful for achieving high [lighthouse scores](https://developer.chrome.com/en/docs/lighthouse/performance/performance-scoring/ "Lighthouse Performance Scoring") with little effort. As I worked, I would occasionally reach out to ChatGPT (my boss), and ask for more information. I asked it to provide me a colour scheme, a design language, all of the copy for the home page complete with sections and components to build. I really was just executing on whatever the AI told me to do.

I eventually started to wonder how far I could take it. I asked ChatGPT to develop components for me when I was feeling a bit lazy. Ultimately it didn't do a terrific job -- at best it would give me a half-working component which I would have to finish myself. But I realized that it was acting as a pretty solid programming partner. It would propose a solution, I would propose an alternative, and together we would arrive at a good implementation.

