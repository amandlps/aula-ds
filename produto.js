const produto = {
    nome: "Motorola Moto ",
    marca: "Motorola Moto G15",
    preco: 899,10,
  };
  for ( let chave in produto ) {
    console.log(chave, produto[chave]);
  }

console.log(Object.keys(produto));
console.log(Object.values(produto));