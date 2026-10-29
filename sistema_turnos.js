class ColaTurnos {
  constructor(capacidad) {
    this.items = [];
    this.capacidad = capacidad;
  }

  estaLlena() {
    return this.items.length === this.capacidad;
  }

  estaVacia() {
    return this.items.length === 0;
  }

  insertar(cliente) {
    if (this.estaLlena()) {
      alert(" La cola está llena.");
      return false;
    }
    this.items.push(cliente);
    actualizarVista();
    return true;
  }

  atender() {
    if (this.estaVacia()) {
      alert(" No hay turnos pendientes.");
      return null;
    }
    const clienteAtendido = this.items.shift();
    actualizarVista();
    return clienteAtendido;
  }
}


const colas = new ColaTurnos(5);
let contador = 1; 


function actualizarVista() {
  const elementos = [e1, e2, e3, e4, e5];
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerHTML = colas.items[i] || "";
  }
}


function esperar() {
  colas.insertar( + contador);
  contador++;
}


function atender() {
  const atendido = colas.atender();
  if (atendido) {
    console.log("Atendiendo a:", atendido);
  }
}
