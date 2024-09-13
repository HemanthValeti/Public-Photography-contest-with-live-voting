window.onload = function () {
  if (typeof(Storage) !== "undefined") {
    for (var i = 1; i <= 9; i++) {
      if (localStorage["clickcount" + i]) {
        document.getElementById("result" + i).innerHTML = "";
      } else {
        localStorage["clickcount" + i] = 0;
      }
    }
    var totalLikes = localStorage.getItem("totalLikes") || 0;
    document.getElementById("totalLikes").innerHTML = totalLikes;
    if (parseInt(totalLikes) >= 3) {
      
    }
  } else {
    for (var i = 1; i <= 9; i++) {
      document.getElementById("result" + i).innerHTML = "Browser does not support.";
      document.getElementById("button" + i).disabled = true; 
    }
  }
};

function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}

function clickCounter(buttonNumber) {
  if (typeof(Storage) !== "undefined") {
    var totalLikes = parseInt(localStorage.getItem("totalLikes")) || 0;
    if (totalLikes < 3) {
      var count = parseInt(localStorage["clickcount" + buttonNumber]) || 0;
      if (count < 1) {
        localStorage["clickcount" + buttonNumber] = count + 1;
        document.getElementById("result" + buttonNumber).innerHTML = localStorage["clickcount" + buttonNumber];
        totalLikes++;
        localStorage.setItem("totalLikes", totalLikes);
        document.getElementById("totalLikes").innerHTML = totalLikes;
        if (totalLikes === 4) {
          alert("Your reached the limite.")
        }
      } else {
          alert("Your reached the limite.")
      }
    } else {
      alert("Your reached the limite.")
    }
  } else {
    document.getElementById("result" + buttonNumber).innerHTML = "Browser does not support local storage.";
  }
}

function disableAllButtons() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById("button" + i).disabled = true;
  }
}