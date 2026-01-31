import { generateKeyPairSync, createSign, createVerify } from "crypto";

// e depois vamos gerar as nossas chaves pública e privada:e depois vamos gerar as nossas chaves pública e privada:

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

//Agora podemos pegar uma informação e criar uma assinatura:
let dados = "Essa mensagem será assinada e verificada";

// Assinatura

const assinador = createSign("rsa-sha256");

assinador.update(dados);

const assinatura = assinador.sign(privateKey, "hex");

console.log(`Assinatura:
${assinatura}`);

//Com a variável dados devidamente assinada, podemos criar um verificador e garantir a sua integridade e autoria:

// Envio desse documento -- Documento, assinatura e chave publica

const verificador = createVerify("rsa-sha256");

verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, "hex");

console.log(ehVerificado);
