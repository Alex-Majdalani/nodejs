import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

console.log(criaHash("Uma senha Qualquer"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }

    console.log("Usuário ou senha incorreto");
    return false;
  }
}

const usuario = new Usuario("alex majdalani", "minhaSenha");
console.log(usuario);

// Caso de sucesso
usuario.autentica("alex majdalani", "minhaSenha");

// Caso de fracasso
usuario.autentica("alex majdalani", "minhasenha");
