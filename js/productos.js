
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
  card.className = 'product_card row col-2 m-3 p-3 rounded bg-light';
  card.innerHTML = `
    <img style="width: 200px; height: 200px;" src="${producto.images[0]}" alt="${producto.descripcion}">
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