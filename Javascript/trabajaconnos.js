//trabaja con nos
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");
let file = document.getElementById("file");
let textArea = document.getElementById("textArea");
let form = document.getElementById("formulario");
let submit = document.getElementById("submit");
let validacion = [nombre, apellido, correo, file, telefono, textArea];

let closemodal = document.getElementById("closeModal");
let filesVal = false

form.addEventListener("submit", function (evento) {
  
  evento.stopPropagation();
  evento.preventDefault();
  validacion2(validacion);
  checkFileSize();
  if (file.classList.contains("is-valid") && apellido.classList.contains("is-valid") && nombre.classList.contains("is-valid") && correo.classList.contains("is-valid") && telefono.classList.contains("is-valid") && textArea.classList.contains("is-valid") && filesVal === true) {
    showAlertSucceed2(validacion);
  }
      
})




function checkFileSize() {

    const files = file.files;
    
  if (files[0].size> 1000 * 1024) {
     file.classList.remove("is-valid");
    file.setCustomValidity("El peso archivo seleccionado debe ser menor a 1MB");
    filesVal = false
    
  }else {
      file.setCustomValidity("");
      file.classList.add("is-valid");
      file.classList.remove("is-invalid");
     filesVal = true
    }
    file.reportValidity();
      return;
}




closemodal.addEventListener("click", function () {
    modal.hide()
})
