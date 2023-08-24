const items = document.getElementById("items");
const footer = document.getElementById("footerC");
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let carrito = {};

//Este metodo hace que apenas cargue la pagina revise el local storage y revise si existe algun objeto
//carrito para no perder los datos
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('carrito')) {
          carrito = JSON.parse(localStorage.getItem('carrito'))
          pintarCarrito()
    }
  });

  items.addEventListener("click", (e) => {
    btnAccion(e);
  });

    
  const pintarCarrito = () => {
    items.innerHTML = "";
    Object.values(carrito).forEach((producto) => {
      templateCarrito.querySelector("th").textContent = producto.id;
      templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
      templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
      templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
      templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
      templateCarrito.querySelector("span").textContent =
        producto.cantidad * producto.precio;
  
      const clone = templateCarrito.cloneNode(true);
      fragment.appendChild(clone);
    });
    items.appendChild(fragment);
  
    pintarFooter();
  
    localStorage.setItem('carrito', JSON.stringify(carrito))
  };
  
  const pintarFooter = () => {
    footer.innerHTML = "";
    if (Object.keys(carrito).length === 0) {
      footer.innerHTML =
        ' <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>';
      return;
    }
    const nCantidad = Object.values(carrito).reduce(
      (acc, { cantidad }) => acc + cantidad,
      0
    );
    const nPrecio = Object.values(carrito).reduce(
      (acc, { cantidad, precio }) => acc + cantidad * precio,
      0
    );
  
    templateFooter.querySelectorAll("td")[0].textContent = nCantidad;
    templateFooter.querySelector("span").textContent = nPrecio;
  
    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
  
    footer.appendChild(fragment);
  
    const vaciar = document.getElementById("vaciar-carrito");
    vaciar.addEventListener("click", () => {
      carrito = {};
      pintarCarrito();
    });
  };
  
  //Revisa si se apreto el boton de + o el de - para asi sumar o restar la cantidad al producto
  const btnAccion = (e) => {
    if (e.target.classList.contains("btn-info")) {
      const producto = carrito[e.target.dataset.id];
      producto.cantidad++;
      carrito[e.target.dataset.id] = { ...producto };
      pintarCarrito();
    }
  
    if (e.target.classList.contains("btn-danger")) {
      const producto = carrito[e.target.dataset.id];
      producto.cantidad--;
      if (producto.cantidad === 0) {
        delete carrito[e.target.dataset.id];
      }
      pintarCarrito();
    }
  
    e.stopPropagation();
  };