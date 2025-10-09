# section-002-Slices
Senior Project repo for Ava Drewer, Ryan Loftus, and Turner Inge.

To Run game on device Follow these steps.
  1. Open the index.html on a live server.
  2. That's it! Press begin to start the daily slice or use the nav bar to look at explore page or sign in!
 
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
