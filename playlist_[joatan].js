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

const playlistDetalhada = [ 
    {   titulo:"Asa Branca",
        artista:"Luiz Gonzaga",
        duracao:"5:40",
        curtida:false,
    },
    {   titulo:"Telefone Sem Fio",
        artista:"Mari Fernandez",
        duracao:"02:48",
        curtida:true},

        {titulo:"Saudade Estranha",
        artista:"Murilo Huff",
        duracao:"03:02",
        curtida:false},

        {titulo:"Eu Te Seguro",
        artista:"Panda",
        duracao:"02:37",
        curtida:true},

        {titulo:"Cadeira Cativa",
        artista:"Zé Neto & Cristiano",
        duracao:"03:06",
        curtida:false
}];

for (const musica of playlistDetalhada){
    if (musica.titulo === "Cadeira Cativa"){
        console.log("Música encontrada!");
    
    }
} 
for (const musica of playlistDetalhada){
    if (musica.curtida === true){
        console.log(musica.titulo + " - " + musica.artista);} 
}
for (const musica of playlistDetalhada){
if (musica.curtida === true){
    console.log(`Total de músicas curtidas: ${playlistDetalhada.filter(musica => musica.curtida === true).length}`);}
}

