//Hannah Youssef
//November 7, 2016
//Project 4
//locations.js

//Location example
function Location(_id, _name, _description, _hasItem) {
  //Attributes
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.hasItem = _hasItem;
  this.item = function() {
    if(this.hasItem && locations[nextLocation]) {
      return items[nextLocation].description;
    } else {
      return "";
      }
  }
  
  this.toString = function() {
    var returnVal = "";
    returnVal = this.description + " " + this.item();
    return returnVal;
  }
}

//Item example
function Item(_id, _name, _description, _isTaken) {
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.isTaken = _isTaken;
}

//Location areas
//
//Location 1
var locations_0 = new Location();
locations_0.id = 0;
locations_0.name = "Center stage";
locations_0.description = "You are in the center of the stage between the two candidates. " +
                          "Donald Trump is west of you and Hillary Clinton is east of you.";
locations_0.hasItem = true; //there is an item at this location.

//Location 1
var locations_1 = new Location();
locations_1.id = 1;
locations_1.name = "Stage crew";
locations_1.description = "You are where the stage crew is. " +
                          "They are making sure the stage is well-lit and functioning properly.";

locations_1.hasItem = false; //there is no item at this location.

//Location 2
var locations_2 = new Location();
locations_2.id = 2;
locations_2.name = "Hillary Clinton";
locations_2.description = "You are standing at Hillary Clinton's podium. " + 
                          "Bill and Chelsea Clinton are east of her.";
locations_2.hasItem = false; //there is no item at this location.

//Location 3
var locations_3 = new Location();
locations_3.id = 3;
locations_3.name = "Moderator's table";
locations_3.description = "You are now at the moderator's table. " +
                          "Chris Wallace is very stressed because the candidates keep talking over each other.";
locations_3.hasItem = false; //there is no item at this location.

//Location 4
var locations_4 = new Location();
locations_4.id = 4;
locations_4.name = "Donald Trump";
locations_4.description = "You are standing at Donald Trump's podium. " +
                          "He is in the middle talking about the wall around Mexico he is going to build if he becomes president.";
locations_4.hasItem = true; //there is an item at this location.

//Location 5
var locations_5 = new Location();
locations_5.id = 5;
locations_5.name = "Audience";
locations_5.description = "You are sitting in the audience. " +
                          "Everyone is on the edge of their seats with anticipation and excitement.";
locations_5.hasItem = true; //there is an item at this location.

//Location 6
var locations_6 = new Location();
locations_6.id = 6;
locations_6.name = "Bill & Chelsea Clinton";
locations_6.description = "You are standing with Bill & Chelsea Clinton behind the side curtain. " +
                          "They are excited for Hillary's remarks.";
locations_6.hasItem = false; //there is no item at this location.

//Location 7
var locations_7 = new Location();
locations_7.id = 7;
locations_7.name = "Melania Trump";
locations_7.description = "You are standing with Melania Trump backstage." +
                          "She is happy for her husband and very proud of him.";
locations_7.hasItem = false; //there is no item at this location.

//Location 8
var locations_8 = new Location();
locations_8.id = 8;
locations_8.name = "Trump's kids";
locations_8.description = "You are standing with Trump's children: " +
                          "Ivanka, Tiffany, Barron, Eric, and Donald Trump Jr. " +
                          "They are very proud of their father.";
locations_8.hasItem = false; //there is no item at this location.

//Location 9
var locations_9 = new Location();
locations_9.id = 9;
locations_9.name = "Secret service";
locations_9.description = "You are standing with Secret Service." +
                          "They are very serious and dedicated to keeping the candidates safe from harm.";
locations_9.hasItem = false; //there is no item at this location.

//Location 10
var locations_10 = new Location();
locations_10.id = 10;
locations_10.name = "Media";
locations_10.description =  "You are standing with the media and political commentators backstage." +
                            "They are recording and taking notes on what is going on in the debate.";
locations_10.hasItem = true; //there is an item at this location.

//Location 11
var locations_11 = new Location();
locations_11.id = 11;
locations_11.name = "Security";
locations_11.description =  "You are standing with security. " +
                            "They are very ready to detain or supress anyone that gets rowdy.";
locations_11.hasItem = false; //there is no item at this location.

//Location 12
var locations_12 = new Location();
locations_12.id = 12;
locations_12.name = "End room";
locations_12.description =  "Congratulations! You made it to the end of the political game!" + "\n\n" +
                            "Hit Refresh to restart the game. " +
                            "Wait until November 9 to see who won the presidency!";
locations_12.hasItem = false; //there is no item at this location.

//Item examples
var itemNotebook = new Item();
itemNotebook.id = 0;
itemNotebook.name = "Notebook";
itemNotebook.description = "There is a notebook and pen for you to take notes along your journey.";
itemNotebook.isTaken = false; 

var itemToupee = new Item();
itemToupee.id = 4;
itemToupee.name = "Toupee";
itemToupee.description = "Donald Trump's hair is awfully bushy today...";
itemToupee.isTaken = false;

var itemPoster = new Item();
itemPoster.id = 5;
itemPoster.name = "Political Poster";
itemPoster.description = "There is a political poster on the ground.";
itemPoster.isTaken = false;

var itemMicrophone = new Item();
itemMicrophone.id = 10;
itemMicrophone.name = "Microphone";
itemMicrophone.description = "Anderson Cooper is holding a microphone.";
itemMicrophone.isTaken = false;
