function posaljiPoruku() {
    let input = document.querySelector('input');
    let divPoruka = document.createElement('div');
    divPoruka.className = "poruka";
    divPoruka.innerText = input.value;
    let msgArea = document.querySelector(".msg-area");
    msgArea.append(divPoruka);
    input.value = "";

    let odgovor = document.createElement('div');
    odgovor.className = "odgovor";
    let received = divPoruka.innerText;
    console.log(received);
    let replyString = "";
    switch(received) {
        case "Gde cemo veceras?":
            replyString = "Hajde da pogledamo sta aplikacija predlaze!";
            break;
        case "Uz sta cemo da se zagrevamo?":
            replyString = "Uz Tomu, naravno!";
            break;
    }

    setTimeout(()=>{
        odgovor.innerText = replyString;
        msgArea.append(odgovor);
    }, 1000);
    
}
