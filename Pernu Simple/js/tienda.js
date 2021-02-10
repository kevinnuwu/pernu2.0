function expandirProducto() {
    document.querySelector(".o-contenedor__producto--expandido").style.display = "flex";
}
 
function cerrarProducto() {
    document.querySelector(".o-contenedor__producto--expandido").style.display = "none";
}

function abrirBarra(){
    document.querySelector(".contenedorBarraIconos").style.width = "30%";
    document.querySelector(".contenedorBarraIconos").style.height = "100vh";
    document.querySelector(".contenedorBarraProductos").style.display = "flex";
}

function cerrarBarra(){
    document.querySelector(".contenedorBarraIconos").style.width = "0%";
    document.querySelector(".contenedorBarraIconos").style.height = "0%";
    document.querySelector(".contenedorBarraProductos").style.display = "none";
}