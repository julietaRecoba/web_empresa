// contact form
let contact_nombre = document.getElementById("contact_nombre");
let contact_apellido = document.getElementById("contact_apellido");
let contact_correo = document.getElementById("contact_correo");
let contact_telefono = document.getElementById("contact_telefono");
let contact_textArea = document.getElementById("contact_textArea");
let contact_form = document.getElementById("contact_formulario");
let contact_submit = document.getElementById("contact_submit");
let contact_val0 = document.getElementById("val0");
let contact_val1 = document.getElementById("val1");
let contact_val2 = document.getElementById("val2");
let contact_val3 = document.getElementById("val3");
let contact_select = document.getElementById("contact_select");
let contact_closeModal = document.getElementById("contact_closeModal")


let contact_validacion = [contact_nombre, contact_apellido, contact_correo, contact_telefono, contact_textArea];

contact_form.addEventListener("submit", function (e) {

     e.stopPropagation();
    e.preventDefault();
     validacion2(contact_validacion);
     validateSelected();
     if (contact_nombre.classList.contains("is-valid") && contact_apellido.classList.contains("is-valid") && contact_correo.classList.contains("is-valid") && contact_telefono.classList.contains("is-valid") && contact_textArea.classList.contains("is-valid") ){
    showAlertSucceed2(contact_validacion);
  }
})

function validateSelected() {
     if (contact_val0.selected) {
          contact_select.classList.add("is-invalid");
          contact_select.classList.remove("is-valid");
          contact_select.setCustomValidity("selecciona una de las opciones");
     } else {
           contact_select.classList.remove("is-invalid");
          contact_select.classList.add("is-valid");
          contact_select.setCustomValidity("");
     }
     contact_select.reportValidity()
     return;
}
contact_closeModal.addEventListener("click", function () {
    modal.hide()
})
