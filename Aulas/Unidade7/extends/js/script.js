class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar2() {
    super.acelerar();
    console.log("Acelerou PKRL");
  }
  empinar() {
    console.log(`Empinou com ${this.rodas} rodas`);
  }
}

const honda = new Moto(2, "GAS & ETANOL", true);
honda.empinar();
honda.acelerar2();
