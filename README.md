# tsprence.github.io

Discussion of the design:
When starting this project I already had in mind a general idea of how a smart mirror should be designed, that being: minimalist and so intuitive that it can be operated without ever requiring the user to consult a manual. 

![](images/p2.Tyler.Sprencel.png)

Discussion of the sketch:
The sketch mostly reiterates my discussion of the design with a few additional details. I specify that there will only be five icons at the bottom of the mirror, that all info will come from widgets and loaded from a json file, and that there will be a close window icon at the top right side of an icon once clicked.

Discussion of the implementation:
My mirror was implemented using p5js. To achieve a minimalist design, I started with only five icons on the bottom of the mirror so that the user could choose to use them or ignore them entirely. If the icon is clicked, the mirror would then display a widget with the pertinent information, and to close it the user would simply click the red close icon that would appear on the icon that was originally clicked. All widgets will have the ability to be dragged across the mirror by the user. Two classes were made: one for the close window icon so that I could place the same icon on several icons, and a drag rectangle class so that all widgets could be draggable. All icons are images and all widgets are rectangles. The draw function is mainly comprised of several if statements where if it is true that a specific icon has been clicked then the correct widget will be displayed. To check which icon is clicked, I created a function to check based on the given size and position arguments given.

Discussion of the advanced features:
The advanced feature implemented in this mirror was draggable objects. By making the Drag_Rect class I was able to create a rectangle and give it a starting postition, a width, a heigth, and text, and by using certain functions the user can click on a widget and drag it across the screen and release it once the mouse button is no longer being held down. 



https://user-images.githubusercontent.com/101754821/201981568-a25a70a1-116d-44d5-a8d6-7d05c1d8223a.mov


