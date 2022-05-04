let sim = 1
let nao = 2

alert("Tudo ok?")

function tratamento(){
    entrada = prompt("Digite o número das opções")
    while(entrada != 1 || entrada != 2 || entrada !=0){ 

        if(entrada == sim || entrada == nao){
            return faseTatakae()
        }else{
            alert("Digite apenas o número das opções sim ou não")
            return tratamento()
        }
    }
}

function faseTatakae(){
    if(entrada == sim){
        return location = "fase2Otae.html"
    }else if(entrada == 2){
        return location = "gameOverOtae.html"
    }
}
//colocar contador