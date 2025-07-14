function playedMatches(victory, defeat){ //função que retorna o valor do calculo vitórias - derrotas.
    return victory - defeat
}
function rankedPosition(){ //função que classifica o jogador dependendo do resultado do calculo.
    let resultRank = playedMatches(120, 18)

    switch(true){ //switch(true) === compara o resultado de cada case. quando a condição for verdadeira, ele executa o bloco correspondente
        case resultRank <= 10:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Ferro`);
            break;
        case resultRank >= 11 && resultRank <= 20:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Bronze`);
            break;
        case resultRank >= 21 && resultRank <= 50:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Prata`);
            break;
        case resultRank >= 51 && resultRank <= 80:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Ouro`);
            break;
        case resultRank >= 81 && resultRank <= 90:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Diamante`);
            break;
        case resultRank >= 91 && resultRank <= 100:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Lendário`);
            break;
        default:
            console.log(`O Herói tem saldo de ${resultRank} está no nível de Imortal`)
    }
}

rankedPosition() //chamando a função rankedPosition
