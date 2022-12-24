let barPredlog = document.querySelector("#barPredlog");
let barovi = ["Tranquilla", "Boho bar", "Red bar"];

barPredlog.addEventListener('click', ()=> {
    let index = Math.floor(Math.random()*3);
    let h1 = document.querySelector(".h1TextStrane");
    h1.innerHTML = "";
    h1.innerHTML = `${barovi[index]}`;
});

let kaficPredlog = document.querySelector("#kaficPredlog");
let kafici = ["Premiata", "Matinee","Kafeterija"];

kaficPredlog.addEventListener('click', ()=> {
    let index = Math.floor(Math.random()*3);
    let h1 = document.querySelector(".h1TextStrane");
    h1.innerHTML = "";
    h1.innerHTML = `${kafici[index]}`;
});

let klubPredlog = document.querySelector("#klubPredlog");
let klubovi  = ["Freestyler","Komitet","Casina"];

klubPredlog.addEventListener('click',()=>{
    let index = Math.floor(Math.random()*3);
    let h1 = document.querySelector(".h1TextStrane");
    h1.innerHTML = "";
    h1.innerHTML = `${klubovi[index]}`;
});

let kafanaPredlog = document.querySelector("#kafanaPredlog");
let kafane = ["Tarapana","Krčma","Ona moja"];

kafanaPredlog.addEventListener('click',()=>{
    let index = Math.floor(Math.random()*3);
    let h1 = document.querySelector(".h1TextStrane");
    h1.innerHTML = "";
    h1.innerHTML = `${kafane[index]}`;
})