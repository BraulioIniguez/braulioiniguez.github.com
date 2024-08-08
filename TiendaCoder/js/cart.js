let productosEnCart = localStorage.getItem("productos-en-cart-localStorage")
productosEnCart = JSON.parse(productosEnCart)

// console.log(JSON.parse(productosEnCart))

const emptyCart = document.querySelector("#empty-cart")
const productCart = document.querySelector("#cart-productos")
const cartAccion = document.querySelector("#cart-accion")
const purchasedCart = document.querySelector("#purchased-cart")
let btnsDelete = document.querySelectorAll(".btns-delete")

const btnEmpty = document.querySelector("#cart-accion-empty")
const updateNumer = document.querySelector("#total")
const btnBuy = document.querySelector("#cart-accion-buy")


function cargarProductosEnCarrito(){
    if(productosEnCart && productosEnCart.length > 0){
        
        emptyCart.classList.add("disabled")
        purchasedCart.classList.add("disabled")
        productCart.classList.remove("disabled")
        cartAccion.classList.remove("disabled")
        
    
        productCart.innerHTML = ""
    
        productosEnCart.forEach(producto => {
            const div = document.createElement("div")
            div.classList.add("cart-producto")
            div.innerHTML= `
                <img class="cart-producto-imagen ms-3" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="cart-producto-titulo">
                     <small>Titulo</small>
                     <h3>${producto.titulo}</h3>
                </div>
                <div class="cart-producto-cantidad fs-3">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="cart-producto-precio fs-3">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="cart-producto-subtotal fs-3">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button id="${producto.id}" class="btns-delete">
                    <i class="bi bi-trash3 fs-3 text-danger "></i>
                </button>
            `
    
            productCart.append(div)
        });
    
    
    }else{
        emptyCart.classList.remove("disabled")
        purchasedCart.classList.add("disabled")
        productCart.classList.add("disabled")
        cartAccion.classList.add("disabled")
    
    }
    updateBtnsDelete()
    updateTotal()
}

cargarProductosEnCarrito()


function updateBtnsDelete(){
    btnsDelete = document.querySelectorAll(".btns-delete")

    btnsDelete.forEach(btn => {
        btn.addEventListener("click", deleteOfCart)
    })
}

function deleteOfCart(eve){

    Toastify({
        text: "❌ Se elimino del carrito ",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #303846, #2a313d)",
          fontSize: "1.9 rem"
        },
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
      }).showToast();

    const btnId = eve.currentTarget.id
    const index = productosEnCart.findIndex(producto => producto.id === btnId)

     productosEnCart.splice(index, 1)
     cargarProductosEnCarrito()

     localStorage.setItem("productos-en-cart-localStorage", JSON.stringify(productosEnCart))
}
  
btnEmpty.addEventListener("click", emptyCartInStore)

function emptyCartInStore(){

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Estas seguro?",
        text: "Seguro que quieres 'vaciar el carrito' ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "SI, Estoy seguro!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCart.length = 0
            localStorage.setItem("productos-en-cart-localStorage", JSON.stringify(productosEnCart))
            cargarProductosEnCarrito()
          swalWithBootstrapButtons.fire({
            title: "Exito!",
            text: "Se vacio correctamente el carrito de compras ",
            icon: "success"

          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "Puedes seguir comprando 🛒",
            icon: "error"
          });
        }
      });

}

function updateTotal() {
    const totalPurchased = productosEnCart.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad),0)
    total.innerText = `$${totalPurchased}`
}
// ******************************************************************

btnBuy.addEventListener("click", buyCart)

function buyCart(){
    productosEnCart.length = 0
    localStorage.setItem("productos-en-cart-localStorage", JSON.stringify(productosEnCart))
    
    emptyCart.classList.add("disabled")
    purchasedCart.classList.remove("disabled")
    productCart.classList.add("disabled")
    cartAccion.classList.add("disabled")

}