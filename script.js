var Idade;
var Fantasia;
var Aventura;
var Acao;
var Drama;
var Terror;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  Idade = createInput("5");
  Fantasia = createCheckbox("Gosta de fantasia?");
  Aventura = createCheckbox("Gosta de aventura?");
  Acao = createCheckbox("Gosta de ação?");
  Drama = createCheckbox("Gosta de drama?");
}

function draw() {
  background("white");
  var idade = Idade.value();
  var gostaDeFantasia = Fantasia.checked();
  var gostaDeAventura = Aventura.checked();
  var gostaDeAcao = Acao.checked();
  var gostaDeDrama = Drama.checked();
  var recomenda = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeAcao, gostaDeDrama);

  fill (color(76, 0, 115));
  textAlign (CENTER, CENTER);
  textSize (38);
  text (recomenda, width / 2, height / 2);
}

function geraRecomendacao (idade, gostaDeFantasia, gostaDeAventura, gostaDeAcao, gostaDeDrama) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    }
    if (idade >=12) { 
      if (idade >= 12) {
          if (gostaDeFantasia && gostaDeAventura) {
            return "Homem aranha: no aranhaverso";          
          } 
          else{
          return "Ladrões de bicicleta";
          }
        } 
        if (gostaDeDrama) {
          return "Romeu e Julieta";
        }
        else {
          if (gostaDeFantasia) {
            return "As aventuras de pi";
          } 
          else {
            return "Depois da chuva";
          }
        }
      }
    }
    if (idade >= 18) {
      if (gostaDeDrama) {
        return "50 tons de cinza"
      }
      if (gostaDeFantasia) {
        return ""
      }
      if (gostaDeAventura) {
        return ""
      }
    }
    else {
      if (gostaDeFantasia) {
        return "A viagem de chihiro";
      } 
      if (gostaDeAventura) {
        return "O feitiço do tempo";
      }
      if (gostaDeAcao) {
        return "Power Rangers";
      } 
    }
}