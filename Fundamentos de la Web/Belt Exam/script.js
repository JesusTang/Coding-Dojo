

function cambiarVersion(element) {
        if(element.value == "5.2") {
            window.location.href = "https://getbootstrap.com/"
        }
        else if (element.value == "4.3") {
            window.location.href = "https://getbootstrap.com/docs/4.3/getting-started/introduction/"
        }
        else if (element.value == "4.2") {
            window.location.href = "https://getbootstrap.com/docs/4.2/getting-started/introduction/"
        }
        else if (element.value == "4.1") {
            window.location.href = "https://getbootstrap.com/docs/4.1/getting-started/introduction/"
        }
        else if (element.value == "4.0") {
            window.location.href = "https://getbootstrap.com/docs/4.0/getting-started/introduction/"
        }
}


function errorMessage() {
    setTimeout(alertError, 1000);
}
function alertError() {
        alert("Hubo un problema para iniciar la descarga, por favor inténtelo de nuevo en unos momentos")
}


function remove(id) {
    var element = document.querySelector(id);
    element.remove();
}

function goToInstallDocs() {
    window.location.href = "https://getbootstrap.com/docs/4.3/getting-started/download/"
}
function goToDocs() {
    window.location.href = "https://getbootstrap.com/docs/4.3/getting-started/introduction/"
}
function goToThemes() {
    window.location.href = "https://themes.getbootstrap.com/"
}
