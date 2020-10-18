//CAMBIO PRODUCTOS DE GUILLA A LISTA 
const botonGrilla = document.getElementById("boton-grilla");
const botonLista = document.getElementById("boton-lista");
const cards = document.querySelectorAll(".tarjeta");
const descripcionesProductos = document.querySelectorAll("#descripcion-producto");
const contenidosProductos = document.querySelectorAll("#contenido");
// console.log(botonGrilla)
// console.log(botonLista)
// console.log(tarjetas)
// console.log(descripcionProducto)

//DE GRILLA A LISTA
botonLista.onclick = () => {
    //recorro todas las tarjetas
    for (let card of cards) {
        card.classList.remove("grilla");
        card.classList.add("lista");
        //recorro el contenido dentro de cada tarjeta y cambio de grilla a lista
        for (let contenido of contenidosProductos) {
            contenido.classList.remove("contenido-poducto-grilla");
            contenido.classList.add("contenido-producto-lista");
        }
        //recorro las decripciones de las tarjetas y las muestro
        for (let descripcion of descripcionesProductos) {
            descripcion.classList.remove("hidden");
        }

    }
}

//DE LISTA A GRILLA
botonGrilla.onclick = () => {
    //recorro todas las tarjetas
    for (let card of cards) {
        card.classList.remove("lista");
        card.classList.add("grilla");

        //recorro el contenido dentro de cada tarjeta y cambio de lista a grilla

        for (let contenido of contenidosProductos) {
            contenido.classList.remove("contenido-poducto-lista");
            contenido.classList.add("contenido-producto-grilla");
        }
        //recorro las decripciones de las tarjetas y las oculto
        for (let descripcion of descripcionesProductos) {
            descripcion.classList.add("hidden");
        }

    }
}

//FILTROS
const filtroBusqueda = document.getElementById("filtro-nombre");
const filtroCategoria = document.querySelectorAll("#categoria");
const filtroRating = document.querySelectorAll("#puntaje");

const hayAlgunCheckBoxCategoriaChequeado = () => {
    for (let checkboxCategoria of filtroCategoria) {
        if (checkboxCategoria.checked) {
            return true;
        }
    }
    return false;
}

const hayAlgunCheckBoxRatingChequeado = () => {
    for (let checkboxRating of filtroRating) {
        if (checkboxRating.checked) {
            return true;
        }
    }
    return false;
}


const hayAlgoEscritoEnElInput = () => {
    if (filtroBusqueda.value) {
        return true;
    }
    else {
        return false;
    }
}

const compararCategoriaConTarjeta = (card) => {
    for (let checkboxCategoria of filtroCategoria) {
        if (checkboxCategoria.checked) {
            if ((checkboxCategoria.value === card.dataset.categoria)) {
                return true;
            }
        }
    }
    return false;
}

const compararRatingConTarjeta = (card) => {
    for (let checkboxRating of filtroRating) {
        if (checkboxRating.checked) {
            if (checkboxRating.value === card.dataset.rating) {
                return true;
            }
        }
    }
    return false;
}

const compararInputConTarjeta = (card) => {
    if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
        return true;
    }
    else {
        return false;
    }
}

const validarInput = (card) => {
    if (hayAlgoEscritoEnElInput()) {
        if (compararInputConTarjeta(card)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}

const validarCategorias = (card) => {
    if (hayAlgunCheckBoxCategoriaChequeado()) {
        if (compararCategoriaConTarjeta(card)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }

}

const validarPuntajes = (card) => {

    if (hayAlgunCheckBoxRatingChequeado()) {
        if (compararRatingConTarjeta(card)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    };

}

const pasaFiltros = (card) => {

    if (validarInput(card) && validarCategorias(card) && validarPuntajes(card)) {
        return true;
    } else {
        return false;
    }

}

const ocultarTarjeta = (card) => {
    return card.classList.add("hidden");
}

const mostrarTarjeta = (card) => {
    return card.classList.remove("hidden");
}

const filtrarTarjetas = () => {
    for (let card of cards) {
        if (pasaFiltros(card)) {
            mostrarTarjeta(card);
        }
        else {
            ocultarTarjeta(card);
        }
    }
}

filtroBusqueda.oninput = () => {
    filtrarTarjetas();
}

for (let checkboxCategoria of filtroCategoria) {
    checkboxCategoria.oninput = () => {
        filtrarTarjetas();
    }
}

for (let checkboxRating of filtroRating) {
    checkboxRating.oninput = () => {
        filtrarTarjetas();
    }
}

//LIMPIAR FILTROS
const botonLimpiarFiltros = document.getElementById("limpiar-filtros");

botonLimpiarFiltros.onclick = () => {
    filtroBusqueda.value = ""
    for(let card of cards){
        card.classList.remove('hidden')
    }
    for (let checkboxCategoria of filtroCategoria) {
        checkboxCategoria.checked = false
    }
    for (let checkboxRating of filtroRating) {
        checkboxRating.checked = false
    }
}

// //CONTADOR DE PRODUCTOS MOSTRADOS
// const mostrarProductos = document.getElementById("mostrando-productos")
// const contadorDeProductosEscondidos = 0

// const tarjetasEscondidas =()=>{
//     for (let card of cards){
//         if (card.classList === hidden){
//             contadorDeProductosEscondidos = contadorDeProductosEscondidos + 1
//         }
//     }
//     return contadorDeProductosEscondidos
// }

// const resultadoDeProductosMostrados=()=>{
//     const resultado = 12 - tarjetasEscondidas()
//     mostrarProductos.textContent = resultado
// }


//APARICIÓN DE MODAL DEL CARRITO
const abrirCarrito = document.getElementById("carrito");
const cerrarCarrito = document.getElementById("cerrar-menu");
const menu = document.getElementById("overlay-carrito");
const body = document.querySelector("body");

//abrimos carrito y quitamos scroll al body
abrirCarrito.onclick = () => {
    menu.classList.remove("hidden");
    body.classList.add("no-scroll");
}

//cerramos carrito y devolvemos el scroll al body
cerrarCarrito.onclick = () => {
    menu.classList.add("hidden");
    body.classList.remove("no-scroll");
}

//ACCIONES DE LOS BOTONES DEL CARRITO

//BOTON VACIAR
const vaciarCarrito = document.getElementById("vaciar-carrito");
const mensajeAbandonarCarrito = document.getElementById("overlay-mensaje");

vaciarCarrito.onclick=()=>{
    mensajeAbandonarCarrito.classList.remove('hidden');
}

//Accionar de Botones dentro del mensaje de Abandonar carrito
//cancelar ---> vuelve al carrito con los productos
const cancelarAbandonarCarrito = document.getElementById("cancelar");

cancelarAbandonarCarrito.onclick=()=>{
    mensajeAbandonarCarrito.classList.add('hidden');
}

//vaciar --->limpia el carrito de productos
const confirmarVaciarCarrito = document.getElementById('vaciar');
const mostrarProductosCarrito = document.getElementById('contenido-del-carrito');
const accionesCarrito = document.getElementById('acciones-carrito');

confirmarVaciarCarrito.onclick=()=>{
    mostrarProductosCarrito.classList.add('hidden');
    accionesCarrito.classList.add('hidden');
    mensajeAbandonarCarrito.classList.add('hidden');
}

//BOTON COMPRAR ---> ABRE EL MODAL DEL CHECKOUT
const comprarCarrito = document.getElementById('comprar-carrito');
const checkout = document.getElementById('overlay-checkout');

comprarCarrito.onclick=()=>{
    checkout.classList.remove('hidden');
}

//CHECKOUT

//Boton Seguir Comprando ---> cierra el checkout
const seguirComprando = document.getElementById('seguir-comprando');

seguirComprando.onclick=()=>{
    checkout.classList.add('hidden');
}



//Boton Finalizar compra --->recuerda al usuario rellenar los inputs de texto
//--envia el formulario y cierra el carrito vacio