//CAMBIO PRODUCTOS DE GUILLA A LISTA 
const botonGrilla = document.getElementById("boton-grilla");
const botonLista = document.getElementById("boton-lista");
const cards = document.querySelectorAll(".tarjeta");
const descripcionesProductos = document.querySelectorAll("#descripcion-producto");
const contenidosProductos = document.querySelectorAll("#contenido");


//VISTA DE GRILLA A LISTA------------------------------------------------------------------------------------------------------------
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

//VISTA DE LISTA A GRILLA-----------------------------------------------------------------------------------------------------------
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


// // //CONTADOR DE PRODUCTOS MOSTRADOS---------------------------------------------------------------------------------------------
// const mostrarProductos = document.getElementById("mostrando-productos")
// let contadorDeProductosEscondidos = 0

// const tarjetasEscondidas =()=>{
//     for (let card of cards){
//         if (card.classList.contains('hidden') === true){
//             contadorDeProductosEscondidos = contadorDeProductosEscondidos + 1
//         }
//     }
//     return contadorDeProductosEscondidos
// }

// const resultadoDeProductosMostrados=()=>{
//     const resultado = 12 - tarjetasEscondidas()
//     mostrarProductos.textContent = resultado
// }


//FILTROS------------------------------------------------------------------------------------------------------------------------
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


//LIMPIAR FILTROS----------------------------------------------------------------------------------------------------------------------
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

//APARICIÓN DE MODAL DEL CARRITO------------------------------------------------------------------------------------------------------
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

//ACCIONES DE LOS BOTONES DEL CARRITO------------------------------------------------------------------------------------------------

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

//CHECKOUT -----------------------------------------------------------------------------------------------------------------------------

const comprarCarrito = document.getElementById('comprar-carrito');
const checkout = document.getElementById('overlay-checkout');

const pagaEnEfectivo = document.getElementById('efectivo-debito');
const pagaConTarjeta = document.getElementById('tarjeta');
const tieneEnvio = document.getElementById('tiene-envio');
const tieneDescuento = document.getElementById('tiene-descuento');
const descuentoCheckout = document.getElementById('descuento');
const recargoCheckout = document.getElementById('recargo');
const envioCheckout = document.getElementById('envio')
const totalCheckout = document.getElementById('total');
const subtotalProductos = document.getElementById('subtotal');

const parrafoRecargo = document.getElementById('parrafo-recargo');
const parrafoDescuento = document.getElementById('parrafo-descuento');
const parrafoEnvio = document.getElementById('parrafo-envio');

const gastoDeEnvio = 300;

const subtotal= 82498

//BOTON COMPRAR EN CARRITO ---> ABRE EL MODAL DEL CHECKOUT------------------------------------------------------------
comprarCarrito.onclick=()=>{
    checkout.classList.remove('hidden');
    totalCheckout.textContent = "$" + subtotal;
    parrafoDescuento.classList.add('hidden')
    parrafoRecargo.classList.add('hidden')
    parrafoEnvio.classList.add('hidden')
}

//Boton Seguir Comprando ---> cierra el checkout-----------------------------------------------------------------------
const seguirComprando = document.getElementById('seguir-comprando');

seguirComprando.onclick=()=>{
    checkout.classList.add('hidden');
}

//Cáclculos del checkout------------------------------------------------------------------------------------------------

 //Funcion para cuando esta checkeado tarjeta de credito y las distintas variantes
 pagaConTarjeta.onclick = () => {
    if (estaChequeadoEnvio() && estaChequeadoDescuento()) {
      subtotalProductos.textContent = "$" + subtotal
      parrafoDescuento.classList.remove('hidden')
      descuentoCheckout.textContent = "$" + obtenerDescuento(subtotal)
      parrafoEnvio.classList.remove('hidden')
      envioCheckout.textContent = "$" + gastoDeEnvio
      parrafoRecargo.classList.remove('hidden')
      recargoCheckout.textContent = "$" + obtenerRecargo(subtotal)
      totalCheckout.textContent = subtotal - obtenerDescuento(subtotal) + gastoDeEnvio + obtenerRecargo(subtotal)
    }
    else if (estaChequeadoEnvio() && !estaChequeadoDescuento()) {
      subtotalProductos.textContent = "$" + subtotal
      descuentoCheckout.textContent = ""
      parrafoEnvio.classList.remove('hidden')
      envioCheckout.textContent = "$" + gastoDeEnvio
      parrafoRecargo.classList.remove('hidden')
      recargoCheckout.textContent = "$" + obtenerRecargo(subtotal)
      totalCheckout.textContent = subtotal + gastoDeEnvio + obtenerRecargo(subtotal)
    }
    else if (!estaChequeadoEnvio() && estaChequeadoDescuento()) {
      subtotalProductos.textContent = "$" + subtotal
      parrafoDescuento.classList.remove('hidden')
      descuentoCheckout.textContent = "$" + obtenerDescuento(subtotal)
      envioCheckout.textContent = ""
      parrafoRecargo.classList.remove('hidden')
      recargoCheckout.textContent = "$" + obtenerRecargo(subtotal)
      totalCheckout.textContent = subtotalProductos - obtenerDescuento(subtotal) + obtenerRecargo(subtotal)
    }
    else {
      subtotalProductos.textContent = "$" + subtotal
      descuentoCheckout.textContent = ""
      envioCheckout.textContent = ""
      parrafoRecargo.classList.remove('hidden')
      recargoCheckout.textContent = "$" + obtenerRecargo(subtotal)
      totalCheckout.textContent = subtotal + obtenerRecargo(subtotal)
    }
  }
  
  // Funcion para cuando esta checkeado en Efectivo/debito y las variantes
   pagaEnEfectivo.onclick=()=>{
      if (estaChequeadoEnvio() && estaChequeadoDescuento()) {
        subtotalProductos.textContent = "$" + subtotal
        parrafoDescuento.classList.remove('hidden')
        descuentoCheckout.textContent = "$" + obtenerDescuento(subtotal)
        parrafoEnvio.classList.remove('hidden')
        envioCheckout.textContent = "$" + gastoDeEnvio
        recargoCheckout.textContent =""
        totalCheckout.textContent = subtotal - obtenerDescuento(subtotal) + gastoDeEnvio 
      }
      else if (estaChequeadoEnvio() && !estaChequeadoDescuento()) {
        subtotalProductos.textContent = "$" + subtotal
        descuentoCheckout.textContent = ""
        parrafoEnvio.classList.remove('hidden')
        envioCheckout.textContent = "$" + gastoDeEnvio
        recargoCheckout.textContent = ""
        totalCheckout.textContent =  subtotal + gastoDeEnvio 
      }
      else if (!estaChequeadoEnvio() && estaChequeadoDescuento()) {
        subtotalProductos.textContent = "$" + subtotal
        parrafoDescuento.classList.remove('hidden')
        descuentoCheckout.textContent = "$" + obtenerDescuento(subtotal)
        envioCheckout.textContent = ""
        recargoCheckout.textContent = ""
        totalCheckout.textContent =  subtotal - obtenerDescuento(subtotal)
      }
      else {
        subtotalProductos.textContent = "$" + subtotal
        descuentoCheckout.textContent = ""
        envioCheckout.textContent = ""
        recargoCheckout.textContent =""
        totalCheckout.textContent = subtotal
      }
    }
  
  //funcion para cuando esta checkeado o descheckeado solo descuento
  tieneDescuento.oninput = () => {
    if (estaChequeadoDescuento()) {
      descuentoCheckout.textContent = obtenerDescuento(subtotal)
      totalCheckout.textContent = totalCheckout.textContent - obtenerDescuento(subtotal)
    }
    else {
      descuentoCheckout.textContent = ""
      totalCheckout.textContent = parseFloat(totalCheckout.textContent) + obtenerDescuento(subtotal)
    }
  };
  
  //Funcion para cuando solo esta checkeado o descheckeado envio
  tieneEnvio.oninput = () => {
    if (estaChequeadoEnvio()) {
      envioCheckout.textContent = gastoDeEnvio;
      totalCheckout.textContent = parseFloat(totalCheckout.textContent) + gastoDeEnvio;
    }
    else {
      envioCheckout.textContent = "";
      totalCheckout.textContent = totalCheckout.textContent - gastoDeEnvio;
    }
  };
  
  
  const obtenerRecargo = (subtotal) => {
    const recargo = subtotal * 0.1;
    return recargo;
  };
  
  const obtenerDescuento = (subtotal) => {
    const descuento = subtotal * 0.1;
    return descuento;
  };
  
  const obtenerTotalConEnvio = (subtotal) => {
    return subtotal + gastoDeEnvio;
  };
  
  
  const estaChequeadoDescuento = () => {
    if (tieneDescuento.checked) {
      return true;
    } else {
      return false;
    }
  };
  
  const estaChequeadoEnvio = () => {
    if (tieneEnvio.checked) {
      return true;
    } else {
      return false;
    }
  };
  
//Boton Finalizar compra --->recuerda al usuario rellenar los inputs de texto-------------------------------------
//--envia el formulario y cierra el carrito vacio
const botonFinalizarCompra = document.getElementById('finalizar-compra');
const formulario = document.getElementById('formulario-datos');
// const inputNombre = document.getElementById('input-nombre');
const inputMail = document.getElementById('input-mail');



botonFinalizarCompra.onclick=()=>{
   checkout.classList.add('hidden');
   mostrarProductosCarrito.classList.add('hidden');
   accionesCarrito.classList.add('hidden');
   menu.classList.add('hidden')

}

//-------------FUNCIONALIDADES RESPONSIVE--------------------------------------------------------------------------------
const botonFiltrosResponsive = document.getElementById('boton-filtros-responsive');
const filtrosResponsive = document.getElementById('overlay-filtros');
const cerrarMenuFiltros = document.getElementById('cerrar-menu-filtros')

botonFiltrosResponsive.onclick=()=>{
    filtrosResponsive.classList.remove('hidden');
}

cerrarMenuFiltros.onclick=()=>{
    filtrosResponsive.classList.add('hidden');
    body.classList.remove ('no-scroll');
}