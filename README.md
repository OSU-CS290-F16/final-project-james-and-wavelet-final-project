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
**Details:**
The default page is the index/home page, where you can select color palettes via the drop down menu. Selecting New Color Palette or clicking the new on the navbar at the top will open a drawing pad with a black custom color palette. Selecting one of the premade palettes will load a drawing pad with a custom color palette with colors dependant on the colors.json file. In the drawing pad, You can select colors by clicking on the squares in the color picker or custom palette sections. You can also create colors by inputting numbers [0,255] into the custom color inputs. Clicking go will change the color you're using (current color) to the custom color, while clicking Save Custom Color will move the custom color into the custom palette. The Export button on the right of the navbar will allow you to name and save the canvas as a .jpeg. The Save button next to it will save the current custom palette into colors.json, so that it can be used later. As noted in the Known Bugs section, the custom palettes will not update live, so to see the new palettes, you have to save them, restart the server, and then open the drop down menu. The Delete button on the navbar routes the user to the Delete page, where they can select custom palettes via another drop down menu and delete them. Just like the home page, to see the changes you have to restart the server after deleting them. 

---
**Installation and Usage**

Simply run `npm install` then `npm start`. After that simply navigate to your local [port] (http://localhost:3000/)

--
Known Bugs

  *  The custom profiles don't update in live time from the JSON. This is a known bug most likely to do with the asynchronus nature of our file system. This applies to the drop down menus in both Home (index) and Delete. Sorry.
  *  Deleting all elements/palettes of colors.json makes getIn[0] invalid, and it becomes impossible to write onto it apparently. Originally, we had if(remove != 0){delete colors[remove];} in server.js (in  app.get('/delete/:set', function(req,res,next), replacing line 59) to stop it from removing the element with key == 0, but removed it to fix some other bugs and didn't have time to re-add it before the deadline.  
 *   Deleting a palette routes to non-existent page (/delete/{{key}}), since we used the path to determine which element to delete from colors.json. This means that every delete puts you in a 404 page, although aside from that it works as intended. 
