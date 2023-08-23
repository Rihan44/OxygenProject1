/* VARIABLES */
let burguer_icon = document.querySelector('#head__iconburger');
let close_icon = document.querySelector('#head__iconclose');
let menu = document.querySelector('#menu');
/* FIN VARIABLES MENU */
/* PORCENTAJE SCROLL */
let percentage__scroll = document.querySelector('#percentage__scroll');
let backTop = document.querySelector('#backTop');
/* FIN PORCENTAJE */
/* VARIABLES FORMULARIO */
let form__contact = document.querySelector('#form__contact');
let btn_form = document.querySelector('#btn_form');
let name_form = document.querySelector('#name');
let email = document.querySelector('#email');
let check = document.querySelector('#check');
let check_error = document.querySelector('.check-error');
/* FIN FORMULARIO */
/* VARIABLES MODAL */
let div_modal = document.querySelector('#modal');
let email_modal = document.querySelector('#email_modal');
let btn_modal = document.querySelector('#btn_modal');
let modal_icon = document.querySelector('#modal__iconclose');
let form_modal = document.querySelector('#form__modal');
let h3_modal = document.querySelector('.modal__title');
let label_modal = document.querySelector('.label__modal');
let localstorage_modal = localStorage.getItem("modal_cerrado");
/* FIN MODAL*/
/* VARIBALES SLIDER */
let slider = document.querySelector('#slider');
let btnSlider_left = document.querySelector('#slider__left');
let btnSlider_right = document.querySelector('#slider__right');
let img_slider = document.querySelector('.img__slider');
let circles__slider = document.getElementsByClassName('circles__slider');
let contador_slider = 1;
/* FIN SLIDER */

/* PATRON EMAIL */
const patron_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* MENU BURGUER */

/* BOTON MENU BURGER */
burguer_icon.addEventListener('click', () => {
    console.log('ey')
    menu.style.display = "block";
    menu.style.height = "auto";
    menu.style.top = "0px";
    menu.style.transition = "all .7s ease-out";
    burguer_icon.style.display = "none";
    close_icon.style.display = "inline";
});

/* BOTON DE CERRAR MENU */
close_icon.addEventListener("click", () => {
    menu.style.display = "none";
    menu.style.height = "0px";
    menu.style.top = "-250px";
    menu.style.transition = "all .7s ease-out";
    burguer_icon.style.display = "inline";
    close_icon.style.display = "none";
});

/* FIN MENU BURGUER */

/* FUNCION QUE DEVUELVE EL PORCENTAJE QUE SE HA ESCROLEADO EN LA WEB */
function porcentajeTotal() {
    let altura_pantalla = window.scrollY;
    let alturaTotal_pantalla = document.documentElement.scrollHeight - window.innerHeight;
    let porcentajeTotal = (altura_pantalla / alturaTotal_pantalla) * 100;
    return Math.floor(porcentajeTotal);
}

/* FUNCIÓN DEL BOTON QUE VUELVE ARRIBA A LA PAGINA */
function backtopButton() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* VALIDACIÓN DEL FORMULARIO */
function formValidation() {
    if (name_form.value.length < 2 || name_form.value.length > 100) {
        name_form.classList.add("form-error");
    } else {
        name_form.classList.remove("form-error");
    }

    if (!emailValidation(email.value)) {
        email.classList.add("form-error");
    } else {
        email.classList.remove("form-error");
    }

    if (!check.checked) {
        check_error.style.display = 'block';
    } else {
        check_error.style.display = 'none';
    }
}

/* VALIDADOR EMAIL */
function emailValidation(email) {
    return patron_email.test(email);
}

/* APARECE MODAL AL HACER SCROLL */
window.addEventListener('scroll', () => {
    let porcentaje = porcentajeTotal();
    percentage__scroll.style.height = "5px";
    percentage__scroll.style.width = porcentaje + "%";

    /* MODAL APARECER AL 25% DE LA WEB Y SI NO ESTÁ EN EL LOCALSTORAGE */
    if (porcentaje == 25 && !localstorage_modal) {
        div_modal.style.display = "block";
    }

});

backTop.addEventListener('click', backtopButton);

form__contact.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
    recogerDatosForm(formData)
});

/* MODAL */
/* APARECE A LOS 5s */
if (!localstorage_modal) {
    setTimeout(() => {
        div_modal.style.display = "block";
    }, 5000);
}

/* AL SUBSCRIBIRSE */
form__modal.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!emailValidation(email_modal)) {
        email_modal.style.borderBottom = "1px solid red";
    } else {
        email_modal.style.borderBottom = "1px solid black";
    }

    recogerDatosForm(subcribeData);
});

/* MODAL CERRADO CON LA X */
modal_icon.addEventListener('click', () => {
    div_modal.style.display = "none";
    localStorage.setItem("modal_cerrado", div_modal);
});

/* MODAL CERRADO CON EL ESC */
window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        div_modal.style.display = "none";
        localStorage.setItem("modal_cerrado", div_modal);
    }
});

/* MODAL CERRADO CLICANDO FUERA */
window.addEventListener('click', (e) => {
    if (e.target != form_modal && e.target != div_modal && e.target != h3_modal
        && e.target != email_modal && e.target != btn_modal && e.target != label_modal) {
        div_modal.style.display = "none";
        localStorage.setItem("modal_cerrado", div_modal);
    }
});

/* LIMPIAR EL LOCARSTORAGE */
/* window.onload = () => {
    localStorage.clear();
}; */
/* FIN DE MODAL */

/* SLIDER */
let totalImg_sliders = 4;
circles__slider[0].style.background = "rgba(226, 226, 226, 0.795)";

/* SLIDERLEFTBUTTON */
btnSlider_left.addEventListener('click', () => {
    contador_slider--;
    if (contador_slider >= 1) {
        img_slider.src = "img/img-" + contador_slider + ".jpg";
    } else if(contador_slider == 0) {
        contador_slider = totalImg_sliders;
        img_slider.src = "img/img-" + totalImg_sliders + ".jpg";
    } 

    if (contador_slider > totalImg_sliders) {
        contador_slider = 1;
    } 

    sliderDots(contador_slider);

});


/* SLIDERRIGHTBUTTON */
btnSlider_right.addEventListener('click', () => {
    contador_slider++;
    img_slider.src = "img/img-" + contador_slider + ".jpg";

    if (contador_slider > totalImg_sliders) {
        img_slider.src = "img/img-1.jpg";
    }

    if (contador_slider > totalImg_sliders) {
        contador_slider = 1;
    }

    sliderDots(contador_slider);

});

/* FUNCION PUNTITOS SLIDER */
function sliderDots(contador){
    for (let index = 0; index < circles__slider.length; index++) {
        if(contador - 1 == index){
            circles__slider[index].style.background = "rgba(226, 226, 226, 0.795)";
        } else {
            circles__slider[index].style.background = "rgba(226, 226, 226, 0.466)";
        }       
    } 
}

function sliderDotsImages(){
    for (let index = 0; index < circles__slider.length; index++) {
        circles__slider[index].addEventListener('click', () => {
            img_slider.src = "img/img-" + (index + 1) + ".jpg";
            sliderDots(index + 1);
        });
    }
}

sliderDotsImages();

/* OBJETOS FORMULARIOS */

const formData = {
    name: name_form.value,
    email: email.value,
    check: check.checked
}

const subcribeData = {
    email: email_modal.value
}

function recogerDatosForm(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

/* FIN SLIDER */

/* Añadir un selector de moneda (EUR, USD, GBP), obtener los tipos de cambio
de esta API https://github.com/fawazahmed0/currency-api#readme
(https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur
.json), permitiendo al usuario cambiar la moneda y ver los precios
actualizados. */