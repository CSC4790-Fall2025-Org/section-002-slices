section-002-Slices

Senior Project repo for Ava Drewer, Ryan Loftus, and Turner Inge.

To run game simply press this link
  https://section2slices.netlify.app/
  

   
--DEV--

To Add a Game: Create a folder in the 'games' directory Add a .jsx file with your game in that folder, along with any other files needed make sure your game's export function looks like:

export default function FileName({ onComplete }) { ... }

In App.jsx:

import {FileName} from "./games/{folder}/{FileName}.jsx" Add {FileName} to the const games list
