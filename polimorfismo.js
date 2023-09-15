class arma {
    constructor(nome, dano) {
      this.nome = nome;
      this.dano = dano;
    }
  
    atirar() {
      console.log(`${this.nome} causa ${this.dano} de dano.`);
    }
  }
  
  class Rifle extends arma {
    constructor(nome, dano, fireRate) {
      super(nome, dano);
      this.fireRate = fireRate;
    }
  
    atirar() {
      console.log(`${this.nome} dispara ${this.fireRate} tiros por segundo e causa ${this.dano} de dano.`);
    }
  }
  

  class submetralhadora extends arma {
    constructor(nome, dano, municao) {
      super(nome, dano);
      this.municao = municao;
    }
  
    atirar() {
      console.log(`${this.nome} dispara rajadas e causa ${this.dano} de dano. Munição restante: ${this.municao}`);
    }
  }
  
  function usararma(arma) {
    arma.atirar();
  }
  
  let parafal = new Rifle('Parafal', 50, 8);
  let ak47 = new Rifle('AK-47', 45, 9);
  let mp5 = new submetralhadora('MP5', 30, 100);
  
  usararma(parafal);
  usararma(ak47);
  usararma(mp5);
  