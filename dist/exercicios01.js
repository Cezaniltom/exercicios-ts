"use strict";
class AnimalClass {
    // Array<string>
    constructor(nome, tempoVida, extincao, especie, tipo) {
        this.nome = nome;
        this.tempoVida = new Date(tempoVida);
        this.extincao = extincao;
        this.especie = especie;
        this.tipo = tipo;
    }
    maturidade() {
        const fase = this.tempoVida.getDay();
        if (fase <= 3) {
            console.log(`O ${this.nome} está na fase inicial da vida`);
        }
        else if (fase > 3 && fase <= 5) {
            console.log(`O ${this.nome} está na fase da adolescencia`);
        }
        else {
            console.log(`O ${this.nome} está na fase adulta`);
        }
    }
}
const animalNovo = new AnimalClass('Leão', '2010-02-15', true, 'Panthera leo', 'Mamifero');
console.log(animalNovo);
animalNovo.maturidade();
const animalNovo2 = new AnimalClass('Lobo', '2015-07-30', false, 'Canis', 'Carnivoro');
console.log(animalNovo2);
animalNovo2.maturidade();
