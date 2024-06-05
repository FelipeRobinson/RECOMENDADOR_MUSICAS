var Idade;
var Fantasia;
var Aventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  Idade = createInput("5");
  Fantasia = createCheckbox("Gosta de fantasia?");
  Aventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  var idade = Idade.value();
  var gostaDeFantasia = Fantasia.checked();
  var gostaDeAventura = Aventura.checked();
  var recomenda = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill (color(76, 0, 115));
  textAlign (CENTER, CENTER);
  textSize (38);
  text (recomenda, width / 2, height / 2);
}

function geraRecomendacao (idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } 
    else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } 
        else{
         return "Ladrões de bicicleta";
        }
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
  else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } 
    else {
      return "O feitiço do tempo";
    }
  }
}