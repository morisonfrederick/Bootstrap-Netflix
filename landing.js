const nav = document.getElementById('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 100|| document.documentElement.scrollTop >= 200 )  {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};
  