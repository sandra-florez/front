/*function hizoClick() {
  alert("Sending information");
}

let bottom = document.getElementById("bottom");
let text = document.getElementById("modificarText");

bottom.addEventListener("click", hizoClick);
*/

reglogin = [];
let bottomBuscar = document.getElementById("bottomBuscarLogin");

const getLoginUrl =
  "https://minticgrupo4.herokuapp.com/libros/consultarLogin";

function clickBuscarLogin() {
  getLogin();
}
function getLogin() {
  fetch(getloginUrl)
    .then((response) => {
      console.log(response.status);
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      //convertir objeto del back en objecto json.
      regLogin = JSON.parse(data);
      procesarLogin();
    })
    .catch((err) => {
      console.error("ERROR: ", err.message);
    });
}

function procesarLogin() {
  const tabla = document.createElement("table");
  const hileraHeader = document.createElement("tr");

  for (let k in regLogin[0]) {
    const celdaHeder = document.createElement("td");
    const textoHeaders = document.createTextNode(k);
    celdaHeder.appendChild(textoHeaders);
    hileraHeader.appendChild(celdaHeder);
  }
}

bottomBuscar.addEventListener("click", clickBuscarLogin);
