let btn =  document.querySelector(".btn");

btn.addEventListener("click", (e)=>{

        e.preventDefault()
    let ime=document.getElementById("ime");
    let prezime=document.getElementById("prezime");
    let email=document.getElementById("email");
    let sifra=document.getElementById("sifra");

    if(!ime.value){
        ime.style.background="red";
        } else{
        btn.innerHTML="Uspešna registracija!";
        btn.style.background = "black";
        btn.style.color = "gold";
    };


    if(!prezime.value){
        prezime.style.background="red";
    } else{
    btn.innerHTML="Uspešna registracija!";
    };

    if(!email.value){
        email.style.background="red";
    } else{
    btn.innerHTML="Uspešna registracija!";
    };

    if(!sifra.value){
        sifra.style.background="red";
    } else{
        btn.innerHTML="Uspešna registracija!";
        };

});