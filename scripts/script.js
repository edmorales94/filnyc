let navList = document.getElementById("nav-lists");

function Show() {
    navList.classList.add("_Menus-show");
}

function Hide(){
    navList.classList.remove("_Menus-show");
}

mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let fillGallery = ()=>{
    const gallery = document.getElementById("gallery");
    for (let i = 19; i < 86; i++) {
        gallery.innerHTML += `<div class="gallery-picture">
                    <img src="images/small-sizes/gallery${i}.jpg"
                         srcset="images/small-sizes/gallery${i}.jpg 400w,
                                images/medium-sizes/gallery${i}.jpg 499w,
                                images/gallery${i}.jpg 799w" alt="event-picture">
                </div>`
    }
};

let body = document.getElementById("main-body");
let modal = document.getElementById("modal");
let modalProgram = document.getElementById("modal-program");
let convocatoria20 = document.getElementById("convocatoria20");
let register = document.getElementById("register");
let convocatoria20Mobil = document.getElementById("convocatoria20-mobile");
let programa20 = document.getElementById("programa20");
let programa20Mobil = document.getElementById("programa20-mobile");
let span = document.getElementsByClassName("close-modal")[0];
let spanProgram = document.getElementsByClassName("close-modal-program")[0];

convocatoria20.onclick = ()=>{
    modal.style.display = "block";
    body.style.overflowY = "hidden";
};

convocatoria20Mobil.onclick = ()=>{
    modal.style.display = "block";
    body.style.overflowY = "hidden";
};

if (register!==null) {
    register.onclick = ()=>{
        modal.style.display = "block";
        body.style.overflowY = "hidden";
    };
}

programa20.onclick = ()=>{
    modalProgram.style.display = "block";
    body.style.overflowY = "hidden";
};

programa20Mobil.onclick = ()=>{
    modalProgram.style.display = "block";
    body.style.overflowY = "hidden";
};
span.onclick = () => {
    modal.style.display = "none";
    body.style.overflowY = "auto";
};

spanProgram.onclick = function(){
    modalProgram.style.display = "none";
    body.style.overflowY = "auto";
};

window.onclick = (event)=>{
    if(event.target === modal){
        modal.style.display = "none";
        body.style.overflowY = "auto";
    }
    if(event.target === modalProgram){
        modalProgram.style.display = "none";
        body.style.overflowY = "auto";
    }
};
