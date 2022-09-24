/*function hizoClick() {
  alert("Sending information");
}

let bottom = document.getElementById("bottom");
let text = document.getElementById("modificarText");

bottom.addEventListener("click", hizoClick);
*/

const crearautorUrl =
  "https://minticgrupo4.herokuapp.com/libros/agregarAutor";

function agruparData(event_) {
  event_.preventDefault(); //para evitar que el evento formulario se ejecute como es.
  const cod_autor = document.registro.cod_autor.value;
  const des_autor = document.registro.des_autor.value;

  //Objeto js
  console.log("creando json js");
  const data = {
    cod_autor: cod_autor,
    des_autor: des_autor,
  };

  //convertir objeto js a json
  const dataSend = JSON.stringify(data);
  console.log(typeof data);
  console.log(typeof dataSend);
  crearlibro(dataSend);
}

function crearautor(data) {
  console.log(data);
  fetch(crearautorUrl, {
    method: "POST",
    headers: {
      "content-type": "text/json",
    },
    body: data,
  })
    .then((response) => {
      //console.log(response.status);
      //procesar si la promesa tiene codigo 200 y darle manejo con el else.
      console.log("Ingresando a if de reponse");
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.status);
      }
    })
    //si el codigo es 200 procesamos la promesa.
    .then((data) => {
      //se imprime el return del backend donde indica que el libro se ha creado satisfatoriamente.
      console.log(data);
    })
    .catch((err) => {
      console.error("ERROR: ", err.message);
    });
}

document.registro.addEventListener("submit", agruparData);
