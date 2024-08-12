function toggleHamburgerItems() {
    var linksList = document.getElementsByClassName("hamburger-pages")[0];
    if (linksList.style.display === "flex") {
        linksList.style.display = "none";
    }
    else {
        linksList.style.display = "flex";
        var icon = document.getElementById("hamburger-link");
        icon.style.padding = "auto";
    }
    return;
}

function hideHamburgerItems() {
    var linksList = document.getElementsByClassName("hamburger-pages")[0];
    linksList.style.display = "none";
    return;
}