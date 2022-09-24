/*function hizoClick() {
  alert("Sending information");
}

let bottom = document.getElementById("bottom");
let text = document.getElementById("modificarText");

bottom.addEventListener("click", hizoClick);
*/

const crearlibroUrl =
  "https://minticgrupo4.herokuapp.com/libros/agregarLibroPlu";

function agruparData(event_) {
  event_.preventDefault(); //para evitar que el evento formulario se ejecute como es.
  const cod_libro = document.registro.cod_libro.value;
  const plu = document.registro.plu.value;
  const cant_disponible_plu = document.registro.cant_disponible_plu.value;

  //Objeto js
  console.log("creando json js");
  const data = {
    cod_libro: cod_libro,
    plu: plu,
    cant_disponible_plu: cant_disponible_plu,
  };

  //convertir objeto js a json
  const dataSend = JSON.stringify(data);
  console.log(typeof data);
  console.log(typeof dataSend);
  crearlibro(dataSend);
}

function crearlibroplu(data) {
  console.log(data);
  fetch(crearlibropluUrl, {
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
      //se imprime el return del backend donde indica que el plu libro se ha creado satisfatoriamente.
      console.log(data);
    })
    .catch((err) => {
      console.error("ERROR: ", err.message);
    });
}

document.registro.addEventListener("submit", agruparData);
