document.addEventListener("click", () => {
  vidas--;
  coracao.innerText = `X${vidas}`;
});

let blocos = document.getElementsByClassName("bloco");
let pontuação = document.getElementById("pontuacao");
let coracao = document.getElementById("vidas");
let cronometro = document.getElementById("cronometro");
let section = document.querySelector("section");

let pontos = 0;
let vidas = 3;
let segundos = 50;
let pontodepartida = false;

function Ralph() {
  let blocoRalph;
  let numero = Math.floor(Math.random() * 9);

  for (let i = 0; i < 9; i++) {
    blocos[i].id = `bloco`;
  }

  blocoRalph = blocos[numero];

  blocoRalph.id = `Ralph`;

  blocoRalph.addEventListener("click", () => {
    if (blocoRalph.id == `Ralph`) {
      pontos++;
      pontuação.innerText = `${pontos}`;
      vidas++;
      blocoRalph.id = null;
    }
  });

  pontodepartida = true;
}

function tempo() {
  segundos--;
  cronometro.innerText = `${segundos}`;
  if (segundos < 1 || vidas < 1) {
    section.style.display = `none`;
    clearInterval(intervalo);
    clearInterval(intervalo2);
  }
}

let intervalo = setInterval(tempo, 1000);
let intervalo2 = setInterval(Ralph, 2000);
