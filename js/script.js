function toggleFunction() {
    let el = document.getElementById("drop-down");
    if (el.className === "drop") {
        el.className += " responsive";
        el.style.display = el.style.display = "block";
    } else {
        el.className = "drop";
        el.style.display = el.style.display = "none";
    }
}

window.onscroll = () => {scrollFunction()};

function scrollFunction() {
    document.getElementById("myBtn").style.display = "none";

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
