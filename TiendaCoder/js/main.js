// llamara los productos de nuestro archivo .json
let productos = []
fetch("./js/products.json")
 .then(Response => Response.json())
 .then(data => {
    productos = data
    cargarProductos(productos)
 })

 
const contenedorProductos = document.querySelector("#container-productos");
const botonesCategorias = document.querySelectorAll(".btn-categoria")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const cantidadEnCarrito = document.querySelector('#cantidadEnCarrito')


function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML="";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-4 mt-3 ">
          <div class="card h-100 producto">
          <img src="${producto.imagen}" class="card-img-top p-3 producto-imagen" alt="${producto.titulo}" style="height: 500px;" />
            <div class="card-body producto-detalles">
              <h5 class="card-title producto-titulo">${producto.titulo}</h5>
              <p class="card-text ">
                  ${producto.descripcion}
              </p>
              <p class="card-text fs-4 font-monospace text-end producto-precio">
                  ID: ${producto.id}.  Precio:$${producto.precio}
              </p>
              <a class="btn btn-dark btn-lg producto-agregar" id="${producto.id}">Agregar</a>
           </div>
          </div>
        </div>
        `
        contenedorProductos.append(div);
  })
      actualizarBotonesAgregar() 
} 


botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
 
      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

          if (e.currentTarget.id != "todos") {
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);

      } else {
          cargarProductos(productos);
      }
  })
});



function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productCart

let productosEnCartLocalStor = localStorage.getItem("productos-en-cart-localStorage")

// const productosEnCartLocalStor = JSON.parse(localStorage.getItem("productos-en-cart-localStorage"))

if (productosEnCartLocalStor){
  productCart = JSON.parse(productosEnCartLocalStor)
  actualizarItemsEnCart()
}else{
  productCart = [];
}

function agregarAlCarrito(event){
  Toastify({
    text: "✅ Se agrego el producto al carrito ",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #303846, #2a313d)",
      fontSize: "1.5 rem"
    },
    offset: {
      x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function(){} // Callback after click
  }).showToast();

    const idBoton = event.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    
    if(productCart.some(producto => producto.id === idBoton )){
       const index = productCart.findIndex(producto => producto.id === idBoton)
       productCart[index].cantidad++ 
    }else{
      productoAgregado.cantidad = 1
      productCart.push(productoAgregado)
    }
    actualizarItemsEnCart()
    // Quiero guardar "conts productosEnCarrito []" en el local storage 
    //Con el metodo SetItem
    localStorage.setItem("productos-en-cart-localStorage", JSON.stringify(productCart))
} 

//Actualizar el contador del menu
function actualizarItemsEnCart(){
  let contadorCart = productCart.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)
  cantidadEnCarrito.innerText = contadorCart
}

