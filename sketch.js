let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2","Recomendador de Filmes");
  createSpan("Sua idade: ");
  campoIdade=createInput();
  campoFantasia=createCheckbox("Gosta de fantasia?");
  campoAventura=createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white"); 
  fill(color(76,0,115));
  let gostaDeFantasia=campoFantasia.checked();
  let idade=campoIdade.value();
  let gostaDeAventura=campoAventura.checked();
  let recomendacao=geraRecomendacao(idade,
                                  gostaDeFantasia,gostaDeAventura);
  textAlign(CENTER,CENTER);
  textSize(38);
  text(recomendacao,width/2,height/2);
}

function geraRecomendacao(idade,gostaDeFantasia,gostaDeAventura){
  if(idade>=10){
    if (idade>=14){
      return "O menino que descobriu o vento";
    }
    else {
      if (idade>=12){
        if(gostaDeFantasia ||gostaDeAventura){
          return "Homem aranha no aranhaverso";
        }else{
          return "Ladrões de bicicleta";
        }
      }
      else{
        if(gostaDeFantasia){
          return "As aventuras de PI";
        }
        else {
          return "Depois da chuva";
        }
      }
    }
  }
  else {
    if(gostaDeFantasia){
      return "A viagem de Chihiro";
    }
    else
    {
      return "O feitiço do tempo";
    }
  }
}

