//Etapa 1


let playlist = ["Asa Branca","Telefone Sem Fio ","Saudade Estranha","Eu Te Seguro","Cadeira Cativa"];

console.log(playlist);

console.log(`Novas músicas adicionadas: ${playlist.push("Boate Azul", "Lágrimas de Álcool","Blessings")}`);

for (let musica of playlist){
       console.log(musica);
}

if (playlist.includes("Bohemian Rhapsody")) {      
console.log ("Música encontrada!");
} else {
    console.log( "Música não encontrada!");
}


console.log(`A música removida foi: ${playlist.pop()}`);

console.log(`Nova música adicionada: ${playlist.unshift("Runaway")}`);

for (let musica of playlist){
    console.log(musica);
}


//Etapa 2


let playlist ={
    titulo:"",
    artista:"",
    duracao:"",
    curtida:""
};






