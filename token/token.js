import jwt from "jsonwebtoken";

// Criar uma chave secreta e assinar um token
const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
  {
    apelido: "am",
    curso: "segurança e node.js",
  },
  chaveSecreta,
);

//Com o token, podemos mostrar o seu valor codificado e também decodificá-lo e restaurar seus valores:
console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);
