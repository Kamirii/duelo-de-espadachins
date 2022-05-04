let sim = 1
let nao = 2

function tratamento(){
    entrada = prompt("Digite o número das opções")
    while(entrada != 1 || entrada != 2 || entrada != 3 ||  entrada != 4 || entrada !=0){ 

        if(entrada == 1 || entrada == 2  || entrada == 3|| entrada == 4){
            return faseTatakae()
        }else{
            alert("Digite apenas os números indicados")
            return tratamento()
        }
    }
}

function faseTatakae(){
    if(entrada == 1){
        return location = "fase2Haikyuu.html"
    }else if(entrada == 2){
        return location = "gameOverHaikyuu.html"
    } if(entrada == 3){
        return location = "fase3Haikyuu.html"
    }
     if(entrada == 4){
        return location = "fase4Haikyuu.html"
    }
    
}   
