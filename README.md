# smart-home
What do you see on the page:
Page is responsible to display smart devices which belong to the living room.
Header: Logo and Menu button.
Banner with a refresh button. By clicking it you can update information for all devices connected to the system (I have simulated object generation on the server-side to make it more interactive).
Slide bar with connected devices. There are 3 required types and additional types that are currently not available.
The dashboard for draggable and resizable (d&r) device status windows.
How does it work?
When you hover on an active device in the list it enlarges and shows the name and availability status. On click appears a d&r window with device status. Data is generated randomly by the server and sent to the client-side. If you click again on an opened window it will update device status data, its position will remain the same. By default appended windows displayed as a flexible block, could be rearranged and revised.
Also, if you click on the refresh button on the banner the info for all opened devices windows will be updated.

Code organization:
app.js - server
helpers/device.js - to generate device objects
public/
helpers.js - to generate HTML out of json response from server
interaction.js - for drag and resize
requests.js - client part of communication with server
slider.js - for list slider
Used technologies:
The application is built using node.js and express.js for the server part;
JQuery and Vanilla JS on the client-side;
Interact.js for d&r;
HTML&CSS, responsive design;
A place for improvements:
1. Sometimes append windows could jump out parent div after closing one of the windows or window resizing. I believe it could be solved by an event listener that tracks window's x and y.
2. Update the appearance of the list elements by their status (connected/disconnected) on the server. (show disconnected devices in grey and active in normal color).
3. Connect light database for log showing
