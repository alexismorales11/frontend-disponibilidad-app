
var mouseX, mouseY;

function setCoords(e) {
    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    } else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

    document.getElementById('coords').innerHTML = mouseX + ' X' + ', ' + mouseY + ' Y';
}

const svgprint = document.getElementById("sev-print-dom");
var newArray = [];

const valorPoligono1 = '451,227 463,373  159,396 155,391 144,251 149,248 450,224';
newArray = `
<polygon class="imp-shape imp-shape-poly" data-shape-title="Casa 69" points="${valorPoligono1}" />
`;

svgprint.innerHTML = newArray;

const containerItemImg = document.querySelector('.container-item-img');

console.log(containerItemImg)
console.log(containerItemImg.offsetHeight)