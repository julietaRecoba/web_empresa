
document.addEventListener("DOMContentLoaded", function () {
    let headerTag = document.querySelector(".header");
    let navTag = document.getElementById("nav");
    let footerTag = document.getElementById("footer");
    let icons = document.getElementById("flaticonIcons");
   


    
    console.log(headerTag)
    console.log(footerTag)
    console.log(icons)
    let headerToAppend = ` <div id="header" class="d-flex flex-row m">
            <img id="logo" src="Imgs/LOGO-ARGUL.png" class="img-fluid">
            <div class="left d-flex d-row ">
            <li class="mx-3"><img class="mx-3 icon" src="Imgs/llamada.png" >2200 9130</li>
            <li><img class="mx-3 img-fluid icon" src="Imgs/alfiler-de-mapa.png" >Jujuy 2687</li>
            </div>
        </div>`
     let navToAppend = `<button id="navbutton" class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav" id="navbarScroll">
                
                <ul id="containNav" style="--bs-scroll-height: 100px;">
                    <div>
                        <li class="nav-item ">
                            <a class="growLine nav-link active" aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item dropdown ">
                            <a id="soluciones" class="growLine nav-link dropdown"role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                soluciones
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="ventas.html" class="dropdown-item">Ventas e instalaciones</a></li>
                                <li><a href="reclamos.html" class="dropdown-item">servicio tecnico</a></li>
                                <li><a href="mantenimiento.html" class="dropdown-item">Mantenimiento</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class=" growLine nav-link active" aria-current="page" href="proyectos.html">Proyectos</a>
                        </li>
                        <li class="nav-item">
                            <a class="growLine nav-link active" aria-current="page" href="QuienesSomos.html">Quienes somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="growLine nav-link active" aria-current="page" href="trabajaConNos.html">Trabaja con nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="growLine nav-link active" aria-current="page" href="contactoform.html">Contacto</a>
                        </li>
                        
                    </div>
                </ul>
                
            </div>`
    let footerToAppend = `<div class="containText  d-flex ">
        <div class="d-flex flex-wrap contacto">
            <div>
                <h5>Direccion</h5>
                <p>jujuy 2687</p>
            </div>
            <div>
                <h5>Telefono</h5>
                <p>2200 32748 </p>
            </div>
        </div>
        <div class="d-flex flex-wrap contacto" >
            <div >
                <h5>Email</h5>
                <p>argul@argulsa.com.uy</p>
            </div>
            <div>
                <h5>Horario</h5>
                <p>Lunes a Viernes de 8:30 a 18:00 hrs</p>
            </div>
        
        </div>
        <div  id="us">
            <div>
                <h5>Nosotros</h5>
                <div class="d-flex flex-column">
                    <a  href="#">Historia</a>
                    <a  href="#">Trabaja con nosotros</a>
                </div>
            </div>
            <div>
                <h5>Politicas de la empresa</h5>
                <div class="d-flex flex-column">
                    <a href="#">Privacidad y proteccion de datos</a>
                    <a href="#">Condiciones de uso</a>
                </div>
            </div>
        </div>`
    let iconsToAppend = ` <a href="https://www.flaticon.es/iconos-gratis/pin-de-mapa" title="pin de mapa iconos">Pin de mapa iconos creados por
        Anggara - Flaticon</a>
        <a href="https://www.flaticon.es/iconos-gratis/telefono" title="teléfono iconos">Teléfono iconos creados por Uniconlabs
            - Flaticon</a>
            <div><a href="https://www.flaticon.es/iconos-gratis/llave-inglesa" title="llave inglesa iconos">Llave inglesa iconos
                    creados
                    por Freepik - Flaticon</a>
                <a href="https://www.flaticon.es/iconos-gratis/trabajador" title="trabajador iconos">Trabajador iconos creados por
                    Freepik - Flaticon</a>
                <a href="https://www.flaticon.es/iconos-gratis/mantenimiento" title="mantenimiento iconos">Mantenimiento iconos
                    creados
                    por Eucalyp - Flaticon</a>
                <a href="https://www.flaticon.es/iconos-gratis/aire-acondicionado"
                    title="aire-acondicionado iconos">Aire-acondicionado
                    iconos creados por Freepik - Flaticon</a>
            </div>`
    
    headerTag.insertAdjacentHTML("afterbegin", headerToAppend);
   navTag.insertAdjacentHTML("afterbegin", navToAppend);
   footerTag.insertAdjacentHTML("beforeend", footerToAppend);
    icons.insertAdjacentHTML("beforeend", iconsToAppend);

})

let content = document.getElementById("content");
function generateContent(repeat) {
   
for (let i = 0; i < repeat; i++) {
    let img = document.createElement("img");
    let paragraph = document.createElement("p");
    let div = document.createElement("div");
    let innerDiv = document.createElement("div");
    let title = document.createElement("h2");
    content.appendChild(div);
    div.appendChild(innerDiv);
    div.appendChild(img);
    innerDiv.appendChild(title);
    innerDiv.appendChild(paragraph);
    img.classList.add("img-fluid");
    img.setAttribute("id", "img"+ i);
    paragraph.setAttribute("id", "p" + i);
    title.setAttribute("id", "title" + i)
   div.setAttribute("id","div" + i)
}

}

document.addEventListener("scroll", function () {
   let nav = document.querySelector("#nav");
    
  nav.classList.toggle("abajo", window.scrollY > 199)
   
    
})

let growLineBack =""

document.addEventListener("DOMContentLoaded", function () {
    let navScroll = document.getElementById("navbarScroll");
    document.addEventListener("click", function (e) {

    let target = e.target
        if (!(target.classList.contains("show") )) {
     navScroll.classList.remove("show");
        }
        e.stopPropagation()
        e.stopImmediatePropagation()
  
    })
    

   
})


  
function validacion2(array) {
   
    
array.forEach(el => {
    if (el.value.trim() === "") {
        el.classList.add("is-invalid");
        el.classList.remove("is-valid");
        el.setCustomValidity("por favor completa este campo");
         el.reportValidity();

    } else if (el.validity.patternMismatch) {
        el.classList.remove("is-valid");
        el.setCustomValidity("ingresa tus datos con un formato valido");
        
        el.reportValidity();
        } else if (el.validity.typeMismatch) {
        el.setCustomValidity("ingresa un formato valido");
        el.classList.remove("is-valid");
         
        el.reportValidity();
       
         
    } else {
        el.classList.remove("is-invalid");
        el.classList.add("is-valid");
        el.setCustomValidity("");
        
}
    el.reportValidity();
    return;
});
  

}

let modal = new bootstrap.Modal(document.getElementById("modal"), {
});
   
function showAlertSucceed2(array){
    for (let i = 0; i < array.length; i++) {
        if (array[i].classList.contains("is-valid")) {
           modal.show()
            
        }
        return;
    }
}



