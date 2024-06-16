var Idade;
var Rap;
var Trap;
var PopInter;
var PopNac;
var Sertanejo;
var Rock;
var MPB;

// músicas aqui...
var desabafo;
//var atos2;
var granade;
/* var anajulia;
var meninoDaPorteira;
var beggin;
var setemares;
var diario;
var clickbait;
var uptownfunk;
var talisma;
if (gostaDeSertanejo) return undefined;
var sandman;
var manias;
var negodrama;
var desejo;
var shakeitoff;
var vafalume;
var tijolinho;
var setevias;
var lancaperfume;
*/
var currentSong

function preload() {
  desabafo = loadSound("desabafo.mp3")
  atos2 = loadSound("atos2.mp3")
  granade = loadSound("granade.mp3")
}

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
  
  var songToPlay = getSongToPlay(idade, gostaDeRap, gostaDeTrap, gostaDePopInter, gostaDePopNac, gostaDeSertanejo, gostaDeRock, gostaDeMPB);
  
  if (songToPlay !== currentSong) {
    if (currentSong) {
      currentSong.stop();
    }
    if (songToPlay) {
      songToPlay.play();
    }
    currentSong = songToPlay;
  }

  var recomenda = geraRecomendacao(idade, gostaDeRap, gostaDeTrap, gostaDePopInter, gostaDePopNac, gostaDeSertanejo, gostaDeRock, gostaDeMPB);

  fill(color("red"));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomenda, width / 2, height / 2);
}

function geraRecomendacao (idade, gostaDeRap, gostaDeTrap, gostaDePopInter, gostaDePopNac, gostaDeSertanejo, gostaDeRock, gostaDeMPB) {
  if (idade <= 18) {
    if (idade <= 10) {
      if (gostaDeRap) {
        return "Desabafo/Deixa eu dizer (Marcelo D2)"
      }
      if (gostaDeTrap) {
        return "Atos 2 (Trindade Records)"
      }
      if (gostaDePopInter) {
        return "Granade (Bruno Mars)"
      }
      if (gostaDePopNac) {
        return "Anna Júlia (Los Hermanos)"
      }
      if (gostaDeSertanejo) {
        return "Menino da Porteira (Daniel)"
      }
      if (gostaDeRock) {
        return "Beggin (Maneskin)"
      }
      if (gostaDeMPB) {
        return "Descobridor dos 7 mares (Tim Maia)"
      }
    }
    if (idade <= 14) {
      if (gostaDeRap) {
        return "Diário De Um Detento (Racionais)"
      }
      if (gostaDeTrap) {
        return "Clickbait (Veigh)"
      }
      if (gostaDePopInter) {
        return "Uptown Funk (Bruno Mars)"
      }
      if (gostaDePopNac) {
        return "Talismã (Isa)"
      }
      if (gostaDeSertanejo) {
        return ""
      }
      if (gostaDeRock) {
        return "Sandman (Metallica)"
      }
      if (gostaDeMPB) {
        return "Manias de Você (Rita Lee)"
      }
    }
  }
  if (idade >= 18) {
    if (gostaDeRap) {
      return "Nego Drama (Racionais)"
    }
    if (gostaDeTrap) {
      return "Qual é seu desejo? (Tz da Coro)"
    }
    if (gostaDePopInter) {
      return "Shake it Of (Taylor Swift)"
    }
    if (gostaDePopNac) {
      return "Vafalume (Pollo e Ivo Mozar)"
    }
    if (gostaDeSertanejo) {
      return "Tijolinho por Tijolinho (Enzo Rabelo)"
    }
    if (gostaDeRock) {
      return "Sete vidas (Pitty)"
    }
    if (gostaDeMPB) {
      return "Lança-Perfume (Rita Lee)"
    }
  }
}

function getSongToPlay(idade, gostaDeRap, gostaDeTrap, gostaDePopInter, gostaDePopNac, gostaDeSertanejo, gostaDeRock, gostaDeMPB) {
  if (idade <= 18) {
    if (idade <= 10) {
      if (gostaDeRap) return desabafo;
      if (gostaDeTrap) return atos2;
      if (gostaDePopInter) return granade;
      if (gostaDePopNac) return anajulia;
      if (gostaDeSertanejo) return meninoDaPorteira;
      if (gostaDeRock) return beggin;
      if (gostaDeMPB) return setemares;
    }
    if (idade <= 14) {
      if (gostaDeRap) return diario;
      if (gostaDeTrap) return clickbait;
      if (gostaDePopInter) return uptownfunk;
      if (gostaDePopNac) return talisma;
      if (gostaDeSertanejo) return undefined;
      if (gostaDeRock) return sandman;
      if (gostaDeMPB) return manias;
    }
  }
  if (idade > 18) {
    if (gostaDeRap) return negodrama;
    if (gostaDeTrap) return desejo;
    if (gostaDePopInter) return shakeitoff;
    if (gostaDePopNac) return vafalume;
    if (gostaDeSertanejo) return tijolinho;
    if (gostaDeRock) return setevias;
    if (gostaDeMPB) return lancaperfume;
  }
  return undefined;
}