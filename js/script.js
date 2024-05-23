$(document).ready(function(){

    // Header Scroll
    let nav = document.querySelector(".navbar");
    let scrollTopButton = document.querySelector("#scrollUp");

    // NavHide
    let navBar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");

    window.onscroll = function () {


        var scroll = document.documentElement.scrollTop;

        if (scroll >=  150) {
            nav.classList.add("header-scrolled");
        } else {
            nav.classList.remove("header-scrolled");
        }

        if(scroll >= 250){
                scrollTopButton.classList.add('scrollActive');
        } else{
                scrollTopButton.classList.remove('scrollActive');
        }
    }

    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    })
});
navMenu();