const navLinkEls = document.querySelectorAll('.nav_links');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if(window.scrollY >= (sectionEl.offsetTop - 150)){
            currentSection = sectionEl.id;
        }
    });
    
    navLinkEls.forEach(navLinkEl => {
        if(navLinkEl.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    })
})


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', ()=>{
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})




// Sumatra
function aceh(){
    const dropdown = document.getElementById("on-page");
    dropdown.classList.toggle("on");
}


function sumut(){
    const dropdown = document.getElementById("sumut");
    dropdown.classList.toggle("on");
}

function sumbat(){
    const dropdown = document.getElementById("sumbat");
    dropdown.classList.toggle("on");
}

function riau(){
    const dropdown = document.getElementById("riau");
    dropdown.classList.toggle("on");
}

function kepulauan(){
    const dropdown = document.getElementById("kepulauan");
    dropdown.classList.toggle("on");
}

function jambi(){
    const dropdown = document.getElementById("jambi");
    dropdown.classList.toggle("on");
}

function sumsel(){
    const dropdown = document.getElementById("sumsel");
    dropdown.classList.toggle("on");
}

function bengkulu(){
    const dropdown = document.getElementById("bengkulu");
    dropdown.classList.toggle("on");
}

function bangka(){
    var dropdown = document.getElementById("bangka");
    dropdown.classList.toggle("on");
}

function lampung(){
    var dropdown = document.getElementById("lampung");
    dropdown.classList.toggle("on");
}
// End Sumatra



// Jawa
function banten(){
    var dropdown = document.getElementById("banten");
    dropdown.classList.toggle("on");
}

function jakarta(){
    var dropdown = document.getElementById("jakarta");
    dropdown.classList.toggle("on");
}

function jabar(){
    var dropdown = document.getElementById("jabar");
    dropdown.classList.toggle("on");
}

function jateng(){
    var dropdown = document.getElementById("jateng");
    dropdown.classList.toggle("on");
}

function yogya(){
    var dropdown = document.getElementById("yogya");
    dropdown.classList.toggle("on");
}

function jatim(){
    var dropdown = document.getElementById("jatim");
    dropdown.classList.toggle("on");
}
// End Jawa


// Nusa Tenggara
function bali(){
    var dropdown = document.getElementById("bali");
    dropdown.classList.toggle("on");
}

function ntb(){
    var dropdown = document.getElementById("ntb");
    dropdown.classList.toggle("on");
}

function ntt(){
    var dropdown = document.getElementById("ntt");
    dropdown.classList.toggle("on");
}
// End Nusa Tenggara


// Kalimantan
function kalbar(){
    var dropdown = document.getElementById("kalbar");
    dropdown.classList.toggle("on");
}

function kalteng(){
    var dropdown = document.getElementById("kalteng");
    dropdown.classList.toggle("on");
}

function kalsel(){
    var dropdown = document.getElementById("kalsel");
    dropdown.classList.toggle("on");
}

function kaltim(){
    var dropdown = document.getElementById("kaltim");
    dropdown.classList.toggle("on");
}

function kalut(){
    var dropdown = document.getElementById("kalut");
    dropdown.classList.toggle("on");
}
// End Kalimantan


// Sulawesi
function sulut(){
    var dropdown = document.getElementById("sulut");
    dropdown.classList.toggle("on");
}

function sulteng(){
    var dropdown = document.getElementById("sulteng");
    dropdown.classList.toggle("on");
}

function sulsel(){
    var dropdown = document.getElementById("sulsel");
    dropdown.classList.toggle("on");
}

function gorontalo(){
    var dropdown = document.getElementById("gorontalo");
    dropdown.classList.toggle("on");
}

function sulbar(){
    var dropdown = document.getElementById("sulbar");
    dropdown.classList.toggle("on");
}
// End Sulawesi



// Maluku
function maluku(){
    var dropdown = document.getElementById("maluku");
    dropdown.classList.toggle("on");
}

function malut(){
    var dropdown = document.getElementById("malut");
    dropdown.classList.toggle("on");
}
// End Maluku

// Papua
function papua(){
    var dropdown = document.getElementById("papua");
    dropdown.classList.toggle("on");
}

function pabar(){
    var dropdown = document.getElementById("pabar");
    dropdown.classList.toggle("on");
}

// End Papua





