/*
    Esta opção resolve o desafio usando: 
    - função com.
    - variáveis
    - Array de objetos
 */

function getRank(victory, defeat){ //criando função com parâmetros para passar vitórias e derrotas
    let saldo = victory - defeat //incializando variável para guardar o resultado da substração entre vitórias e derrotas

    let ranks = [ //criando array de objetos para armazenar o níveis dos ranks. 
        {max: 10, name: "Ferro"}, //max é o maior valor de saldo q eu pode ter para estar nesse nível
        {max: 20, name: "Bronze"}, //name é o nome do nível
        {max: 50, name: "Prata"},
        {max: 80, name: "Ouro"},
        {max: 90, name: "Diamante"},
        {max: 100, name: "Lendário"},
        {max: Infinity, name: "Imortal"}, //Infinity representa qualquer valor acima de 100
    ];

    let level = ranks.find(r => saldo <= r.max); //.find() é um método que procura dentro do array o primeiro elemento que satisfaça a condição
                                                // aqui, ele vai encontrar o primeiro rank onde o saldo for menor ou iual ao valor máximo(r.max)
                                                // por exemplo: se saldo = 12, ele passa do "Ferro" (10), mas cai no "Bronze" (20), então retorna o objeto {max: 20, name: "Bronze"}
    
    return `O Herói tem saldo de ${saldo} e está no nível de ${level.name}` //montando a frase para retornar uma mensagem personalizada
}

console.log(getRank(120,20)) //criando console.log para exibir no prompt. Chamando a função e passando os parâmetros para que sejam preenchidos de maneira correta.