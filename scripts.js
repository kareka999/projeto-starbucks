let imagen = document.querySelector(".imagen-copo")
let circulo=document.querySelector(".circulo")


function trocaimagem(endereco){

    imagen.src= "img/img1.png"
  imagen.src=(endereco)
   
}
function trocacor(cor){
    circulo.style.background = cor
}