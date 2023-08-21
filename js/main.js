/* VARIABLES */
let burguer_icon = document.querySelector('#head__iconburger');
let close_icon = document.querySelector('#head__iconclose');
let menu = document.querySelector('#menu');
let percentage__scroll = document.querySelector('#percentage__scroll');
let backTop = document.querySelector('#backTop');
let btn_form = document.querySelector('#btn_form');
let name_form = document.querySelector('#name');
let email = document.querySelector('#email');
let check = document.querySelector('#check');
let check_error = document.querySelector('.check-error');
let div_modal = document.querySelector('#modal');
let email_modal = document.querySelector('#email_modal');
let btn_modal = document.querySelector('#btn_modal');
let modal_icon = document.querySelector('#modal__iconclose');
let form_modal = document.querySelector('#form__modal');
let h3_modal = document.querySelector('.modal__title');
let label_modal = document.querySelector('.label__modal');
let localstorage_modal = localStorage.getItem("modal_cerrado");

const patron_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* MENU BURGUER */

burguer_icon.addEventListener('click', () => {
    console.log('ey')
    menu.style.display = "block";
    menu.style.height = "auto";
    menu.style.top = "0px";
    menu.style.transition = "all .7s ease-out";
    burguer_icon.style.display = "none";
    close_icon.style.display = "inline";
});

close_icon.addEventListener("click", () => {
    menu.style.display = "none";
    menu.style.height = "0px";
    menu.style.top = "-250px";
    menu.style.transition = "all .7s ease-out";
    burguer_icon.style.display = "inline";
    close_icon.style.display = "none";
});

/* FIN MENU BURGUER */

function porcentajeTotal() {
    let altura_pantalla = window.scrollY;
    let alturaTotal_pantalla = document.documentElement.scrollHeight - window.innerHeight;
    let porcentajeTotal = (altura_pantalla / alturaTotal_pantalla) * 100;
    return Math.floor(porcentajeTotal);
}

function backtopButton() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function formValidation(){
    if(name_form.value.length < 2 || name_form.value.length > 100){
        name_form.classList.add("form-error");
    } else {
        name_form.classList.remove("form-error");
    }

    if(!emailValidation(email.value)){
        email.classList.add("form-error");
    } else {
        email.classList.remove("form-error");
    }

    if(!check.checked){
        check_error.style.display = 'block';
    } else {
        check_error.style.display = 'none';
    }
}

function emailValidation(email) {
    return patron_email.test(email);
}

window.addEventListener('scroll', () => {
    let porcentaje = porcentajeTotal();
    percentage__scroll.style.height = "5px";
    percentage__scroll.style.width = porcentaje + "%";

    /* MODAL APARECER AL 25% DE LA WEB Y SI NO ESTÁ EN EL LOCALSTORAGE */
    if(porcentaje == 25 && !localstorage_modal){
        div_modal.style.display = "block";
    }

});

backTop.addEventListener('click', backtopButton);

btn_form.addEventListener('click', (e) => {
    e.preventDefault();
    formValidation();
});

/* MODAL */
/* APARECE A LOS 5s */
if(!localstorage_modal){
    setTimeout(() => {
        div_modal.style.display = "block";
    }, 5000);
} 

/* AL SUBSCRIBIRSE */
btn_modal.addEventListener('click', (e) => {
    e.preventDefault();

    if(!emailValidation(email_modal)){
        email_modal.style.borderBottom = "1px solid red";
    } else {
        email_modal.style.borderBottom = "1px solid black";
    }

});

/* MODAL CERRADO CON LA X */
modal_icon.addEventListener('click', () => {
    div_modal.style.display = "none";
    localStorage.setItem("modal_cerrado", div_modal);
});

/* MODAL CERRADO CON EL ESC */
window.addEventListener('keydown', (e) => {
    if(e.key == "Escape"){
        div_modal.style.display = "none";
        localStorage.setItem("modal_cerrado", div_modal);
    }
});

/* MODAL CERRADO CLICANDO FUERA */
window.addEventListener('click', (e) => {
    if( e.target != form_modal && e.target != div_modal && e.target != h3_modal 
        && e.target != email_modal && e.target != btn_modal && e.target != label_modal){
        div_modal.style.display = "none";
        localStorage.setItem("modal_cerrado", div_modal);
    }
});

/* window.onload = () => {
    localStorage.clear();
}; */
/* FIN DE MODAL */

/* SLIDER */


/* FIN SLIDER */
/*
● Recoger los datos del formulario y mandarselos a un servidor JSON de
testing como este https://jsonplaceholder.typicode.com/guide/ con fetch()
● Añadir un selector de moneda (EUR, USD, GBP), obtener los tipos de cambio
de esta API https://github.com/fawazahmed0/currency-api#readme
(https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur
.json), permitiendo al usuario cambiar la moneda y ver los precios
actualizados.
● Crear un ‘Slider’ con esta funcionalidad (botones prev/next, puntos para las
imágenes individuales, avanza automáticamente) */