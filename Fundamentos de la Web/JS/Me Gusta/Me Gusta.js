
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var numberoflikes1 = 8
var numberoflikes2 = 11
var numberoflikes3 = 8


function changeBtnNumberOfLikes1() {
    numberoflikes1 += 1
    btn1.innerText = numberoflikes1+" like(s)";
    return numberoflikes1
    
}
numberoflikes1 = changeBtnNumberOfLikes1()

function changeBtnNumberOfLikes2() {
    numberoflikes2 += 1
    btn2.innerText = numberoflikes2+" like(s)";
    return numberoflikes2
}
numberoflikes2 = changeBtnNumberOfLikes2() 

function changeBtnNumberOfLikes3() {
    numberoflikes3 += 1
    btn3.innerText = numberoflikes3+" like(s)";
    return numberoflikes3
}
numberoflikes3 = changeBtnNumberOfLikes3()
