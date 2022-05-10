var requestSpan = document.querySelector("#requests")
var connectionSpan = document.querySelector("#connections")
var username = document.querySelector("#username")

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function decline(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function changeUsername() {
    username.innerText = "Allison White";
}