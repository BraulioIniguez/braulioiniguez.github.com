// PRODUCTOS
const productos = [
  // Abrigos
  {
    id: "Avena-01",
    titulo: "Avena y arroz",
    imagen: "./img/arrozYavena.webp",
    descripcion: "Excelente Avena y Arroz de 270g",
    categoria: {
      nombre: "Abarrotes",
      id: "abarrotes",
    },
    precio: 55,
  },
  {
    id: "cereral-01",
    titulo: "Cheerios Miel",
    imagen: "./img/cheerios.webp",
    descripcion: "Cereal Cheerios Miel de 1.02k",
    categoria: {
      nombre: "Abarrotes",
      id: "abarrotes",
    },
    precio: 85,
  },
  {
    id: "cereal-02",
    titulo: "Extra arándano",
    imagen: "./img/extraKelloggs.webp",
    descripcion: "Cereal Kellogg's extra arándano de 710g",
    categoria: {
      nombre: "Abarrotes",
      id: "abarrotes",
    },
    precio: 75,
  },
  {
    id: "galletas-01",
    titulo: "Pack Galletas Maria",
    imagen: "./img/galletasMaritas.webp",
    descripcion: "Pack de 5 paquetes de galletas maria de 170g c/u",
    categoria: {
      nombre: "Abarrotes",
      id: "abarrotes",
    },
    precio: 125,
  }
  // {
  //   id: "abrigo-05",
  //   titulo: "Abrigo 05",
  //   imagen: "./img/abrigos/05.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Abrigos",
  //     id: "abrigos",
  //   },
  //   precio: 1000,
  // },
  // // Camisetas
  // {
  //   id: "camiseta-01",
  //   titulo: "Camiseta 01",
  //   imagen: "./img/camisetas/01.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-02",
  //   titulo: "Camiseta 02",
  //   imagen: "./img/camisetas/02.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-03",
  //   titulo: "Camiseta 03",
  //   imagen: "./img/camisetas/03.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-04",
  //   titulo: "Camiseta 04",
  //   imagen: "./img/camisetas/04.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-05",
  //   titulo: "Camiseta 05",
  //   imagen: "./img/camisetas/05.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-06",
  //   titulo: "Camiseta 06",
  //   imagen: "./img/camisetas/06.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-07",
  //   titulo: "Camiseta 07",
  //   imagen: "./img/camisetas/07.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "camiseta-08",
  //   titulo: "Camiseta 08",
  //   imagen: "./img/camisetas/08.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Camisetas",
  //     id: "camisetas",
  //   },
  //   precio: 1000,
  // },
  // // Pantalones
  // {
  //   id: "pantalon-01",
  //   titulo: "Pantalón 01",
  //   imagen: "./img/pantalones/01.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Pantalones",
  //     id: "pantalones",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "pantalon-02",
  //   titulo: "Pantalón 02",
  //   imagen: "./img/pantalones/02.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Pantalones",
  //     id: "pantalones",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "pantalon-03",
  //   titulo: "Pantalón 03",
  //   imagen: "./img/pantalones/03.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Pantalones",
  //     id: "pantalones",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "pantalon-04",
  //   titulo: "Pantalón 04",
  //   imagen: "./img/pantalones/04.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Pantalones",
  //     id: "pantalones",
  //   },
  //   precio: 1000,
  // },
  // {
  //   id: "pantalon-05",
  //   titulo: "Pantalón 05",
  //   imagen: "./img/pantalones/05.jpg",
  //   descripcion: "Avena y Arroz Gerber",
  //   categoria: {
  //     nombre: "Pantalones",
  //     id: "pantalones",
  //   },
  //   precio: 1000,
  // },
];
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
        `
        contenedorProductos.append(div);
  })
      actualizarBotonesAgregar() 
} 
cargarProductos(productos);


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

let productosEnCarrito

const productosEnCartLocalStor = JSON.parse(localStorage.getItem("productos-en-cart-localStorage"))

if (productosEnCartLocalStor){
  productosEnCarrito = productosEnCartLocalStor
  actualizarItemsEnCart()
}else{
  productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    
    if(productosEnCarrito.some(producto => producto.id === idBoton )){
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
       productosEnCarrito[index].cantidad++ 
    }else{
      productoAgregado.cantidad = 1
      productosEnCarrito.push(productoAgregado)
    }
    actualizarItemsEnCart()
    // Quiero guardar "conts productosEnCarrito []" en el local storage 
    //Con el metodo SetItem
    localStorage.setItem("productos-en-cart-localStorage", JSON.stringify(productosEnCarrito))
} 

//Actualizar el contador del menu
function actualizarItemsEnCart(){
  let contadorCart = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
  cantidadEnCarrito.innerText = contadorCart
}

