// //objetivo: leer el apiy y mostrar la imagen
// fetch('https://rickandmortyapi.com/api/character/348')
// .then(function (res){return res.json();})
// .then(function(data){console.log(data)});
let id = Math.floor(Math.random() * 826)
fetch('https://rickandmortyapi.com/api/character/'+ id)
.then(res => res.json())
.then(data => {
    console.log(data.image),
    console.log(data.name)}
)