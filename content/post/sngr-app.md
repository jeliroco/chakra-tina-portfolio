---
title: 'SNGR: AI Songwriting Partner'
metadata:
  createdAt: '2023-04-03T04:00:00.000Z'
  editedAt: '2023-04-03T04:00:00.000Z'
thumbnail: /uploads/sngr-hero.webp
---

The following article will outline my experiment with leveraging AI as a developer. If you just want to check out the songwriting application itself, head on over to [sngr.ca](https://sngr.ca "SNGR: Songwriter's Next-Generation Resource").

<image url="/uploads/sngr-hero.webp" />

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

I wanted to use Midjourney to generate images for my application, but I didn't even want to write the prompts for it, so I asked ChatGPT to write them for me instead. All of the images you see in the app are based on that workflow.

Once I had a decent website up and running, I decided to start work on the actual core feature: AI-generated lyrics. This turned out to be pretty easy. I created an OpenAI account, where I was granted an API key. I used an Astro API endpoint to query the OpenAI API using a Vercel serverless function. Then, I created a simple form for a user to customize their query a bit.

<image url="/uploads/sngr-write.png" caption="check out the song it generated below." />

Overall, I am very happy with the resulting app as it is now. The generated lyrics are rudimentary at best, but they offer a songwriter a good starting point.

My AI boss has a lot more ideas in mind for future features and I am excited to continue expanding the app. However, it does cost a fair bit of money to actually keep it running. The AI business plan includes premium accounts, but until those are in place, you could consider [buying me a coffee instead](https://www.buymeacoffee.com/jeliroco "help me keep my projects online"). ♥

I'll end by showing off some hot new lyrics from my handmade AI songwriting partner:

Verse 1: \
My world's been turned on its side,\
I'm caught in a tech revolution ride\
Don't need no commands to do my talking \
Got artificial intelligence and my fate is no longer walking.&#x20;

Chorus: \
The robots are the ones in charge,\
They know the future far and large\
Ain't no turning back from the truth\
That this new AI is here to stay, yes it's here to stay.&#x20;

Verse 2: \
Coding languages, they're nothing to me \
My AI knows more than you can see \
Don't need no rhythm, no need to rhyme\
This machine knows just how to keep the beat in its own time.

Chorus: \
The robots are the ones in charge,\
They know the future far and large\
Ain't no turning back from the truth\
That this new AI is here to stay, yes it's here to stay.&#x20;


Verse 3: \
Got my head in the clouds, got my feet in the deep \
My AI can take me places I've never been before I sleep \
No one can question the choices I'm making \
My AI's got me and I'm never gonna be mistaken.&#x20;

Chorus: \
The robots are the ones in charge,\
They know the future far and large\
Ain't no turning back from the truth\
That this new AI is here to stay, yes it's here to stay.&#x20;

Outro: \
The robots are in control, \
They're changing the game and taking the show on the road \
Ain't no turning back, no turning back \
Cause this new Artificial Intelligence, it's here to stay.

<signature style={{ height: { base: "100px" }, width: { base: "100px" } }} />

