function changeToLOGOUT(element) {
    element.innerHTML = "Logout"
}
function hide(element) {
    element.remove()
}

var numberoflikes = 13
var btn = document.querySelector(".btn");
function changeBtnNumberOfLikes() {
    numberoflikes += 1
    btn.innerText = numberoflikes+" likes";
    return numberoflikes
}
numberoflikes = changeBtnNumberOfLikes()

var a = ["queloque", "gaa", "gaaaaax2", 1, 2, 3, 4, 5]

// var player = {
//     left: 450,
//     top: 620
// }
// function drawPlayer(){
//     content = "<div class = 'player' style='left:"+player.left+"px"+"; top:"+player.top+"px"+"'></div>";
//     document.getElementById("players").innerHTML = content;
// }