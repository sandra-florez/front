/*function hizoClick() {
  alert("Sending information");
}

let bottom = document.getElementById("bottom");
let text = document.getElementById("modificarText");

bottom.addEventListener("click", hizoClick);
*/

const crearlibroUrl =
  "https://minticgrupo4.herokuapp.com/libros/agregarLibroCompleto";
//const crearlibroUrl = "http://127.0.0.1:8000//libros/agregarLibroCompleto";

function agruparData(event_) {
  event_.preventDefault(); //para evitar que el evento formulario se ejecute como es.
  const cod_autor = document.registro.cod_autor.value;
  const des_autor = document.registro.des_autor.value;
  const cod_editorial = document.registro.cod_editorial.value;
  const des_editorial = document.registro.des_editorial.value;
  const cod_libro = document.registro.cod_libro.value;
  const tit_libro = document.registro.tit_libro.value;
  const anio = document.registro.anio.value;
  const tema = document.registro.tema.value;
  const cant_plu = document.registro.cant_plu.value;
  const cant_disponible = document.registro.cant_disponible.value;
  const plu = document.registro.plu.value;
  const cant_disponible_plu = document.registro.cant_disponible_plu.value;

  //Objeto js
  console.log("creando json js");
  const data = {
    cod_autor: cod_autor,
    des_autor: des_autor,
    cod_editorial: cod_editorial,
    des_editorial: des_editorial,
    cod_libro: cod_libro,
    tit_libro: tit_libro,
    anio: anio,
    tema: tema,
    cant_plu: cant_plu,
    cant_disponible: cant_disponible,
    plu: plu,
    cant_disponible_plu: cant_disponible_plu,
  };

  //convertir objeto js a json
  const dataSend = JSON.stringify(data);
  console.log(typeof data);
  console.log(typeof dataSend);
  crearlibro(dataSend);
}

function crearlibro(data) {
  console.log(data);
  fetch(crearlibroUrl, {
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
