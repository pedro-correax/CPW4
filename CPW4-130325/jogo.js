var tab = document.querySelector(".tabuleiro")

tab.classList.add("xix")
 
tab.style.color = "white"

var vezDoXix = true

var celulas = document.querySelectorAll(".celula")
//celulas[3].classList.add('xix')

let contador

function joga(event){
    var celulaClicada = event.target
    if (vezDoXix){
        celulaClicada.classList.add("xix")
        tab.classList.remove("xix")
        vezDoXix = false
        tab.classList.add("bola")

        verificaGanhador("xix")
    }else{
        celulaClicada.classList.add("bola")
        tab.classList.remove("bola")
        vezDoXix = true
        tab.classList.add("xix")
        
        verificaGanhador("bola")
  
    }

    
}

    function verificaGanhador(player){
    if(celulas[0].classList.contains(player) 
    && celulas[3].classList.contains(player) 
    && celulas[6].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[0].classList.contains(player) 
    && celulas[1].classList.contains(player)
    && celulas[2].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[0].classList.contains(player) 
    && celulas[4].classList.contains(player)
    && celulas[8].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[1].classList.contains(player)
    && celulas[4].classList.contains(player) 
    && celulas[7].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[2].classList.contains(player)
    && celulas[5].classList.contains(player)
    && celulas[8].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[3].classList.contains(player)
    && celulas[4].classList.contains(player) 
    && celulas[5].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[2].classList.contains(player)
    && celulas[4].classList.contains(player) 
    && celulas[6].classList.contains(player)){
    alert(player +  "win")
    }

    if(celulas[6].classList.contains(player) 
    && celulas[7].classList.contains(player) 
    && celulas[8].classList.contains(player)){
    alert(player +  "win")
    }

    
}



