var Idade;
var Rap, Trap, PopInter, PopNac, Rock;

var beggin, diario, clickbait, talisma, desejo, vafalume, setevias;

var currentSong

function preload() {
  beggin = loadSound("beggin.mp3")
  clickbait = loadSound("clickbait.mp3")
  talisma = loadSound("talisma.mp3")
  desejo = loadSound("desejo.mp3")
  vafalume = loadSound("vafalume.mp3")
  setevias = loadSound("setevidas.mp3")
}

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de Músicas");
  var aviso = createElement("h3", "Aviso: não selecione mais de uma opção.");
  aviso.style("color", "red");
  
  createSpan("Sua idade:");
  Idade = createInput("5");
  Trap = createCheckbox("Gosta de Trap?");
  PopNac = createCheckbox("Gosta de Pop Nacional?");
  Rock = createCheckbox("Gosta de Rock?");
}

function draw() {
  background("black");
  var idade = Idade.value();
  var gostaDeTrap = Trap.checked();
  var gostaDePopNac = PopNac.checked();
  var gostaDeRock = Rock.checked();
  
  var Musica = TocandoMusica(idade, gostaDeTrap, gostaDePopNac, gostaDeRock);
  
  if (Musica !== currentSong) {
    if (currentSong) {
      currentSong.stop();
    }
    if (Musica) {
      Musica.play();
    }
    currentSong = Musica;
  }

  var recomenda = geraRecomendacao(idade, gostaDeTrap, gostaDePopNac, gostaDeRock);

  fill(color("red"));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomenda, width / 2, height / 2);
}

function geraRecomendacao (idade, gostaDeTrap, gostaDePopNac, gostaDeRock) {  
  if (idade < 18) {
    if (gostaDeTrap) return "Clickbait (Veigh)";
    if (gostaDePopNac) return "Meu Talismã (Isa)";
    if (gostaDeRock) return "Beggin (Maneskin)";
  }
  if (idade >= 18) {
    if (gostaDeTrap) return "Qual é seu desejo? (Tz da Coro)";
    if (gostaDePopNac) return "Vagalume (Pollo e Ivo Mozar)";
    if (gostaDeRock) return "Sete vidas (Pitty)";
  }
}

function TocandoMusica(idade, gostaDeTrap, gostaDePopNac, gostaDeRock) {
  if (idade < 18) {
    if (gostaDeTrap) return clickbait;
    if (gostaDePopNac) return talisma;
    if (gostaDeRock) return beggin;
  }
  if (idade >= 18) {
    if (gostaDeTrap) return desejo;
    if (gostaDePopNac) return vafalume;
    if (gostaDeRock) return setevias;
  }
  return undefined;
}