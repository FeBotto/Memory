var array = [
    "./img/mem1.png",
    "./img/mem1.png",
    "./img/mem2.png",
    "./img/mem2.png",
    "./img/mem3.png",
    "./img/mem3.png",
    "./img/mem4.png",
    "./img/mem4.png",
    "./img/mem5.png",
    "./img/mem5.png",
    "./img/mem6.png",
    "./img/mem6.png",
    "./img/mem7.png",
    "./img/mem7.png",
    "./img/mem8.png",
    "./img/mem8.png"
];

var cont = 0;
var salvaScelte = [];
var pt1 = 0;
var pt2 = 0;
var turno = 0;
var gioc1 = document.getElementById("g1");
var gioc2 = document.getElementById("g2");
var contaScelte = 0;

function creaTabella() {
    let tabella = document.getElementById("tab");

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i = 0; i < array.length; i++) {
        let card = document.createElement("div");
        let dis = document.createElement("div");
        dis.id = i;
        dis.classList.add("lol");
        card.classList.add("card");
        dis.style.backgroundImage = "url('"+array[i]+"')";
        tabella.appendChild(card);
        card.appendChild(dis);
    }
}

window.addEventListener('click', (event) => {
    //console.log(event.target.querySelector('div'));
    if(cont != 2){
        event.target.querySelector('div').style.display = "block";
        salvaScelte[cont] = event.target.querySelector('div');
        if(cont == 1){
            if(salvaScelte[0].style.backgroundImage == salvaScelte[1].style.backgroundImage){
                if(turno == 0){
                    pt1++;
                    g1.innerText = pt1;
                }
                else{
                    pt2++;
                    g2.innerText = pt2;
                }
            if((pt1+pt2) == 8){
                if(pt1>pt2){
                    alert("Il vincitore è il giocatore 1");
                }
                else if(pt2>pt1){
                    alert("Il vincitore è il giocatore 2");
                }
                else{
                    alert("PARITA' !!!");
                }
            }
            salvaScelte = [];
            }
        }
        cont++;        
    }
    else{
        cont = 0;
        salvaScelte[0].style.display = "none";
        salvaScelte[1].style.display = "none";
        salvaScelte = [];            
        contaScelte == 0;
        if(turno == 0){
            turno++;
        }
        else{
            turno--;
        }
    }
})