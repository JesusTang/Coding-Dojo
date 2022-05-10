function disappearCookieBar(id) {
    var element = document.querySelector(id);
    element.remove();
}

function createCookieBar() {
    document.getElementById("cookie").innerHTML = `
    <div id='cookie-bar'>
        <img src='cookie.png' alt='cookie'></img>
        <div class='cookie-bar-body'>
            <h2>Stop! Cookie Time</h2>
            <p>We use cookies (Sadly not the edible ones) to personalize content and ads, to provide social media features and to anaylse our traffic. <a href='#'>Read more...</a></p>
        </div>
        <button onclick='disappearCookieBar("#cookie-bar")' id='cookie-button'>I accept</button>
    </div>
    `
    console.log("se creo la cookie bar");    
}

function c2f(temperature) {
    return Math.round(9 / 5 * temperature + 32)+"°";
}

function f2c(temperature) {
    return Math.round(5 / 9 * (temperature - 32))+"°";
}


function cambiarTemperaturas(element) {
    for(var i=0; i<8; i++) {
        var tempSpan = document.querySelector("#t"+i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}

setTimeout(createCookieBar, 2000);