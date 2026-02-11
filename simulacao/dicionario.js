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
    if (nome === this.nome && this.hash === this.criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }

    //console.log("Usuário ou senha incorretos.");
    return false;
  }
}

const usuario = new Usuario("alex majdalani", "senha123");

//Em seguida, vamos trazer uma lista com senhas comuns, servindo como o dicionário para este ataque. Iremos percorrer essa lista e tentar nos autenticar com cada uma das credenciais existentes:

const senhasComuns = ["senha", "123456", "admin", "senha123"];

senhasComuns.map((senha) => {
  if (usuario.autentica("alex majdalani", senha)) {
    console.log(`A senha do usuário é ${senha}`);
  }
});
