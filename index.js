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

//CAMBIO PRODUCTOS DE GUILLA A COLUMNA
const botonGrilla = document.getElementById("boton-grilla")
const botonLista = document.getElementById("boton-lista")
const tarjetas = document.querySelectorAll(".tarjeta")
const descripcionProducto = document.querySelectorAll("#descripcion-producto")

console.log(botonGrilla)
console.log(botonLista)
console.log(tarjetas)
console.log(descripcionProducto)