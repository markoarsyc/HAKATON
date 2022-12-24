let ikonica1 = document.querySelector("#ikonica1");
let ikonica1Niz = ["https://youtu.be/BxLG8BeWeqE","https://youtu.be/UZA8wLz1K8Q","https://youtu.be/ZtOjTH00dA0"];
ikonica1.addEventListener('click', ()=>{
    let index = Math.floor(Math.random()*3);
    window.open(ikonica1Niz[index]);
})

let ikonica2 = document.querySelector("#ikonica2");
let ikonica2Niz = ["https://youtu.be/5PHZekXWPlc","https://youtu.be/fIaMB2BSZA0","https://youtu.be/zJ0DnTTtxNo"];
ikonica2.addEventListener('click', ()=>{
    let index = Math.floor(Math.random()*3);
    window.open(ikonica2Niz[index]);
})

let ikonica3 = document.querySelector("#ikonica3");
let ikonica3Niz = ["https://youtu.be/u1z6QGgR1YQ","https://youtu.be/b1XNN7BLWZM","https://youtu.be/io4OJkmKYaQ"];
ikonica3.addEventListener('click', ()=> {
    let index = Math.floor(Math.random()*3);
    window.open(ikonica3Niz[index]);
})

let ikonica4 = document.querySelector("#ikonica4");
let ikonica4Niz = ["https://youtu.be/6u_cgKR_D3w","https://youtu.be/nVxixq98XFE","https://youtu.be/s9veS5_IaOo"];
ikonica4.addEventListener('click', ()=> {
    let index = Math.floor(Math.random()*3);
    window.open(ikonica4Niz[index]);
})