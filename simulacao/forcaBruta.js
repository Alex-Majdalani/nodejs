// Agora vamos começar a implementar os ataques pelo ataque de força bruta, no arquivo forcaBruta.js e importar a função do módulo crypto para criar as hashes e também utilizar uma classe de usuário adaptada das aulas passadas:

// Arquivo: simulacao/forcaBruta.js

import { createHash } from "crypto";

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }
  criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }
  autentica(nome, senha) {
    if (nome === this.name && this.hash === this.criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }
    //console.log("Usuário ou senha incorretos");
    return false;
  }
}

// Então, podemos criar um laço de repetição para percorrer a maioria das senhas possíveis, assumindo que serão apenas senhas numéricas de 4 dígitos:

const usuario = new Usuario("alex majdalani", "1665");

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (usuario.autentica("alex majdalani", senhaTeste.toString())) {
    console.log(`A senha do usuário é ${senhaTeste}`);
  }
}
