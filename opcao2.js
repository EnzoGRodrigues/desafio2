function victories(victory) {
    return victory
}

function defeats(defeat) {
    return defeat
}

function totalMatches() {
    return victories(120) - defeats(20)
}

// console.log(totalMatches())

if (totalMatches() <= 10) {
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Ferro`);
} else if (totalMatches() >= 11 && totalMatches() <= 20) {
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Bronze`);
} else if (totalMatches() >= 21 && totalMatches() <= 50) {
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Prata`);
} else if(totalMatches() >= 51 && totalMatches() <= 80){
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Ouro`);
} else if(totalMatches() >= 81 && totalMatches() <= 90){
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Diamante`);
} else if(totalMatches() >= 91 && totalMatches() <= 100){
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Lendário`);
} else{
    console.log(`O Herói tem saldo de ${totalMatches()} está no nível de Imortal`);
}




