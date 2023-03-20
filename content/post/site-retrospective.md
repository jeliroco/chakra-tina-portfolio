---
title: Portfolio - Site Retrospective
thumbnail: /uploads/PXL_20221120_081653216(1).jpg
metadata:
  createdAt: '2022-11-20T09:19:00.000Z'
  editedAt: '2022-11-20T09:19:00.000Z'
tags:
  - tag: dev
---

## I am enraptured.

It is currently 4:19AM. I have been working tirelessly on this site for the past few days -- maybe more, I have lost track -- and I have absolutely fallen in love with this architecture. This site is built using Tina.io and Chakra UI. On their own, both of these technologies are strong, but together, they produce an absolutely unbeatable stack.

<image url="/uploads/Screenshot 2022-11-20 042342.png" caption="^ This is what it looks like when I write content for this site." />

Tina.io is an open-source framework that simplifies the process of building content management systems (CMS). It is built on top of React and offers a flexible data model that makes it easy to manage content from different sources, including local files, databases, and APIs. With Tina.io, I can create dynamic and customizable user interfaces that allow me (or even a non-technical end-user) to edit content directly on the website, making it easy to manage and update content.

Chakra UI is a component library for React that provides a set of ready-to-use components for building responsive and accessible UIs. Chakra UI offers a wide range of pre-built components, including buttons, forms, modal windows, and more. However, the Chakra feature that I am more interested in is the ability to create customizable themes that make it easy to create consistent and visually appealing UIs.

Tina.io uses Git and Markdown to produce a lightweight and flexible CMS. This allows me to throw together content really quickly, and that content will be very accessible later. No coding knowledge is really required to write content for a Tina application. Tina even has a Cloud service that you can use to write content without even needing a Git client.

Chakra UI provides a good number of strong components (but not as many as others such as &#x20;

<link url="https://mantine.dev/" text="Mantine" isExternal={true} />

) and a fantastic CSS-in-JS system for styling those components. Using Chakra, I'm able to easily create color schemes and variants for components⁠—
whether those components are provided by Chakra or custom-built. I can then provide the user with light & dark mode options, and even a customizable color scheme option. Both of these features are available for you to mess around with in the footer.

The real beauty of this stack is how Chakra and Tina interact. I can define components in Tina's schema, which can have fields that directly connect to Chakra's CSS-in-JS theming solution. Then, using Tina's "rich-text" fields, I can write a bunch of content, and drop custom components wherever I want. As an example, I will drop in the "RandomText" component that I originally built for my "HeroImage" component (as seen on the home page):

<RandomText texts={["Lorem ipsum dolor sit amet..", "Go ahead and try out the footer buttons.. I'll wait..", "Isn't this amazing??", "If this doesn't work, I will go to bed.."]} italic={true} bold={true} />

I genuinely can't believe that just worked. I am literally testing things as I write this post. Hilarious.

It is now 4:35AM.

<image url="/uploads/PXL_20221120_081653216(1).jpg" caption="lost in the sauce" />

Anyways, as I was saying... Once I have set up the Tina schema and provided the associated components to be displayed, I can use the Tina admin panel to edit any fields I want. The sky's the limit.

Integrating Tina and Chakra allows me to focus on creating content and functionality rather than worrying about the user interface. With Chakra UI, I can easily create a consistent and visually appealing UI that is responsive and accessible, while Tina.io provides an easy way to manage and edit content directly on the website.

This workflow is also perfect for component-driven development. Now that I have a solid foundation for my application, I can focus on building components to be used over and over again. I don't even need to use them on this site! Maybe I'll throw them into a bit.dev component library at some point. If I do, I'll have to write a blog about that.

It is 4:49AM, and I am actually going to go to bed. I swear I'm gonna do it.

TODO: Add a signature component, I think that would be nice.

<signature
  style={{
    width: { base: "100px", md: "150px", lg: "200px" },
    height: { base: "" },
    display: { base: "" },
    padding: { base: "" },
    margin: { base: "" },
    textAlign: { base: "" },
    justifyContent: { base: "" }
  }}
/>

