var mouseX, mouseY;

function viewCoords(coordenadas) {
  if (coordenadas.offsetX) {
    mouseX = coordenadas.offsetX;
    mouseY = coordenadas.offsetY;
  } else if (coordenadas.layerX) {
    mouseX = coordenadas.layerX;
    mouseY = coordenadas.layerY;
  }

  document.getElementById("coords").innerHTML =
    mouseX + " X" + ", " + mouseY + " Y";
}

function setCoords(coordenadas){
    if (coordenadas.offsetX) {
        mouseX = coordenadas.offsetX;
        mouseY = coordenadas.offsetY;
      } else if (coordenadas.layerX) {
        mouseX = coordenadas.layerX;
        mouseY = coordenadas.layerY;
      }
      console.log(`${mouseX},${mouseY}`);

      const container_inputs_polygon = document.getElementById("container-inputs-polygon");
      

      return `${mouseX},${mouseY}`;
}



const containerItemImg = document.querySelector(".container-item-img");

console.log(containerItemImg);
console.log(containerItemImg.offsetHeight);

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const svgprint = document.getElementById("sev-print-dom");
var newArray = [];

fetch("http://localhost:3001/api/v1/coordenadas")
  .then((response) => response.json())
  .then((data) => {
    getData(data);
  });

function getData(data) {
  data.forEach((element) => {
    newArray += `
        <polygon class="imp-shape imp-shape-poly" data-shape-title="Casa 69" points="${element.secuencia_coordenadas}" />
        `;
  });
  svgprint.innerHTML = newArray;
}
