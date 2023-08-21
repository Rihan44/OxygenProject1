/* VARIABLES */
let burguer_icon = document.querySelector('#head__iconburger');
let close_icon = document.querySelector('#head__iconclose');
let menu = document.querySelector('#menu');
let percentage__scroll = document.querySelector('#percentage__scroll');
let backTop = document.querySelector('#backTop');
let btn_form = document.querySelector('#btn_form');
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

window.addEventListener('scroll', () => {
    let porcentaje = porcentajeTotal();
    percentage__scroll.style.height = "5px";
    percentage__scroll.style.width = porcentaje + "%";
});

backTop.addEventListener('click', backtopButton);

btn_form.addEventListener('click', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name');
    console.log(name.value)
});

/* Implementar validación en el formulario. El nombre tiene que tener entre 2 y
100 letras, la dirección de correo electrónico tiene que ser válida
(https://www.emailregex.com/) y tienen que hacer el checkbox. Si un campo
no es válido, cambiar el color de su border a rojo
● Recoger los datos del formulario y mandarselos a un servidor JSON de
testing como este https://jsonplaceholder.typicode.com/guide/ con fetch()
● Crear un popup (/modal) de ‘Subscribe to our newsletter’ que aparece
después de 5 segundos, o cuando el usuario baja 25% de la página. Validar
la dirección y mandársela al mismo servidor. Habrá 3 maneras de quitarlo,
con un botón X, haciendo clic fuera del modal o con la tecla ESC. No
aparecerá otra vez, después de ser cerrado (con
localStorage/sessionStorage).
● Añadir un selector de moneda (EUR, USD, GBP), obtener los tipos de cambio
de esta API https://github.com/fawazahmed0/currency-api#readme
(https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur
.json), permitiendo al usuario cambiar la moneda y ver los precios
actualizados.
● Crear un ‘Slider’ con esta funcionalidad (botones prev/next, puntos para las
imágenes individuales, avanza automáticamente) */