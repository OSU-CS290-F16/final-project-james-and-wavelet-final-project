#Final Project

**James Luo and Wavelet Wang**

*General Summary*

A Javascript canvas that allows for drawing with a cursor and saving locally on the host computer. It would allow the user to change colors and sizes, operating essentially as a very basic microsoft paint. 
Possible additions
 * There might be implementation for differing backgrounds, “Graph paper, line paper, etc.”. 
 * There could also be some kind of rudimentary multi-media support, something like adding photo’s etc. but that might be outside the scope of the project.


**Client Interface:**
There will probably be just one page, with most of it being taken up by the drawing board. Something similar to a navbar near the side of the page will allow for changes to be made to the background, brush color, brush size, etc.  A navbar near the top would be have buttons to allow the user to clear the board, navigate through and open or delete previously saved drawings, and save the current drawing. This could basically be summed up as “Clear”, “Browse” and “Save” buttons. The “Browse” function might open a new page specifically for navigating through saved drawings, or it might just overlap the original page similar to the modal in assignment 2. Similarly, the “Save” button would probably open up a modal asking for a name to save the drawing under, maybe while validating that the name isn’t taken already. An additional function might be to allow the user to draw on multiple boards at once, without opening up an entirely new window/reopening the page. 


**Data:**
Previous drawings will be stored/saved so that they can be accessed on subsequent visits. The user can browse through stored drawings, and delete or open any of them. Opening a drawing brings it to the drawing board, allowing it to be edited. 
