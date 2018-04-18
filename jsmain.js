
// Haha mp3

var beepOne = $("#ha-ha")[0];
$("#rimshot-hover-sound").mouseenter(function() {
    beepOne.play();
});

var rimShotAudio = document.getElementById("ha-ha");

function playRim() {
    rimShotAudio.play();
}
var hahaItem = document.getElementById("rimshot-hover-sound");
hahaItem.addEventListener("mouseover", rimShotAudio.playRim);

//Easy

var easyOne = $("#easy")[0];
$("#hover-easy").mouseenter(function() {
  easyOne.play();
});

var rimEasy = document.getElementById("easy");

function playRim2() {
  rimEasy.play();
}

var easyItem = document.getElementById("hover-easy");
easyItem.addEventListener("mouseover", rimEasy.playRim2);


//Medium

var mediumOne = $("#medium")[0];
$("#hover-medium").mouseenter(function() {
    mediumOne.play();
});

var rimMedium = document.getElementById("easy");

function playRim3() {
    rimMedium.play();
}

var mediumItem = document.getElementById("hover-medium");
easyItem.addEventListener("mouseover", rimMedium.playRim3);

//Hard

var hardOne = $("#hard")[0];
$("#hover-hard").mouseenter(function() {
    hardOne.play();
});

var rimHard = document.getElementById("hard");

function playRim4() {
    rimHard.play();
}

var hardItem = document.getElementById("hover-medium");
easyItem.addEventListener("mouseover", rimHard.playRim4);

//Super Hard

var superOne = $("#superhard")[0];
$("#hover-shard").mouseenter(function() {
    superOneOne.play();
});

var rimSuper = document.getElementById("superhard");

function playRim5() {
    rimSuper.play();
}

var superItem = document.getElementById("hover-shard");
superItem.addEventListener("mouseover", rimSuper.playRim5);

