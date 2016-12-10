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
There will probably be just one page, with most of it being taken up by the drawing board. Something similar to a navbar near the side of the page will allow for changes to be made to the background, brush color, brush size, etc.  A navbar near the top would be have buttons to allow the user to clear the board, navigate through and open or delete previously saved drawings, and save the current drawing. This could basically be summed up as “Clear”, “Browse” and “Save” buttons. The “Browse” function might open a new page specifically for navigating through saved drawings, or it might just overlap the original page similar to the modal in assignment 2. Similarly, the “Save” button would probably open up a modal asking for a name to save the drawing under, maybe while validating that the name isn’t taken already. An additional function might be to allow the user to draw on multiple boards at once, without opening up an entirely new window/reopening the page. 

---
**Installation and Usage**

Simply run `npm install` then `npm start`. After that simply navigate to your local [port] (http://localhost:3000/)

--
Known Bugs

  *  The custom profiles don't update in live time from the JSON. This is a known bug most likely to do with the asynchronus nature of our file system. Sorry.
