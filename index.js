//APARICIÓN DE MODAL DEL CARRITO
const abrirCarrito = document.getElementById ("carrito");
const cerrarCarrito = document.getElementById("cerrar-menu");
const menu = document.getElementById("overlay-carrito");

abrirCarrito.onclick = ()=>{
    menu.classList.remove("hidden");
}

cerrarCarrito.onclick =()=>{
    menu.classList.add("hidden");
}

//CAMBIO PRODUCTOS DE GUILLA A LISTA 
const botonGrilla = document.getElementById("boton-grilla")
const botonLista = document.getElementById("boton-lista")
const tarjetas = document.querySelectorAll(".tarjeta")
const descripcionesProductos = document.querySelectorAll("#descripcion-producto")
const contenidosProductos = document.querySelectorAll("#contenido")
// console.log(botonGrilla)
// console.log(botonLista)
// console.log(tarjetas)
// console.log(descripcionProducto)

//DE GRILLA A LISTA
botonLista.onclick=()=>{
    for (let tarjeta of tarjetas){
        tarjeta.classList.remove("grilla")
        tarjeta.classList.add("lista")
       
        for(let contenido of contenidosProductos){
            contenido.classList.remove("contenido-poducto-grilla")
            contenido.classList.add("contenido-producto-lista")
        }

        for(let descripcion of descripcionesProductos){
            descripcion.classList.remove("hidden")
        }
        
    }
}

//DE LISTA A GRILLA
botonGrilla.onclick=()=>{
    for (let tarjeta of tarjetas){
        tarjeta.classList.remove("lista")
        tarjeta.classList.add("grilla")
       
        for(let contenido of contenidosProductos){
            contenido.classList.remove("contenido-poducto-lista")
            contenido.classList.add("contenido-producto-grilla")
        }

        for(let descripcion of descripcionesProductos){
            descripcion.classList.add("hidden")
        }
        
    }
}