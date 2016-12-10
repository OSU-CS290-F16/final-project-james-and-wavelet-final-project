#Drawing Pad

**James Luo and Wavelet Wang**

##General Summary

A Javascript canvas that allows for drawing with a cursor and saving locally on the host computer. The size of the canvas exactly 1650 by 1275px means that it's exactly half the size of the standard 8 1/2 by 11 sheet of US letter printer paper.

Core features:

 * JSON based custom color saving.
 * Sketch pad that allow for mouse movement to draw on the page
 * Clearable writing space
 * Export to jpeg on your computer to print
 * Change and delete your custom color profiles
 * Change size of cursor

---
**Client Interface:**
The default page is the index/home page, where you can select color palettes via the drop down menu. Selecting New Color Palette or clicking the new on the navbar at the top will open a drawing pad with a black custom color palette. Selecting one of the premade palettes will load a drawing pad with a custom color palette with colors dependant on the colors.json file. In the drawing pad, You can select colors by clicking on the squares in the color picker or custom palette sections. You can also create colors by inputting numbers [0,255] into the custom color inputs. Clicking go will change the color you're using (current color) to the custom color, while clicking Save Custom Color will move the custom color into the custom palette. The Export button on the right of the navbar will allow you to name and save the canvas as a .jpeg. The Save button next to it will save the current custom palette into colors.json, so that it can be used later. 

---
**Installation and Usage**

Simply run `npm install` then `npm start`. After that simply navigate to your local [port] (http://localhost:3000/)

--
Known Bugs

  *  The custom profiles don't update in live time from the JSON. This is a known bug most likely to do with the asynchronus nature of our file system. Sorry.
