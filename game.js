//Hannah Youssef
//December 5, 2016
//Final Project
//game.js - controls the game's logic, inventory, and global variables

var scoreChart = 500;

function init() {
  //calls the starting function
  updateDisplay(locations_0);
}

//game items stored in global array
var items = new Array();
items[0] = itemNotebook;
items[4] = itemToupee;
items[5] = itemPoster;
items[10] = itemMicrophone;

var inventory = new Array();

//displays the current inventory
function btn_displayInventory() {
  var msg = "Inventory: " + inventory;
  updateDisplay(msg);
}

//function for picking up an item and storing it in the inventory
function pickUpItem(item) {
    inventory.push(items[currentLocation].name);
    updateDisplay("Taken " + items[currentLocation].name + ".");
    items[currentLocation].isTaken = true;
  }

function itemCheck(nextLocation) {
  //puzzle element that checks for items when proceeding certain rooms
  //error message if user tries to move to certain location withut having necessary items
      if (nextLocation === 8) {
        if (itemNotebook.isTaken) {
          updateDisplay(locations[nextLocation]);
          currentLocation = nextLocation;
        } else {
            updateDisplay("You need a something to take notes on. Go back to Location 0 to take the notebook.");
          }
      }
      else if (nextLocation === 10) {
        if (itemPoster.isTaken) {
          updateDisplay(locations[nextLocation]);
          currentLocation = nextLocation;
        } else {
            updateDisplay("You need a poster to show your political candidate preference. Go back to Location 5 to take a poster.");
          }
      }
      else if (nextLocation === 12) {
        if (itemMicrophone.isTaken && itemToupee.isTaken) {
          updateDisplay(locations[nextLocation]);
          updateDisplay("Your final score is " + scoreChart +
                        ".");
          currentLocation = nextLocation;
        } else {
          //if the user does not have all of the items, they cannot finish the game
            updateDisplay("You cannot go there because " +
                          "you're still missing Donald Trump's toupee and Anderson Cooper's microphone. " +
                          "Go back to Location 4 for the toupee and Location 10 for the microphone. " +
                          "Collect all items before proceeding!");
          }
      } else {
          updateDisplay(locations[nextLocation]);
          currentLocation = nextLocation;
        }
}

//displays message and location onto textarea
function updateDisplay(message) {
  var message = message;
  var userInput = document.getElementById("taGame");
  userInput.value = message + "\n\n" + userInput.value;
}

function btn_scoreLog() {
  updateDisplay("Current score: " + scoreChart);
}

//takes String input directly from command bar (what the user typed in)
function btn_go() {
  txtCommand.value = txtCommand.value.toLowerCase();
  btn_command(txtCommand.value);
}

function help() {
  updateDisplay("------------------------------------------------------------------------------------------------------------------------------ \n" +
                'Use the directional buttons below, or type "N, S, W, E, n, s, w, e, north, south, west, east" in the command bar.' + '\n\n' + 
                'You can also take items by typing "take" in the command bar if applicable. \n\n' +
                'You are initially given a score value of 500 and for every time you ATTEMPT to move, you lose one point, so be careful! \n\n' +
                'Compete with your friends, and whoever gets closest to 500 wins! \n' +
                '-------------------------------------------------------------------------------------------------------------------------------');
}

