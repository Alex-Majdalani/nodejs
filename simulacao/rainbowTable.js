//E a última situação que iremos simular é o cenário onde temos algumas hashes e que precisamos descobrir quais são as palavras originárias de cada uma daquelas hashes. Vamos criar o arquivo rainbowTable.js e importar a função do módulo crypto para criar as hashes e criar um método que vai simplificar a chamada dela:

import { createHash } from "crypto";

function criaHash(dado, estrategia) {
  return createHash(estrategia).update(dado).digest("hex");
}
