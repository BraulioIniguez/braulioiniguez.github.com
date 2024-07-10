//Este es el segundo y use solo una funcion mas simple y se selecciona escribiendo 
const productos = [
    { nombre: "extra", precio: 35},
    { nombre: "avena", precio: 55 },
    { nombre: "cheerios", precio: 85 },
    { nombre: "sal", precio: 20 },
    { nombre: "zucaritas", precio: 65},
    { nombre: "galletas", precio: 85}
  ];
  
  function agregarAlCarrito() {
    let carrito = [];
    let total = 0;
  
    while (true) {
        let seleccion = prompt("Ingrese el nombre del producto que desea agregar al carrito (o 'fin' para terminar):".toLowerCase());
  
        if (seleccion.toLowerCase() === 'fin') {
            break;
        }
  
        let producto = productos.find(produ => produ.nombre.toLowerCase() === seleccion.toLowerCase());
  
        if (producto) {
            carrito.push(producto);
            total += producto.precio;
            alert(`${producto.nombre} agregado al carrito. Total actual: $${total}`);
        } else {
            alert("Producto no encontrado, intente de nuevo.");
        }
    }
  
    alert(`Total final de la compra: $${total}`);
  }