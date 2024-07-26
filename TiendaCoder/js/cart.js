const productosEnCart = JSON.parse(localStorage.getItem("productos-en-cart-localStorage"))

const cartVacio = document.querySelector("#empty-cart")
const productCart = document.querySelector("#cart-productos")
const cartAccion = document.querySelector("#cart-accion")
const purchasedCart = document.querySelector("#purchased-cart")

if(productosEnCart){
    cartVacio.classList.add("disabled")
    productCart.classList.remove("disabled")
    cartAccion.classList.remove("disabled")
    purchasedCart.classList.add("disabled")

    productCart.innerHTML = ""

    productosEnCart.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("cart-producto")
        div.innerHTML= `
            <img class="cart-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="cart-producto-titulo">
                 <small>Titulo</small>
                 <h3>${producto.titulo}</h3>
            </div>
            <div class="cart-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="cart-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="cart-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button id="${producto.id} class="cart-producto-eliminar">
                <i class="bi bi-trash3"></i>
            </button>
        `

        productCart.append(div)
    });


}else{

}