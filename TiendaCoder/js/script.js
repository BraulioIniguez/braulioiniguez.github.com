
//Hice dos procedimientos que llevan al mismo resultado en las dos paguinas y en un solo Script 
//Este es el primero y use funciones y un array y se selecciona por un ID 

// Array de productos disponibles

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 10 },
  { id: 2, nombre: 'Producto 2', precio: 15 },
  { id: 3, nombre: 'Producto 3', precio: 20 },
  { id: 4, nombre: 'Producto 4', precio: 25 },
  { id: 5, nombre: 'Producto 5', precio: 30 },
];

// Carrito de compras (inicialmente vacío)
let carrito = [];

function iniciarCarrito() {
  let seleccion;
  do {
      seleccion = prompt('Ingrese el ID del producto que desea agregar al carrito (o "fin" para terminar):');
      if (seleccion !== 'fin') {
          agregarAlCarrito(parseInt(seleccion));
      }
  } while (seleccion !== 'fin');

  mostrarCarrito();
}

function agregarAlCarrito(idProducto) {
  const producto = productos.find(prod => prod.id === idProducto);
  if (producto) {
      carrito.push(producto);
      alert(`Producto "${producto.nombre}" agregado al carrito. \n Cuesta: $${producto.precio}`);
  } else {
      alert('Producto no encontrado.');
  }
}

function mostrarCarrito() {
  if (carrito.length === 0) {
      alert('El carrito está vacío.');
  } else {
      let mensaje = 'Productos en el carrito:\n';
      carrito.forEach((producto, index) => {
          mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
      });
      alert(mensaje);
  }
}






