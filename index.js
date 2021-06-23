// Selecciono el conjunto de celdas
let cells = document.getElementsByClassName('cell')
// El control del estado de la barra y una flag para saber la posicion de la celda
let isPaused = false;
let flag = 0;


// Start quita la pausa, comienza el intervalo y pinta las celdas hasta el final.
function start() {
  isPaused = false;
  window.setInterval(() => {
    if(!isPaused) {
      if(flag < 15) {
        cells[flag].style.backgroundColor = "green";
        flag += 1;
        // isPaused = false;
      } else {
        clearInterval();
      }
    }
  },500);
  
}

function stop(e) {
  isPaused = true;
}


function reset() {
  for(let i = 0; i < flag; i++) {
    cells[i].style.backgroundColor = 'white'
  }
  clearInterval();
  flag = 0;
  isPaused = true;
}
