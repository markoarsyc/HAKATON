let barPredlog = document.querySelector("#barPredlog");
let barovi = ["Tranquilla", "Boho bar", "Red bar"];

barPredlog.addEventListener('click', ()=> {

    let textPredlog = document.querySelector(".text-predlog");
    let indexBar = Math.floor(Math.random()*3);
    console.log(textPredlog);
    let h1 = document.createElement("h1");
    h1.innerText = `${barovi[indexBar]}`;
    textPredlog.innerHTML = "";
    textPredlog.append(h1);
});

