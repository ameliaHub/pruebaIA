let mazo = [
  { valor: 10 },
  { valor: 25 },
  { valor: 18 },
  { valor: 45 },
  { valor: 12 },
  { valor: 28 }
];
let cartasJugadas = [];
let puntuacion = 0;

function sacarCarta() {
  if (mazo.length === 0) {
    alert('¡No hay más cartas en el mazo!');
    return;
  }
  
  const carta = mazo.pop();
  const cartaElemento = document.createElement('div');
  cartaElemento.classList.add('carta');
  cartaElemento.textContent = `Carta: ${carta.valor}`;
  
  // Permite que el jugador coloque la carta en una zona
  document.querySelectorAll('.zona').forEach(zona => {
    zona.onclick = () => verificarClasificacion(carta, zona.id);
  });

  // Mostrar la carta en el mazo
  document.getElementById('mazo').appendChild(cartaElemento);
}

function verificarClasificacion(carta, zonaSeleccionada) {
  let correcto = false;
  if (zonaSeleccionada === 'zona-antes' && carta.valor < 20) {
    correcto = true;
  } else if (zonaSeleccionada === 'zona-entre' && carta.valor >= 20 && carta.valor <= 30) {
    correcto = true;
  } else if (zonaSeleccionada === 'zona-despues' && carta.valor > 30) {
    correcto = true;
  }

  if (correcto) {
    puntuacion += carta.valor;
    cartasJugadas.push(carta);
    document.getElementById('puntos').textContent = puntuacion;
    updateCartasJugadas();
  } else {
    alert('¡Clasificación Incorrecta! La carta se pierde.');
  }
}

function updateCartasJugadas() {
  const listaCartas = document.getElementById('lista-cartas-jugadas');
  listaCartas.innerHTML = ''; // Limpiar la lista
  cartasJugadas.forEach(carta => {
    const li = document.createElement('li');
    li.textContent = `Carta: ${carta.valor}`;
    listaCartas.appendChild(li);
  });
}
