# IMPRINT
### A Broad View On The Impact

IMPRINT is an antique-themed mystery game where everything seems odd and suspicious.

You just wanted to learn about the technologies that impacted human evolution, but something feels off. There seems to be a deeper mystery revolving around the game itself...

## For Terra Reviewers

- The game is intentionally designed without conventional navigation. Exploration is the experience.
- If you find yourself unable to progress, read how to play.
- This project wasn't originally planned as a game. It evolved into one (read the Philosophy section).
- This V2 is continued from my week 2 version- 
- (V1 was approved- Thanks!! and it had some flaws which reviewer asked me solve and I did)
- (My V1 Netlify deploy was 83MBs and this V2 is 11MBs, so yeah there were some heavy optimization)
-Initially, I rewrote the JS because it loaded painfully slow and
was getting messy in the code, so trail and error, and I have my so called - Dialouge Based Game Engine -
- Next I changed most of V1 dialogues to match the V2 theme.

## How to play?
-Just open the demo link
-And you will see a screen explaining how to play this game
-It is a maze so... If you feel lost- It is intentional
-READ dialogues, it is the only help, And pay ATTENTION TO CHANGES
-In cheat code section- there is a guide if you can't figure out


## How to play locally?
-If deployement is not working, you can always-
1. Clone repo, zip it, just save it in your computer somehow
2. I assume you have vs code, if not then find a way to open index.html with a server
3. In VS Code- open folder (and authorize in order to use extentions) and start index.html in live server

## Features

- **Interactive scenes** — Move between interconnected environments without navigating to a separate website page.
- **Object-based interactions** — Clickable objects can open dialogues, reveal information, or trigger scene transitions.
- **Dialogue system** — Objects present introductory text and choices, with interactions that can change depending on previous visits.
- **Historical archive** — Explore information about inventions and machines, including early computing technologies.
- **Progressive exploration** — Returning to a scene or interacting with an object again can produce a different experience.
- **Minimalist presentation** — An intentionally restrained interface that prioritizes the environment and the act of exploration.

## Built With

- HTML
- CSS
- Vanilla JavaScript

The project uses a lightweight, custom-built scene and dialogue system without a frontend framework.

## How It Works

IMPRINT loads individual HTML scene fragments into a shared scene container. JavaScript handles scene transitions, object interactions, dialogue progression, and the rendering of archive information.

The main components include:

- **Scene loader** - Fetches and displays scene HTML without a full-page reload.
- **Scene state** - Tracks scene visits and previously interacted-with objects during the current session.
- **Dialogue system** - Manages introductory text, interaction choices, actions and
    It's meta data dictates how game behaves...
-**Render & Interaction** - handles clicks and rendering of dialogues and info page's info rendering

## Project Philosophy

IMPRINT wasn't supposed to be a special project. But the real-life circumstances surrounding its creation made it special to me.

It started as a NEWSPAPER PRESS which just published articles on technology 
but my imagination led it to become a game... and to honor the initial version the acrhive is still preserved...

As I worked on it, it became something different: a minimalist, non-violent thriller with elements of mystery, an odd atmosphere, and perhaps even a nihilistic undertone—(as my friends have labelled it.)

It wasn't planned fully from the beginning. The project became what it is through the process of making it.
But one thing was sure - FORESHADOWING - you can feel it on the first playthrough.

## Status

IMPRINT is a work in progress. Its scenes and exploration mechanics are still being developed.

---

**IMPRINT — A Broad View On The Impact.**