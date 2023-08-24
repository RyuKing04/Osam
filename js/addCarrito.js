const cards = document.getElementById("cards");
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let carrito = {};

//Este metodo hace que apenas cargue la pagina revise el local storage y revise si existe algun objeto
//carrito para no perder los datos
document.addEventListener("DOMContentLoaded", () => {
  //fetchData();
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
});

cards.addEventListener("click", (e) => {
  addCarrito(e);
});

//Estos metodos son los que se llaman desde el html, basicamente al llamarlos desde el html ellos
//ejecutan un llamado al json donde se encuentran los datos, en este caso nuestros productos, y 
//despues llaman a los metodos mostar enviandole la data y cualquier otro dato necesario.
const fetchData = async () => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarCards(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataC = async () => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarCamisas(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataP = async () => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarPantalones(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataT = async () => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarTenis(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataH = async () => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarHombre(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataM = async () => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarMujer(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataMarca = async (marca, tipo) => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarXMarca(data, marca, tipo);
  } catch (error) {
    console.log(error);
  }
};

const fetchDataTipoYGenero = async (genero, tipo) => {
  try {
    const res = await fetch("https://ropa.mocklab.io/RopaOsam");
    const data = await res.json();
    mostrarXTipoYGenero(data, genero, tipo);
  } catch (error) {
    console.log(error);
  }
};



//Metodos usados para ir madiante el uso de templates crear la cantidad de cards necesarias segun la cantidad de productos.
//Basicamente reciben un parametro que en este caso es el Json con los productos y se le dice que por cada uno de los productos
//cree una card. 
//Se usa "cloneNode(true): Esto crea un clon por decirlo asi del template y despues usando la variable fragment se usa appendChild
//Para annadir este nuevo clone al html

function mostrar(){
  data.forEach((producto)=>{
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);

  })

  cards.appendChild(fragment);
}

const mostrarCards = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    templateCard.querySelector(".btn-dark").dataset.id = producto.id;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });

  cards.appendChild(fragment);
};

const mostrarCamisas = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.tipo === "camisa") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarPantalones = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.tipo === "pantalon") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarTenis = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.tipo === "tenis") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarHombre = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.genero === "m") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarMujer = (data) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    if (producto.genero === "f") {
      templateCard.querySelector("h5").textContent = producto.title;
      templateCard.querySelector("p").textContent = producto.precio;
      templateCard
        .querySelector("img")
        .setAttribute("src", producto.thumbnailUrl);
      templateCard.querySelector(".btn-dark").dataset.id = producto.id;

      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
    }
  });

  cards.appendChild(fragment);
};

const mostrarXTipoYGenero = (data, genero, tipo) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    switch (tipo) {
      case "tenis":
        if (producto.tipo === "tenis") {
          if (producto.genero === genero) {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard
              .querySelector("img")
              .setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector(".btn-dark").dataset.id = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
          }
        }
        break;
      case "camisa":
        if (producto.tipo === "camisa") {
          if (producto.genero === genero) {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard
              .querySelector("img")
              .setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector(".btn-dark").dataset.id = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
          }
        }
        break;
      case "pantalon":
        if (producto.tipo === "pantalon") {
          if (producto.genero === genero) {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard
              .querySelector("img")
              .setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector(".btn-dark").dataset.id = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
          }
        }
        break;

      default:
        fetchDataH();
        break;
    }
  });
  cards.appendChild(fragment);
};

const mostrarXMarca = (data, marca, tipo) => {
  cards.innerHTML = "";
  data.forEach((producto) => {
    switch (tipo) {
      case "tenis":
        if (producto.marca === marca) {
          if (producto.tipo === tipo) {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard
              .querySelector("img")
              .setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector(".btn-dark").dataset.id = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
          }
        } else if (marca === "") {
          fetchDataT();
        }
        break;
      case "camisa":
        if (producto.marca === marca) {
          if (producto.tipo === tipo) {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard
              .querySelector("img")
              .setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector(".btn-dark").dataset.id = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
          }
        } else if (marca === "") {
          fetchDataC();
        }
        break;
      case "pantalon":
        if (producto.marca === marca) {
          if (producto.tipo === tipo) {
            templateCard.querySelector("h5").textContent = producto.title;
            templateCard.querySelector("p").textContent = producto.precio;
            templateCard
              .querySelector("img")
              .setAttribute("src", producto.thumbnailUrl);
            templateCard.querySelector(".btn-dark").dataset.id = producto.id;

            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
          }
        } else if (marca === "") {
          fetchDataP();
        }
        break;

      default:
        break;
    }
  });

  cards.appendChild(fragment);
};


//Metodo que revisa si se apreto el boton de comprar y si es asi llama al metodo setCarrito enviandole
//como parametro el producto asociado a ese boton.
const addCarrito = (e) => {
  if (e.target.classList.contains("btn-dark")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};
//Con el objeto que recibe construye el producto y lo annade al array de carrito y revisa si el objeto ya 
//existe en el array, en caso de ser asi lo que hace que le suma 1 a la cantidad
const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn-dark").dataset.id,
    title: objeto.querySelector("h5").textContent,
    precio: objeto.querySelector("p").textContent,
    cantidad: 1,
  };

  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  carrito[producto.id] = { ...producto };

  localStorage.setItem("carrito", JSON.stringify(carrito));
};
