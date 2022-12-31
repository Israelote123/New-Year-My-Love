let main = document.querySelectorAll(".normal");
let heartButton = document.getElementById("heart");
const music = new Audio("./sound/Idea_22.mp3");
music.loop = true;
const letter = [
  "Hola Josefina, feliz año nuevo",
  "quiero dedicarte unas palabras",
  "tal vez no sean las únicas que recibas, pero si las mas honestas",
  "Desde que llegaste a mi vida la cambiaste completamente",
  "dio una vuelta completa!!!",
  "Me hiciste experimentar sensaciones que nadie me había hecho sentir, lograste sacarme sonrisas con un simple hola",
  "hacer que este impaciente por platicar contigo o estar los dos allí, en silencio, juntos, en paz",
  "Imaginarme cosas increíbles, querer trabajar aún mas para cumplir esos sueños",
  "Sueños que llegan cada noche y me hacen decir \nLA AMO",
  "Hemos pasado por tantas emociones y cosas juntos",
  "Hemos estado en el cielo, hemos estado en lo mas bajo, nos hemos separado...",
  "Pero a pesar de todo, seguimos aquí, encontrandonos, esperando que ahora sea el momento, viéndonos a través de pantallas y aun así,",
  "sentir esa calidez, esa confianza, ese sentimiento llamado amor, creciendo juntos, a través del tiempo, paso a paso",
  "sosteniéndonos incluso sin darnos cuenta de lo tanto que nos apoyamos, decirnos tanto con un simple mensaje de voz, querer decir tanto, pero que no haya palabras y terminamos diciendo solo un\nTE AMO",
  "Gracias por tantos recuerdos, tanta felicidad, gracias por este gran año estar a mi lado",
  "Le ruego a Dios nos de muchos años mas juntos, y que sin importar lo que pase, pasemos sobre cualquier dificultad juntos",
  'Veras que un día, ya no sera solo detras de una pantalla, \nmi pequeña niña <i class="far fa-heart" style="font-size: 1rem;"></i>',
  '',
];

//Boton de corazon
heartButton.addEventListener("click", () => {
  //efecto de humo
  main.forEach((letter) => {
    letter.className += " smoke";
  });
  document.querySelector(".container").className += " smoke";
  //Desaparece el menu
  setTimeout(() => {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container-letter").style =
      "display: flex; height:100%; width: 100%; align-items: center; justify-content: center;";

    createLetter();
    music.play();
  }, 3200);
});

//Carta

function createLetter() {
  const typed = new Typed(".typed", {
    strings: letter,
    typeSpeed: 75,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    onComplete: (self) => {
      setTimeout(() => {
        document.querySelector(".container-letter").style.display = "none";
        document.querySelector(".container-video").style =
          "display: flex; height:100%; width: 100%; align-items: center; justify-content: center;";
      }, 1000);
    },
  });
}

function video() {
  document.querySelector(".container-letter").style.display = "none";
  document.querySelector(".container-video").style.display =
    "display: flex; height:100%; width: 100%; align-items: center; justify-content: center;";
}

document.getElementById("especial").addEventListener("play", () => {
  music.play ? music.pause() : music.pause();
});


document.getElementById("especial").addEventListener("ended", () => {
  setTimeout(() => {
    music.pause ? music.play() : music.play();
  }, 1000);
});
