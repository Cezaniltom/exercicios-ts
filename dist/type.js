"use strict";
let objAluno = {
    "nome": "Daniel Mariz",
    "altura": 1.79,
    "dataNasc": new Date("13-09-2024"),
    "modulosCursados": ["Frontend Estático", "Lógica de Programação"],
    estudar() {
        console.log(`${this.nome} está estudando...`);
    },
    parabenizar() {
        // se a data de hoje for igual à data de nascimento, deseje feliz aniversário
    }
};
console.log(objAluno);
