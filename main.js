textoOriginal = document.querySelector("#textoOriginal");
textoEncriptado = document.querySelector("#textoEncriptado");

function encriptarTexto() {
  let mensajeOriginal = textoOriginal.value.toLowerCase();
  let mensajeEncriptado = mensajeOriginal
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  textoEncriptado.value = mensajeEncriptado;
}

function desencriptarTexto() {
  let mensajeOriginal = textoOriginal.value.toLowerCase();
  const mensajeDesencriptado = mensajeOriginal
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  textoEncriptado.value = mensajeDesencriptado;
}

function validarEntrada(event) {
  const charCode = event.charCode;
  const validCharacters = /^[a-zA-Z0-9\s]*$/;

  if (!validCharacters.test(String.fromCharCode(charCode))) {
    event.preventDefault();
  }
}

const btnCopiar = document.querySelector(".btn__copiar");

btnCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
  const textoOriginal = document.querySelector("#textoEncriptado");
  textoOriginal.select();
  document.execCommand("copy");
}
