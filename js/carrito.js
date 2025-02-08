// Inicializamos el carrito con el objeto map(),
// Lo que permite la existencia de un solo par clave-valor en el carrito
// Y por ende, un solo producto de cada uno

const carrito = new Map()

// Con la funcion agregarAlCarrito() le pasamos un id de producto
// Usando el metodo has() verificamos si el producto ya se encuentra en el carrito
// Si el producto existe, le sumamos una unidad, sino lo agregammos
/**
 * Agrega un producto al carrito
 * Aumenta las unidades del producto si ya se encuentra en el carrito
 * @param {number} id - Id del producto a agregar
 * @return {void}
 */
const agregarAlCarrito = (id) => {
  if(!id) {
    return "No se recibió un id de producto"
  }
  if(carrito.has(id)){
    carrito.get(id).cantidad ++;
    console.log(carrito);
    
  } else {
    carrito.set(id, {cantidad: 1})
    console.log(carrito);
    
  }
}

/**
 * Resta un elemento del carrito
 * Si la cantidad es 0, lo elimina
 * @param {number} id 
 * @return {void}
 */
const restarAlCarrito = (id) => {
  if(carrito.has(id)){
    const producto = carrito.get(id);
    producto.cantidad --;
    console.log(carrito, producto);
    
    if(producto.cantidad === 0){
      carrito.delete(id);
      console.log(carrito);
      
    } 
  }
}

const mostrarCarrito = document.getElementById("mostrarCarrito");
const carritoDeCompras = document.getElementById("carritoDeCompras");
mostrarCarrito.addEventListener("click", () => {
  carritoDeCompras.className('mostrar');
  carritoDeCompras.classList.remove('d-none')
})


const mostrarProductos = () => {
  fetch('../mocks/products.json')
    .then(response => response.json())
    .then(productos => { productos = productos.products
      const contenedorProductos = document.getElementById('productos');
      
      productos.forEach(producto => {
        const card = crearProducto(producto);
        contenedorProductos.appendChild(card);
      });
    })
    .catch(error => console.error('Error:', error));
}

const crearProducto = (producto) => {
  const card = document.createElement('article');
  card.className = 'product_card row col-xs-12 col-sm-5 col-md-3 col-lg-2 m-3 p-3 rounded bg-light';
  card.innerHTML = `
    <img style="width: 200px; height: 200px; " src="${producto.images[0]}" alt="${producto.descripcion}">
    <h3 class="card-title fs-5">${producto.title}</h3>
    <p><strong>Precio: </strong>${producto.price}</p>
    <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary w-100 h-auto">Agregar al carrito</button>
    <button onclick="restarAlCarrito(${producto.id})" class="btn btn-primary w-100 h-auto">Restar al carrito</button>
  `;

  return card;
}

document.addEventListener('DOMContentLoaded', mostrarProductos);

// function productos () {
//   fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
// }
// productos()