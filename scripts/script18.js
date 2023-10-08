console.warn("18. Módulo de Treinamento");

class Equation {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  raizes() {
    let message = `
    Erro! Nenhum parâmetro informado.
    `;

    const delta = this.b ** 2 - 4 * this.a * this.c;
    let result = [];

    if (this.a === 0 && this.b === 0 && this.c === 0) {
      return message;
    }

    if (this.a === 0 && (this.b === 0) & (this.c !== 0)) {
      message = `
      1. Parâmetros insuficientes.
      Nenhuma raiz real.
      ${result}
      `;
    }

    if (delta > 0) {
      const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      result = [x1, x2];
      message = `
      1. Δ = ${this.b}² - 4*${this.a} * ${this.c}
      2. Δ = ${delta}
      3. x' = ${this.b}² + √${delta} / 2${this.a}
      4. x" = ${this.b}² - √${delta} / 2${this.a}
      5. x' = bla bla bla
      `;
    } else if (delta === 0) {
      const x = -this.b / (2 * this.a);
      result = [x];
    } else {
      result = [];
    }

    return message;
  }
}

const e0 = new Equation();
const e1 = new Equation(1, -4, -5);
const e2 = new Equation(0, 0, 3);
console.log(e0.raizes());
console.log(e1.raizes());
console.log(e2.raizes());
