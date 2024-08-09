function toggleHamburgerItems() {
    var linksList = document.getElementById("hamburger-pages");
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
    var linksList = document.getElementById("hamburger-pages");
    linksList.style.display = "none";
    return;
}