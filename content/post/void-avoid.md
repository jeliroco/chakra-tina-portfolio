---
title: ' VOID AVOID: an Intentionally Simple Mobile Game '
thumbnail: /uploads/Screenshot 2022-11-20 220907.png
metadata:
  createdAt: '2022-11-20T05:00:00.000Z'
  editedAt: '2022-11-20T05:00:00.000Z'
tags:
  - tag: dev
---

<video src="https://www.youtube.com/embed/WDogXM3-mfg" />

## Game Overview&#x20;

My goal in creating VOID AVOID was to create an engaging mobile game with the simplest  possible implementation. In VOID AVOID, the player uses touch controls to move a brightlycoloured circle (heretofore referred to as the “player avatar”) around the screen. Every 5  seconds, a “void”—A black cube—spawns and begins to approach the player avatar. Each void  gets slightly faster over time. The player’s goal is to avoid the void for as long as possible.  Games typically last under 90 seconds. This short-term gameplay is perfect for killing time on  public transit, for example, allowing the player to have a bit of fun while maintaining some level  of alertness.&#x20;

A key feature of VOID AVOID is that it achieves a unique aesthetic, using barely any custom art assets. This aesthetic is achieved by using some simple colour math to rotate the hue of the background and player avatar, creating contrast between the dark voids. Particle systems are also used to amplify this effect. Though very simplistic, this design is intended to evoke a “vaporwave aesthetic”.&#x20;

Another integral feature to the core gameplay of VOID AVOID is the behaviour of the void. If each void were to approach the player avatar directly, it would likely be impossible for a player to last even 30 seconds, and the gameplay would have no interest. To solve this, I implemented  a modified [flocking behaviour](https://en.wikipedia.org/wiki/Flocking_\(behavior\)#Rules), which gives each void some “awareness” of all others, and makes them appear to be “smarter” adversaries. In the following section, I will outline the core implementation of VOID AVOID’s flocking behaviour.

## Implementation Details&#x20;

### Flocking

As mentioned in the previous section, the void moves based on a modified flocking behaviour. In the flocking behaviour, an object’s current trajectory is a weighted a weighted average of the following three vectors:&#x20;

1\. Separation: the object will avoid getting too close to any other nearby object in the flock.&#x20;


2\. Alignment: objects try to move in the same direction as their neighbors.&#x20;


3\. Cohesion: each object tries to move towards the center (or average position) of the whole flock.&#x20;

In my implementation, I added a fourth vector to the weighted average, Goal: objects will try to move towards a goal position (in this case, the player avatar’s position). Because each void is trying to move towards the player avatar (somewhere in the center of the screen), alignment and cohesion become less important, and are therefore weighted far less heavily than would be seen in a typical flocking behaviour. However, separation becomes more heavily weighted, allowing the player to move through the gaps created by the void. This extends gameplay and makes the game significantly more fun.&#x20;

Each void is also not completely alike; there is some randomness to the weighting of the average vector for each void. This creates a sense of personality: some voids are impatient, bumping into their neighbors in an effort to collide with the player, while others are more cautious, hanging back and creating roadblocks to the player’s future movement.

## Evaluation

In creating VOID AVOID, I feel that I achieved my goal of creating an engaging, eye-catching game with the simplest possible implementation. It is hard for me to identify possible future work for this reason. In previous iterations of this concept, I implemented “power-ups” and methods for destroying the void, but in the end, I felt that this detracted from the simplicity of the gameplay. Furthermore, giving the player more abilities would extend gameplay far beyond 90 seconds, at which point the game might be interrupted (such as in my public transit use-case from the previous section).


Having said this, future goals for this game include an online leaderboard and local high-score list. Music and SFX also need to be added in the future.
