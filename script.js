var Idade;
var Rap;
var Trap;
var PopInter;
var PopNac;
var Sertanejo;
var Rock;
var MPB;

var currentSong;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Recomendador de Músicas");
  createSpan("Sua idade:");
  Idade = createInput("5");
  Rap = createCheckbox("Gosta de Rap?");
  Trap = createCheckbox("Gosta de Trap?");
  PopInter = createCheckbox("Gosta de Pop Internacional?");
  PopNac = createCheckbox("Gosta de Pop Nacional?");
  Sertanejo = createCheckbox("Gosta de Sertanejo?");
  Rock = createCheckbox("Gosta de Rock?");
  MPB = createCheckbox("Gosta de MPB?");
}

function draw() {
  background("black");
  var idade = Idade.value();
  var gostaDeRap = Rap.checked();
  var gostaDeTrap = Trap.checked();
  var gostaDePopInter = PopInter.checked();
  var gostaDePopNac = PopNac.checked();
  var gostaDeSertanejo = Sertanejo.checked();
  var gostaDeRock = Rock.checked();
  var gostaDeMPB = MPB.checked();
  
  var songRecomendacao = geraRecomendacao(idade, gostaDeRap, gostaDeTrap, gostaDePopInter, gostaDePopNac, gostaDeSertanejo, gostaDeRock, gostaDeMPB);

  if (songRecomendacao !== currentSong) {
    if (currentSong) {
      currentSong.stop();
    }
    loadSound(songRecomendacao.file, function(sound) {
      sound.play();
      currentSong = sound;
    });
  }

  fill(color("red"));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(songRecomendacao.name, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRap, gostaDeTrap, gostaDePopInter, gostaDePopNac, gostaDeSertanejo, gostaDeRock, gostaDeMPB) {
  if (idade <= 18) {
    if (idade <= 10) {
      if (gostaDeRap) {
        return { name: "Desabafo/Deixa eu dizer (Marcelo D2)", file: "assets/desabafo.mp3" };
      }
      if (gostaDeTrap) {
        return { name: "Atos 2 (Trindade Records)", file: "assets/atos2.mp3" };
      }
      if (gostaDePopInter) {
        return { name: "Granade (Bruno Mars)", file: "assets/granade.mp3" };
      }
      if (gostaDePopNac) {
        return { name: "Anna Júlia (Los Hermanos)", file: "assets/anajulia.mp3" };
      }
      if (gostaDeSertanejo) {
        return { name: "Menino da Porteira (Daniel)", file: "assets/meninoDaPorteira.mp3" };
      }
      if (gostaDeRock) {
        return { name: "Beggin (Maneskin)", file: "assets/beggin.mp3" };
      }
      if (gostaDeMPB) {
        return { name: "Descobridor dos 7 mares (Tim Maia)", file: "assets/setemares.mp3" };
      }
    }
    if (idade <= 14) {
      if (gostaDeRap) {
        return { name: "Diário De Um Detento (Racionais)", file: "assets/diario.mp3" };
      }
      if (gostaDeTrap) {
        return { name: "Clickbait (Veigh)", file: "assets/clickbait.mp3" };
      }
      if (gostaDePopInter) {
        return { name: "Uptown Funk (Mark Ronson)", file: "assets/uptownfunk.mp3" };
      }
      if (gostaDePopNac) {
        return { name: "Meu Talismã (Isa)", file: "assets/talisma.mp3" };
      }
      if (gostaDeRock) {
        return { name: "Enter Sandman (Metallica)", file: "assets/sandman.mp3" };
      }
      if (gostaDeMPB) {
        return { name: "Manias de Você (Rita Lee)", file: "assets/manias.mp3" };
      }
    }
  }
  if (idade > 18) {
    if (gostaDeRap) {
      return { name: "Nego Drama (Racionais)", file: "assets/drama.mp3" };
    }
    if (gostaDeTrap) {
      return { name: "Qual é seu desejo? (Tz da Coro)", file: "assets/desejo.mp3" };
    }
    if (gostaDePopInter) {
      return { name: "Shake it Off (Taylor Swift)", file: "assets/shakeitoff.mp3" };
    }
    if (gostaDePopNac) {
      return { name: "Vafalume (Pollo e Ivo Mozart)", file: "assets/vafalume.mp3" };
    }
    if (gostaDeSertanejo) {
      return { name: "Tijolinho por Tijolinho (Enzo Rabelo)", file: "assets/tijolinho.mp3" };
    }
    if (gostaDeRock) {
      return { name: "Sete vidas (Pitty)", file: "assets/setevias.mp3" };
    }
    if (gostaDeMPB) {
      return { name: "Lança-Perfume (Rita Lee)", file: "assets/lanca.mp3" };
    }
  }
  return { name: "", file: "" };
}
