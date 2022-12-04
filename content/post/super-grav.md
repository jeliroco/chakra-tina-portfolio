---
title: SuperGrav - An Interactive 2D Gravity Simulation
thumbnail: /uploads/Screenshot 2022-11-20 194451.png
metadata:
  createdAt: '2022-11-20T05:00:00.000Z'
  editedAt: '2022-11-20T05:00:00.000Z'
tags:
  - tag: dev
---

<video src="https://www.youtube.com/embed/uPows5QoTSs" />

## Game Overview

SuperGrav is my current solo project. My intent with SuperGrav is to create a 2D simulation of gravity, modeling N-body interactions of planetary bodies. Planetary bodies are referred to in my implementation as a “Matter”. A Matter applies a gravitational force to all nearby Matter, based on their mass. When two Matters collide, the larger Matter consumes the smaller Matter, adding the mass to its own. This typically results in one or two large central bodies, which influence all other Matter in the simulation. When a Matter’s mass reaches zero, the Matter is respawned. &#x20;

The red and blue circles surrounding the play area are defined based on the total mass of the system. When a Matter leaves the red circle, it is respawned. Matter is respawned along the blue circle. Matter is recycled using an [object pool](https://en.wikipedia.org/wiki/Object_pool_pattern#C), to improve performance. The player can interact with the system using the gravity tool (shown in the bottom left of the above image). When the player left-clicks, Matter is pulled towards the cursor. When the player right-clicks, Matter is repelled from the cursor. This allows the player to attempt to create stable orbits around the central mass. Players can also increase or decrease the timescale. The following section will outline the implementation details of SuperGrav.

## Implementation Details&#x20;

The core functionality of SuperGrav is dependent on the simulation of gravitational force between all Matter, and the recycling of Matter objects using and Object Pool. The following subsections will discuss those aspects in greater detail.

### Gravitation

Every frame, each Matter applies a gravitational force to all other Matter within its sphere of influence. The size of a sphere of influence is determined by its mass. This presents a great performance improvement, as any Matter outside a given Matter’s sphere of influence is ignored, as the gravitational force would be negligible.  This compromise still allows for complex interaction of Matter. For example, medium-sized bodies (planets) will often capture smaller-sized bodies (asteroids/moons), while also orbiting a large central body (sun). Matter applies gravitational force based on Newton’s universal law of gravitation:

```javascript
F = (G * m1 * m2) / r ^ 2
```

### Object Pooling&#x20;

SuperGrav makes use of an [object pool ](https://en.wikipedia.org/wiki/Object_pool_pattern#C)to great effect. In the system, there is always exactly 100 individual Matters (though it is able to handle an object pool of greater size, around 100 seems to be the most stable). The object pool tracks all 100 Matters, and handles gravitational force application for the entire system. As the mass of the system begins to concentrate in one  or two central bodies, the total mass of the system increases without Instantiating or Removing  any GameObjects. Instead, Matter is recycled when it either leaves the system (by crossing the red circle), or is consumed by a larger Matter.

### Evaluation&#x20;

While I feel that the current state of SuperGrav can stand on its own, I intend to add more methods of player interaction. The player can currently only influence Matter through the gravity tool. Future work may include a tool for “banking” mass which can be manually added to a given Matter. This would make it easier to create larger bodies outside the central mass. The goal of the project is to eventually allow Matter to transform into stars, planets, moons, black holes, etc.  based on their mass. I am also considering modelling multiple different elements (i.e., hydrogen, helium, oxygen, etc.) which have different densities and may allow transformations into specific planetary bodies (gas giant, water world, etc.).

Having said this, I find SuperGrav fascinating because of the emergent behaviour that arises from something as “simple” as gravitation, when many objects are allowed to influence each other. This is an intriguing core mechanic, and something that I intend to develop in the future.
