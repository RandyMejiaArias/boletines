//+542974187527

//Obtener los elementos de la clase '.close'
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function(link){

  //Agregar un evento click a cada elemento
  link.addEventListener("click",function(ev){
    ev.preventDefault();

    //Cambiar la animación del elemento '.content'
    let content = document.querySelector('.content');

    //Quitarle las clases de animación que ya tiene
    content.classList.remove("jackInTheBox");
    content.classList.remove("animated");

    //Agregar clases para animar su salida
    content.classList.add("animated");
    content.classList.add("fadeOutUp");

    setTimeout(function(){
      //Redireccionar nuevamente
      location.href = "/boletines";
    },600);
  });
});