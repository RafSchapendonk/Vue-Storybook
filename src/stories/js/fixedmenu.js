var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
var scrollDirection = 'down';
window.addEventListener('load', function () {
    fixedMenu();
});

window.addEventListener('scroll', function () {
    fixedMenu();
});

function fixedMenu() {
    var topNavbar = document.getElementById("topNavbar");
    var bottomNavbar = document.getElementById("bottomNavbar");
    var topNavbarOffsetHeight = topNavbar.offsetHeight;
    var bottomNavbarOffsetTop = bottomNavbar.offsetTop;

    if (window.pageYOffset >= bottomNavbarOffsetTop && bottomNavbarOffsetTop != 0) {
        document.body.classList.add("fixed-nav");
    } else if (window.pageYOffset - topNavbarOffsetHeight < bottomNavbarOffsetTop) {
        document.body.classList.remove("fixed-nav");
    }
}
