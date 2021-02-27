// let zapatoGrande = document.querySelector(".o-contenedor--grande")

// // .o-contenedor--grande
// //         .c-grande__zapato 
// //             .c-zapato__img
// //             .c-zapato__barra 
// //                 .u-info-zapato 40$
// //                 .__-nada
// //                 .u-info-zapato Ver
// //         .c-grande__fondo 
// function crearNodo(tipo, ...hijos) {
    
//     let nodo= document.createElement(tipo);
//     // console.log({nodoCreado});
//     for (const hijo of hijos) {
//        nodo.appendChild(hijo);
//     }
//     console.log(nodo);
//     return nodo
// }
// // document.querySelector(".o-contenedor").appendChild(crearNodo("div", crearNodo("strong")))

// function crearClass(tipo, clase, ...hijos) {
//     let nodo = crearNodo(tipo)
//     nodo.setAttribute("class", clase);
//     for (const hijo of hijos) {
//         nodo.appendChild(hijo)
//     }
//     console.log("crear Class:", nodo);
//     return nodo
// }
// document.querySelector(".o-contenedor").appendChild(crearClass("div", "o-contenedor--grande",
//  crearClass("div", "c-grande__zapato", 
//  crearClass("div", "c-zapato__img"),
//  crearClass("div", "c-zapato__barra", 
//  crearClass("div","u-info-zapato"),
//  crearClass("div", "__-nada"),
//  crearClass("div","u-info-zapato"))),
//  crearClass("div", "c-grande__fondo")
//  ))

//  let zapatoImg = document.querySelector(".zapato__img")
//  let infoZapato = document.querySelectorAll(".u-info-zapato");
// infoZapato[0].innerHTML="40$"
// infoZapato[1].innerHTML="Ver"

// function contenedorGrande(img, precio) {
//     document.querySelector(".o-contenedor")
//     .appendChild(crearNodo(""));


//-Hacer con Node.js