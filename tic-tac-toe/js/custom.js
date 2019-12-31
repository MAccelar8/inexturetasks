// console.log("hello")

var playercheckedArray = [];
var computercheckedArray = [];
var globalcheckedArray = [];
isComputerPlaying = 0;

var chart = ["tr", "tc", "tl", "mr", "mc", "ml", "br", "bc", "bl"];

var zeroCross;

function greenClicked() {
  zeroCross = 1;
  document.getElementsByClassName("player-select")[0].style.display = "none";
}

function redClicked() {
  zeroCross = 0;
  isComputerPlaying = 1;
  setTimeout(computerPlay, 2000);
  document.getElementsByClassName("player-select")[0].style.display = "none";
}
// var checkResult = []

// function dblclick(Obj){

//     // console.log("Object ID: "+Obj.id);

//     checkedArray.push(Obj.id);
//     Obj.style.backgroundColor = "red";

//     // console.log("Array Value : " + checkedArray.toString())
// }

function clickevent(Obj) {
  // Obj.removeEventListener("onclick",clickevent)
  // $("#"+Obj.id.toString()).unbind();
  if (!isComputerPlaying) {
    if (!globalcheckedArray.includes(Obj.id)) {
      isComputerPlaying = 1;
      if (zeroCross) {
          Obj.getElementsByTagName("i")[0].classList.add("far","fa-circle");
        // Obj.style.backgroundColor = "green";
      } else {
        Obj.getElementsByTagName("i")[0].classList.add("fas","fa-times");
        // Obj.style.backgroundColor = "red";
      }
      playercheckedArray.push(Obj.id);
      globalcheckedArray.push(Obj.id);
      if (checkResult(1) == 1) {
        console.log("player return");
        return;
      }
      if (globalcheckedArray.length < 9) {
        setTimeout(computerPlay, 500);
      } else {
        setTimeout(showDrawText, 1000);
      }
    } else {
      alert("That box is checked");
    }
  } else {
    alert("please let the computer play");
  }
}

function computerPlay() {
  var randomNumber = Math.floor(Math.random() * 9) + 1;
  console.log("Random Number: " + randomNumber);
  if (globalcheckedArray.includes(chart[randomNumber - 1])) {
    computerPlay();
    return;
  }

  console.log(chart[randomNumber - 1] + "selected");

  if (!zeroCross) {
    // document.getElementById(chart[randomNumber - 1]).style.backgroundColor =
    //   "green";
      document.getElementById(chart[randomNumber - 1]).getElementsByTagName("i")[0].classList.add("far","fa-circle");
  } else {
    // document.getElementById(chart[randomNumber - 1]).style.backgroundColor =
    //   "red";
      document.getElementById(chart[randomNumber - 1]).getElementsByTagName("i")[0].classList.add("fas","fa-times");
  }

  computercheckedArray.push(chart[randomNumber - 1]);
  globalcheckedArray.push(chart[randomNumber - 1]);
  if (checkResult(0) == 0) {
    return;
  }
  isComputerPlaying = 0;
  if (globalcheckedArray.length == 9) {
    setTimeout(showDrawText, 1000);
  }
}



function showDrawText() {
  document.getElementById("winner-text").innerHTML = "Its a Draw";
  popup.style.display = "block";
  return;
}

// function showWinnerText(isPlayer) {

//   if (isPlayer) {
//     document.getElementById("winner-text").innerHTML = "Congo You won!!!";
//     popup.style.display = "block";
//     return;
//   } else {
//     document.getElementById("winner-text").innerHTML = "Computer Won!!!";
//     popup.style.display = "block";
//     return;
//   }
// }


function showPlayerwinner(){
    document.getElementById("winner-text").innerHTML = "Congo You won!!!";
    popup.style.display = "block";
    return;
}

function showCompWinner(){
    document.getElementById("winner-text").innerHTML = "Computer Won!!!";
    popup.style.display = "block";
    return;
}


function checkResult(player) {
  var result = document.getElementById("resultdisplay");
  var popup = document.getElementById("popup");
  if (player) {
    if (
      playercheckedArray.includes("tr") &&
      playercheckedArray.includes("tc") &&
      playercheckedArray.includes("tl")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("ml") &&
      playercheckedArray.includes("mc") &&
      playercheckedArray.includes("mr")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("br") &&
      playercheckedArray.includes("bc") &&
      playercheckedArray.includes("bl")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("tl") &&
      playercheckedArray.includes("ml") &&
      playercheckedArray.includes("bl")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("tc") &&
      playercheckedArray.includes("mc") &&
      playercheckedArray.includes("bc")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("tr") &&
      playercheckedArray.includes("mr") &&
      playercheckedArray.includes("br")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("tl") &&
      playercheckedArray.includes("mc") &&
      playercheckedArray.includes("br")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
    if (
      playercheckedArray.includes("tr") &&
      playercheckedArray.includes("mc") &&
      playercheckedArray.includes("bl")
    ) {
      setTimeout(showPlayerwinner, 1000);
      return 1;
    }
  } else {
    if (
      computercheckedArray.includes("tr") &&
      computercheckedArray.includes("tc") &&
      computercheckedArray.includes("tl")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("ml") &&
      computercheckedArray.includes("mc") &&
      computercheckedArray.includes("mr")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("br") &&
      computercheckedArray.includes("bc") &&
      computercheckedArray.includes("bl")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("tl") &&
      computercheckedArray.includes("ml") &&
      computercheckedArray.includes("bl")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("tc") &&
      computercheckedArray.includes("mc") &&
      computercheckedArray.includes("bc")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("tr") &&
      computercheckedArray.includes("mr") &&
      computercheckedArray.includes("br")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("tl") &&
      computercheckedArray.includes("mc") &&
      computercheckedArray.includes("br")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
    if (
      computercheckedArray.includes("tr") &&
      computercheckedArray.includes("mc") &&
      computercheckedArray.includes("bl")
    ) {
      setTimeout(showCompWinner, 1000);
      return 0;
    }
  }
  return 5;
}

function getRandomArbitrary() {
  return Math.random() * 8 + 1;
}

function pagereload() {
  window.location.reload();
}

function testingfn() {}
