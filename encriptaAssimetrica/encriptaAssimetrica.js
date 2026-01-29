import { generateKeyPairSync } from "crypto";

//Iremos criar a variável para gerar as chaves, que será o resultado do método generateKeyPairSync() com os parâmetros abaixo - veja que o segundo parâmetro é um objeto com diversas propriedades:

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

//console.log(publicKey, privateKey);

// Agora que já temos o par de chaves, vamos importar os métodos para o módulo crypto.
import { publicEncrypt, privateDecrypt } from "crypto";

// E vamos ao processo de criptografar a mensagem usando a chave pública:
const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from("VOCÊ DECIFROU A MENSAGEM!!!"),
);

console.log(dadosCriptografados.toString("hex"));

// Dando continuidade, agora vamos usar a chave privada para descriptografar a mensagem:
const dadosDesencriptados = privateDecrypt(privateKey, dadosCriptografados);

console.log(dadosDesencriptados.toString("utf-8"));
