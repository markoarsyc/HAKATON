let barPredlog = document.querySelector("#barPredlog");
let barovi = ["Tranquilla", "Boho bar", "Red bar"];

barPredlog.addEventListener('click', ()=> {
    let index = Math.floor(Math.random()*3);
    let h1 = document.querySelector(".h1Bar");
    h1.innerHTML = "";
    h1.innerHTML = `${barovi[index]}`;
    console.log(h1);
});

