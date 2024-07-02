let carouselitem1 = document.getElementById("carouselitem1");
let carouselitem2 = document.getElementById("carouselitem2");
let contentToAppend = "";

function carouselClientes() {
    for (let i = 1; i < 19; i++) {
        if (i<10) {
            contentToAppend = `<img src="Imgs/clientes/download (${i}).png" class="clientes img-fluid mx-2" >`
           let div= document.createElement("div");
            div.innerHTML = contentToAppend;
            div.setAttribute("id", "slide1_id" + i);
            carouselitem1.appendChild(div);
             
        } else {
            contentToAppend = `<img src="Imgs/clientes/download (${i}).png" class="clientes img-fluid mx-2" >`
           let div= document.createElement("div");
            div.innerHTML = contentToAppend;
            div.setAttribute("id", "slide2_id" + i);
            carouselitem2.appendChild(div);
            
        }
    
       
    }
    return;
    
}

document.addEventListener("DOMContentLoaded", function () {
    carouselClientes();
    
})




