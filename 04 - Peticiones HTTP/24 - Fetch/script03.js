/*
  Fetch API
    blob(): Binary Long OBject
    Los Blobs representan datos que no necesariamente se encuentran en un formato nativo de JavaScript.
    La interfaz File se encuentra basada en un Blob, heredando y expendiendo la funcionalidad de un
    Blob para soportar archivos en el sistema del usuario.

    Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla
    URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
    https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
  fetch('lupe.jpg') // Petición a un recurso
    .then((res) => res.blob())
    .then((img) => {
      document.getElementById('img').src = URL.createObjectURL(img);
    });
});

buttonPDF.addEventListener('click', () => {
  fetch('comprobante.pdf')
    .then((res) => res.blob())
    .then((pdf) => {
      document.getElementById('pdf').href = URL.createObjectURL(pdf);
    });
});
