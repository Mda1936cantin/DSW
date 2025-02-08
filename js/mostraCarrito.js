const mostrarCarrito = document.getElementById("mostrarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras");
mostrarCarrito.addEventListener("click", () => {
  carritoDeCompras.className('mostrar');
  carritoDeCompras.classList.remove('d-none')
})