//DOM
//querySelector y queryselectorAll
// let links = document.querySelectorAll("a");

// links.forEach(function(link){
//     console.long(link)
// })

// // E v e n t o s

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function(td){
//     td.addEventListener('click', function(){
//         console.log(this)
//     })
// });

// obtener los elementos de la clase ".close"
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function (elementos) {
    //Agregar un evento click a cada uno de ellos
    elementos.addEventListener("click", function (ev) {
        ev.preventDefault();
        //Obtener primero el elemento 
        let content = document.querySelector('.content');
        //quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__backInDown");
        //Agregar clases para animar su salida "animate__backOutUp"
        content.classList.add("animate__animated");
        content.classList.add("animate__backOutUp");

        setTimeout(function () {
            location.href = "/";
        }, 600);

        return false;
    });
});

//  Quitar y agregar clases a un elemento con JavaScript
// let iconos = document.querySelectorAll("i");

// iconos.forEach(function(icono){
//     icono.classList.remove("fa-star")
// })