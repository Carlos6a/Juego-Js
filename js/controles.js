var  escudo;
escudo = 500;
misil= 50;
regenera= 25;


function dano() {
  escudo -= misil;
  console.log(escudo);
}

function regenerar() {
  escudo += regenera;
  console.log(escudo);
}
