var Idade;
var Trap;
var Rap;
var PopInternacional;
var PopNacional;
var Pagode;
var Funk;
var Rock;
var Sertanejo;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  Idade = createInput("5");
  Trap = createCheckbox("Gosta de Trap?");
  Rap = createCheckbox("Gosta de Rap?");
  PopInternacional = createCheckbox("Gosta de Pop Internacional?");
  PopNacional = createCheckbox("Gosta de Pop Nacional?");
  Pagode = createCheckbox("Gosta de Pagode?");
  Funk = createCheckbox("Gosta de Funk?");
  Rock = createCheckbox("Gosta de Rock?");
  Sertanejo = createCheckbox("Gosta de Sertanejo?");
}

function draw() {
  background("white");
  var idade = Idade.value();
  var gostaDeTrap = Trap.checked();
  var gostaDeRap = Rap.checked();
  var gostaDePopInternacional = PopInternacional.checked();
  var gostaDePopNacional = PopNacional.checked();
  var gostaDePagode = Pagode.checked();
  var gostaDeFunk = Funk.checked();
  var gostaDeRock = Rock.checked();
  var gostaDeSertanejo = Sertanejo.checked();
  var recomenda = geraRecomendacao(idade, gostaDeTrap, gostaDeRap, gostaDePopInternacional, gostaDePopNacional, gostaDePagode, gostaDeFunk, gostaDeRock, gostaDeSertanejo);

  fill (color(76, 0, 115));
  textAlign (CENTER, CENTER);
  textSize (38);
  text (recomenda, width / 2, height / 2);
}

function geraRecomendacao (idade, gostaDeTrap, gostaDeRap, gostaDePopInternacional, gostaDePopNacional, gostaDePagode, gostaDeFunk, gostaDeRock, gostaDeSertanejo) {
  if (idade <= 18) {
    if (idade <= 12) {
      if (gostaDeTrap) {
        return "Atos 2 (Trinade Records)";
      }
      if (gostaDeRap) {
        return "Espere mais um tempo...";
      }
      if (gostaDePopInternacional) {
        return "Billy Jeans (Michael Jackson)";
      }
      if (gostaDePopNacional) {
        return "Meu Abrigo (Melim)";
      }
      if (gostaDePagode) {
        return "Deixa acontecer naturalmente (Grupo Revelação)";
      }
      if (gostaDeFunk) {
        return "Espere mais um pouco...";
      }
      if (gostaDeRock) {
        return "Admiravel ship novo (Pitty)";
      }
      if (gostaDeSertanejo) {
        return "Menino da Porteira (Daniel)";
      }
    }
    if (idade <= 14) {
      if (gostaDeTrap) {
        return "Poesia Acústica 14 (Pinepple Storm)";
      }
      if (gostaDeRap) {
        return "Ela só quer paz (Projota)";
      }
      if (gostaDePopInternacional) {
        return "Shake It Of (Taylor Swift)";
      }
      if (gostaDePopNacional) {
        return "";
      }
      if (gostaDePagode) {
        return "Deixa acontecer naturalmente (Grupo Revelação)";
      }
      if (gostaDeFunk) {
        return "Espere mais um pouco...";
      }
      if (gostaDeRock) {
        return "Admiravel ship novo (Pitty)";
      }
      if (gostaDeSertanejo) {
        return "Menino da Porteira (Daniel)";
      }
    }
    if (idade <= 16) {
      if (gostaDeTrap) {
        return "Atos 2 (Trinade Records)";
      }
      if (gostaDeRap) {
        return "Espere mais um tempo...";
      }
      if (gostaDePopInternacional) {
        return "Billy Jeans (Michael Jackson)";
      }
      if (gostaDePopNacional) {
        return "Meu Abrigo (Melim)";
      }
      if (gostaDePagode) {
        return "Deixa acontecer naturalmente (Grupo Revelação)";
      }
      if (gostaDeFunk) {
        return "Espere mais um pouco...";
      }
      if (gostaDeRock) {
        return "Admiravel ship novo (Pitty)";
      }
      if (gostaDeSertanejo) {
        return "Menino da Porteira (Daniel)";
      }
    }
    if (idade <= 18) {
      if (gostaDeTrap) {
        return "Atos 2 (Trinade Records)";
      }
      if (gostaDeRap) {
        return "Espere mais um tempo...";
      }
      if (gostaDePopInternacional) {
        return "Billy Jeans (Michael Jackson)";
      }
      if (gostaDePopNacional) {
        return "Meu Abrigo (Melim)";
      }
      if (gostaDePagode) {
        return "Deixa acontecer naturalmente (Grupo Revelação)";
      }
      if (gostaDeFunk) {
        return "Espere mais um pouco...";
      }
      if (gostaDeRock) {
        return "Admiravel ship novo (Pitty)";
      }
      if (gostaDeSertanejo) {
        return "Menino da Porteira (Daniel)";
      }
    }
  }
  if (idade >= 18) {
    if (gostaDeTrap) {
      return "Atos 2 (Trinade Records)";
    }
    if (gostaDeRap) {
      return "Espere mais um tempo...";
    }
    if (gostaDePopInternacional) {
      return "Billy Jeans (Michael Jackson)";
    }
    if (gostaDePopNacional) {
      return "Meu Abrigo (Melim)";
    }
    if (gostaDePagode) {
      return "Deixa acontecer naturalmente (Grupo Revelação)";
    }
    if (gostaDeFunk) {
      return "Espere mais um pouco...";
    }
    if (gostaDeRock) {
      return "Admiravel ship novo (Pitty)";
    }
    if (gostaDeSertanejo) {
      return "Menino da Porteira (Daniel)";
    }
  }
}