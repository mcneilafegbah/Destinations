# DESTINATION website testing


![Image Description](/assets/images/mockuuu1.PNG)
Table of contents
## 1. Automated Testing
   * 1.1 HTML Code Validating
 * 1.2 CSS Code Validating
## 2. Manual Testing
* 2.1 Manual testing desktop
* 2.2 Manual testing mobile
## 3. JavaScript Specific Testing
 * This section is the most detailed and contains all the information from all of the testing of each Javascript file.


* 1.1 HTML Code Validating
- All of the HTML files were tested on the <a href="https://validator.w3.org/" target="_blank">W3C HTML Markup Validation website</a>
- All of the files came back clear with the result of "Document checking completed. No errors or warnings to show".

![Image Description](/assets/images/html-test.PNG)

## Manual Testing
All desktop testing was carried out on Chrome, FireFox and Edge.

The testing below was carried out on all pages Dublin, Cork & Galway. To stop duplication this document will refer to testing each item below only once but each test has been carried out identically on each city page.

### Navbar

* Have clicked on the Destination title in the middle of the Navbar and the Home icon, confirm it brings the user back to the index.html landing page.
* Have clicked on each item in the Navbar and can confirm the page then brings to user to that section.
* Can confirm on smaller screen sizes and mobile devices the list items in the Navbar collapse and now appear as a hamburger menu. When pressed the menu expands to show items.
 
 ### Popular destinatioon Session

* When the screen is shrunk to a smaller size, or when the user is viewing on a mobile device the images adjust to size

### Skyscanner Widget

* The skyscanner widget has been coded so the airport nearest to each city is already pre populated. The user only needs to enter there airport of origin and they dates they are looking to travel.

* When the user begins to type their airport of origin the widget will pre populate as they type.
* When the user enters their details and clicks search flights a new page will open on the main skyscanner website. This redirect is also mentioned in the text above so the user knows what to expect.
* There is an ability for Skyscanner approved partners to incorporate the Skyscanner booking engine onto their page however as this is only a small project it was not possible to implement this feature as we are not an approved travel partner.

### 7. Google Map

* The map loads correctly on every page with the correct zoom  and Co-ordinates  set.
* When the user clicks on the "Select a place type" the drop down list appears with the categories of Hotels, Bars, Restaurants and Tourist Attractions.
* Each category has a marker icon 
* When you click on a marker the info window will open above it displaying the Name, Address, Phone Number, About & website hyperlink for each place.
* When the user selects a different category the previous markers will all clear from the map and the new ones will appear. This was done so the screen doesn't end up cluttered and the user is only seeing markers relative to what category they have selected.

9. Contact Us Form

* I have used Email JS for this contact us form. When the user sends an email via the website they will receive a pop up notification confirming their message has been sent.
* I will also receive an email with the users message and details. First name and e-mail address are required fields and the message will not send unless these fields have been populated.
* The user will also receive an automated email from the site confirming their message has been received and confirms someone will be in contact with them soon.
* I am using the free Email JS service and not the paid subscription one so one factor i thought that may be causing this could be the day/time that the email is sent/replied to. At peak times there may be a lot of sites using the service and this could be leading to the delay.

The incoming message that the site receives from the user is always received straight away.

### The Footer

* The footer of each page contains contact information and Subscribe option

### Manual testing Mobile
* Navbar
- When viewing on a tablet horizontally the Navbar will display all of the list items the same as a desktop.
- When held vertically on a tablet the Navbar will display with the hamburger menu in place.
- On mobile phones whether held horizontally or vertically the Navbar will always appear as a hamburger menu. When pressed the hamburger menu expands to show the list items.
Have clicked on the Destination on the navbar and  confirm it brings the user back to the index.html landing page.


### Popular Destination

 * When the tablet is held horizontally images are displayed larger
* When the tablet is held vertically and on mobile phones the images shrink

### Skyscanner Widget

* The Skyscanner widget on mobile devices works the same was as it does on desktop.
* The widget is responsive so the layout will automatically adjust depending on screen size.


### Google Map

* The Google Map opens and functions the exact same way it does on desktop.
* On mobile devices the user must use 2 fingers to move and adjust the map as is normal on most mobile devices. This allows the user to drag the page up and down even if they are doing so by holding 1 finger on the map.

### Contact Us Form

* The contact us form works exactly the same on mobiles and tablets as it does on desktops.

### The Footer

The footer works exactly the same on mobiles and tablets as it does on desktops.

## Javascripts

### The scripts
* This file contains the JavaScript for the hamburger navbar,which displays on mobile and tablet view 

* TESTING OF THE script.JS FILE
The testing for the app.js file was carried out on <a href= "https://jshint.com/" target="_blank" >JShint.com </a>The results from the test were as follows:

 ![Image Description](/assets/images/script.PNG)

 * TESTING OF THE cancun-maps/ instanbul-map/paris-map/santorini-map.JS FILE

 The testing for the app.js file was carried out on <a href= "https://jshint.com/" target="_blank" >JShint.com </a>The results from the test were as follows:

 <i>Note: As the functional code for each of these files is the same the JShint has produced the same report for each city page test. To avoid repetition i will list below the results once, but the results apply to each of the map files.

 ![Image Description](/assets/images/cancun.PNG)
 