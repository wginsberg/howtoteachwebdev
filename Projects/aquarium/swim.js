var direction = 1;
var speed = 10;

function moveFish(fish) {
  var fishLeft = parseInt(fish.css("left"))
  var fishRight = fishLeft + parseInt(fish.css("width"))
  if (fishRight >= fish.parent().width()) {
    direction = -1;
  }
  if (fishLeft < 20) {
    direction = 1;
  }
  fish.css("left", fishLeft + direction * speed + "px");
}

function updateAllFish() {
  moveFish($("#fish"));
}

window.setInterval(updateAllFish, 100);
