window.onload = function() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount1){
            document.getElementById("result1").innerHTML = + localStorage.clickcount1;
        }else {
            localStorage.clickcount1 = 0;
            document.getElementById("result1").innerHTML = + localStorage.clickcount1;
        }
        if (localStorage.clickcount2) {
            document.getElementById("result2").innerHTML = + localStorage.clickcount2;
        } else {
            localStorage.clickcount2 = 0;
            document.getElementById("result2").innerHTML = + localStorage.clickcount2;
        }
        if (localStorage.clickcount3) {
            document.getElementById("result3").innerHTML = + localStorage.clickcount3;
        } else {
            localStorage.clickcount3 = 0;
            document.getElementById("result3").innerHTML = + localStorage.clickcount3;
        }
        if (localStorage.clickcount4) {
            document.getElementById("result4").innerHTML = + localStorage.clickcount4;
        } else {
            localStorage.clickcount4 = 0;
            document.getElementById("result4").innerHTML = + localStorage.clickcount4;
        }
        if (localStorage.clickcount5) {
            document.getElementById("result5").innerHTML = + localStorage.clickcount5;
        } else {
            localStorage.clickcount5 = 0;
            document.getElementById("result5").innerHTML = + localStorage.clickcount5;
        }
        if (localStorage.clickcount6) {
            document.getElementById("result6").innerHTML = + localStorage.clickcount6;
        } else {
            localStorage.clickcount6 = 0;
            document.getElementById("result6").innerHTML = + localStorage.clickcount6;
        }
        if (localStorage.clickcount7) {
            document.getElementById("result7").innerHTML = + localStorage.clickcount7;
        } else {
            localStorage.clickcount7 = 0;
            document.getElementById("result7").innerHTML = + localStorage.clickcount7;
        }
        if (localStorage.clickcount8) {
            document.getElementById("result8").innerHTML = + localStorage.clickcount8;
        } else {
            localStorage.clickcount8 = 0;
            document.getElementById("result8").innerHTML = + localStorage.clickcount8;
        }
        if (localStorage.clickcount9) {
            document.getElementById("result9").innerHTML = + localStorage.clickcount9;
        } else {
            localStorage.clickcount9 = 0;
            document.getElementById("result9").innerHTML = + localStorage.clickcount9;
        }
    }
};
function clearLocalStorage() {
    localStorage.clear();
    location.reload();
}
function clickCounter(buttonNumber) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage["clickcount" + buttonNumber]) {
            localStorage["clickcount" + buttonNumber] = Number(localStorage["clickcount" + buttonNumber]) + 1;
        } else {
            localStorage["clickcount" + buttonNumber] = 1;
        }
        document.getElementById("result" + buttonNumber).innerHTML = + localStorage["clickcount" + buttonNumber];
    } else {
        document.getElementById("result" + buttonNumber).innerHTML = "Browser does not support.";
    }
}