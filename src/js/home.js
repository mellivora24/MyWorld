var select = document.getElementById('resolution');
var earth = document.getElementById('earth');
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');

function view() {
    if (select.value != "1080p") {
        var path_e = "/public/media/" + select.value + "/earth_" + select.value.slice(0, -1) + ".png";
        var path_s = "/public/media/" + select.value + "/sun_" + select.value.slice(0, -1) + ".png";
        var path_m = "/public/media/" + select.value + "/moon_" + select.value.slice(0, -1) + ".png";
        var path_b = "/public/media/" + select.value + "/background_" + select.value.slice(0, -1) + ".png";

        earth.src = path_e;
        sun.src = path_s;
        moon.src = path_m;
        document.body.style.backgroundImage = "url('" + path_b + "')";
    } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#FFCDEC";
        
        document.getElementById("text").innerText = "Thế giới của tớ đây! Xinh đúng không?";
        document.getElementById("text").style.color = "red";
        document.getElementById("a").style.display = "none";

        earth.src = "/public/media/1080p/earth_1080.png" ;
        sun.src = "/public/media/1080p/sun_1080.png" ;
        moon.src = "/public/media/1080p/moon_1080.png" ;
    }
}