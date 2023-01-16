---
title: ' Hereafter: an Atmospheric Mini-Project '
thumbnail: /uploads/Screenshot 2022-11-20 221319.png
metadata:
  createdAt: '2022-11-20T05:00:00.000Z'
  editedAt: '2022-11-20T05:00:00.000Z'
tags:
  - tag: dev
---

<video src="https://www.youtube.com/embed/HuS94ivQRok" />

## Technologies Used:

* Unity C#

## Game Overview

Hereafter is a 2D game which was developed for the Ottawa Global Game Jam 2018. The theme for the game jam was “transmission”. We had a team of four, and 3 days to complete the project. After considering possible game ideas involving the transmission of signals, or the transmission of an engine, we took the theme in a unique direction: what about transmissions between the mortal and spiritual planes of existence? What about the transmission of a soul to the afterlife?

The result of our brainstorming led us to Hereafter. In Hereafter, the player character (PC) is alone in the forest, on the brink of death, fading between the mortal and spiritual planes. But in the spiritual plane, the PC encounters the spirits of those who have died before him. They give him the strength to carry on a little longer, and hint at the location of other spirits via riddles. The game ends when the PC finds all the spirits or dies.

The primary focus of Hereafter is atmosphere. In particular, our priority was to ensure that the mortal and spiritual planes have distinct atmospheres, while maintaining the same general geography. This was achieved via visual art and music. In the following section, I will outline the implementation of Hereafter, and highlight my contributions.

## Implementation Details&#x20;

As mentioned previously, our main goal in the creation of Hereafter was atmosphere. It is my opinion that the music and sound design of a game plays a major role in the mood and feeling it imparts to the player. Because of this, sound design became my primary focus in development.  I also implemented the presentation of dialogue and riddles presented to the PC by the spirits. The following subsections will outline the core implementation of Hereafter, highlighting my main contributions.&#x20;

### The GameManager&#x20;

The GameManager uses the singleton design pattern and contains any functions and variables that are relevant to tracking the game state, and any other top-level implementation. Most importantly, the GameManager contains the boolean variable Astral, which describes whether the PC is in the mortal or spiritual plane. When the player is close enough to a yet-undiscovered spirit, he passes into the spiritual plane (Astral = true) until the spirit has finished their dialogue, at which point he passes back into the mortal plane (Astral = false ).

### The SoundMaster&#x20;

The SoundMaster, also a singleton, is a child of the GameManager, and controls all music and sound for the game. The SoundManager has two children, Music and SFX, which store all music and sounds as AudioSources. The game’s music is separated into individual loopable tracks of equal length. These tracks are then played back synchronously to create a “full song”. The benefit of this implementation is that tracks can be added or subtracted to change the tone/feeling of the resulting song. The hook tracks are present in both the mortal and spiritual planes. When the PC is in the mortal plane, the beat and bass tracks are added, and the harmony tracks removed. When in the spiritual plane, the beat and bass tracks are removed, and the harmony added. The result is two cohesive songs with different moods, which can be swapped to/from at any time. The game’s SFX are either played randomly (in the case of ambient bird calls, wind, and rain), or on certain triggers (i.e., when the PC passes into another plane, an arpeggio is played).

### Spirits and Dialogue&#x20;

There are 6 spirits in the game, each with their own unique dialogue. Since this was a game jam with limited time for implementation, we needed a quick way to handle dialogue for all of the spirits. I therefore implemented spirit dialogue using XML files, and a custom XML Reader script. Each spirit has a corresponding XML file, containing the following tags:&#x20;

* \<Dialogue> → A container tag for all of a spirit’s dialogue.
* \<Line> → A line of dialogue. Lines are shown in sequence, so the XML Reader simply  stores them in a List\<string>, which is passed to the spirit’s script.&#x20;
* \<Hint> → A hint for the player to find an undiscovered spirit. The player is allowed to find  spirits in any order, so each spirit needs to have a hint for all other spirits. When the  player discovers a spirit, that spirit chooses an undiscovered spirit to hint at. The spirit to  which a hint pertains is stored in the attribute “ghostName”. Hints are stored by the XML  Reader in a Dictionary\<string,string>, where the key is the “ghostName”, and the value is  the hint text.

<image url="/uploads/dialogue-xml.png" caption="An example of the structure of a dialogue XML file." />

### Evaluation&#x20;

Overall, I believe that with Hereafter, we succeeded in our goal of creating two distinct  atmospheres using art and music. However, a shortcoming that all team members identified is  the lack of a compelling game mechanic. It would make more sense to call Hereafter a sort of  “experience” rather than a game, for this reason. This lack of mechanical interest is likely due to  the short development schedule. If afforded more time to further design the core gameplay, we  might have chosen to make the game a platformer. What if the game was split into levels, in  which the player had to circumvent obstacles by passing to/from the mortal/spiritual planes? However, having said all of this, I still find Hereafter to be an affecting experience because of  the effort we made to create a dark but whimsical atmosphere.
