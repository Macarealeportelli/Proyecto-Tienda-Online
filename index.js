//APARICIÓN DE MODAL DEL CARRITO
const abrirCarrito = document.getElementById ("carrito");
const cerrarCarrito = document.getElementById("cerrar-menu");
const menu = document.getElementById("overlay-carrito");
const body = document.querySelector("body")

abrirCarrito.onclick = ()=>{
    menu.classList.remove("hidden");
    body.classList.add("no-scroll")
}

cerrarCarrito.onclick =()=>{
    menu.classList.add("hidden");
    body.classList.remove("no-scroll")
}

//CAMBIO PRODUCTOS DE GUILLA A LISTA 
const botonGrilla = document.getElementById("boton-grilla");
const botonLista = document.getElementById("boton-lista");
const tarjetas = document.querySelectorAll(".tarjeta");
const descripcionesProductos = document.querySelectorAll("#descripcion-producto");
const contenidosProductos = document.querySelectorAll("#contenido");
// console.log(botonGrilla)
// console.log(botonLista)
// console.log(tarjetas)
// console.log(descripcionProducto)

//DE GRILLA A LISTA
botonLista.onclick=()=>{
    //recorro todas las tarjetas
    for (let tarjeta of tarjetas){
        tarjeta.classList.remove("grilla");
        tarjeta.classList.add("lista");
       //recorro el contenido dentro de cada tarjeta y cambio de grilla a lista
        for(let contenido of contenidosProductos){
            contenido.classList.remove("contenido-poducto-grilla");
            contenido.classList.add("contenido-producto-lista");
        }
        //recorro las decripciones de las tarjetas y las muestro
        for(let descripcion of descripcionesProductos){
            descripcion.classList.remove("hidden");
        }
        
    }
}

//DE LISTA A GRILLA
botonGrilla.onclick=()=>{
    //recorro todas las tarjetas
    for (let tarjeta of tarjetas){
        tarjeta.classList.remove("lista");
        tarjeta.classList.add("grilla");
      
        //recorro el contenido dentro de cada tarjeta y cambio de lista a grilla
       
        for(let contenido of contenidosProductos){
            contenido.classList.remove("contenido-poducto-lista");
            contenido.classList.add("contenido-producto-grilla");
        }
//recorro las decripciones de las tarjetas y las oculto
        for(let descripcion of descripcionesProductos){
            descripcion.classList.add("hidden");
        }
        
    }
}

//FILTROS

