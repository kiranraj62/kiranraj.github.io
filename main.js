var worksBtn = document.getElementById("worksBtn"),
    aboutBtn = document.getElementById("aboutBtn"),
    contactBtn = document.getElementById("contactBtn"),
    themeBtn = document.getElementById("themeBtn"),
    themeIcon = document.getElementById("themeIcon"),
    myWorksPage = document.getElementById("myWorksPage"),
    aboutMePage = document.getElementById("aboutMePage"),
    contactMePage = document.getElementById("contactMePage"),
    myAgeSlider = document.getElementById("myAge"),
    myImage = document.getElementById("myImage"),
    myAgeText = document.getElementById("myAgeText"),
    style = document.documentElement.style;

function deactivateButtons(e, t) {
    worksBtn.className = "navItem", aboutBtn.className = "navItem", contactBtn.className = "navItem", myWorksPage.style.display = "none", aboutMePage.style.display = "none", contactMePage.style.display = "none", t.style.display = "flex", e.className = "navItem active"
}

function changeTheme() {
    "fas fa-moon" == themeIcon.className ? (style.setProperty("--primary", "#dee9ee"), style.setProperty("--textColor", "#787879"), style.setProperty("--sideBar", "#f7fdff"), themeIcon.className = "fas fa-sun") : (style.setProperty("--primary", "#1A1C1E"), style.setProperty("--textColor", "#D3DDE2"), style.setProperty("--sideBar", "#222527"), themeIcon.className = "fas fa-moon")
}

function changeImage(e) {
    switch (e) {
        case "11":
            myImage.src = "assets/4.png";
            break;
        case "15":
            myImage.src = "assets/3.png";
            break;
        case "19":
            myImage.src = "assets/2.png";
            break;
        case "23":
            myImage.src = "assets/1.png"
    }
    myAgeText.innerHTML = e
}

function showGif(e) {
    "ontouchstart" in document.documentElement && navigator.userAgent.match(/Mobi/) && ("none" == e.style.display ? e.style.display = "block" : e.style.display = "none")
}
worksBtn.addEventListener("click", function() {
    deactivateButtons(worksBtn, myWorksPage)
}), aboutBtn.addEventListener("click", function() {
    deactivateButtons(aboutBtn, aboutMePage)
}), contactBtn.addEventListener("click", function() {
    deactivateButtons(contactBtn, contactMePage)
}), themeBtn.addEventListener("click", function() {
    changeTheme()
}), myAgeSlider.addEventListener("input", function() {
    changeImage(myAgeSlider.value)
}), document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.countapi.xyz/update/efb88cd9-bf0b-4168-9d4e-94520cfc467c?amount=1").then(e => e.json()).then(e => {
        console.log(e.value)
    })
});