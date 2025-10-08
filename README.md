# section-002-Slices
Senior Project repo for Ava Drewer, Ryan Loftus, and Turner Inge.

To Run game on local device Follow these steps.
  1. Once repo is cloned locally cd into the directory "games"
  2. Afterwards enter into the command line "npm install"
  3. Followed by "npm run dev"
  4. within the index.html file on line 30 following the "src=" replace the http link with the one given after you run dev.
  5. The begin functionality on the html should take to the game now!

--DEV--

To Add a Game:
Create a folder in the 'games' directory
Add a .jsx file with your game in that folder, along with any other files needed
make sure your game's export function looks like:

export default function FileName({ onComplete }) { 
  ... 
  }

In App.jsx:

import {FileName} from "./games/{folder}/{FileName}.jsx"
Add {FileName} to the const games list
