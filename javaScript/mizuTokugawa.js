var sim = "sim"
var nao = "nao"
var sair ="sair"


while(inicio != sim && inicio != nao){  
 var inicio = prompt("\n Você acaba de ser desafiado para um duelo até a morte por um espadachim mais velho e mais experiente. Se voce recusar, será desonrado. Se aceitar, poderá morrer. Vocé aceita o duelo? \n").toLowerCase()
}
  if (inicio == sim){
   alert("Você está frente a frente com seu adversário e ambos estão prontos para começar o duelo.");
   while(atacar != sim && atacar != nao){
   var atacar = prompt("Voce quer atacar primeiro?").toLowerCase()
  }
  if(atacar == sim){
   alert("Voce avançou rapidamente em direção a seu adversário e tentou golpea-lo. Ele defendeu seu ataque e agora voce está perto demais dele")
  
   while(segundoAtaque != sim && segundoAtaque != nao){
   var segundoAtaque = prompt("Não a tempo para pensar! \n você tenta outro ataque?").toLowerCase()
  }
    if(segundoAtaque == sim){
        alert("Você tenta outro ataque e consegue ferir GREVEMENTE seu adversário.\n Agora ele está de joelhos esperando o golpe fatal.")
        while(golpeFatal != sim &&  golpeFatal != nao){
        var golpeFatal = prompt("Você termina a luta matando seu adversário?").toLowerCase()
        }
        if(golpeFatal ==sim){
            alert("\n FIM DE JOGO: VENCEDOR! \n A luta está acabada. \n Só existe um espadachim de pé: Mizu Tokugawa!")
        }
        else{
            alert("\n FIM DE JOGO: VENCEDOR MISERICORDIOSO! \n Você será visto como perdedor por muitos espadachins, para outros você será lembrado como um ser misericordioso.")
        }
    }
    
    else{
        alert("Vocé recuou e decidiu não desferir outro ataque.")
        alert("Seu adversário teve tempo para se recompor e te ataca rapidamente.\n Você tenta se defender mas não há mais tempo. Ele desfere um golpe fatal no seu abdomen. \n FIM DE JOGO \n")
    }
  }
  else{
      alert(" \n Você esperou. Seu adversário te atacou e acertou um golpe no sua perna. \n Sua mobilidade está comprometida. \n Felizmente, você conseguiu desviar a tempo e minimizar os danos")
      while(danoPerna != sim &&  danoPerna != nao){ 
      var danoPerna = prompt("Você quer atacar seu adversário?").toLowerCase()
      }
      if(danoPerna ==sim){
          alert("Você está fraco e seu ataque foi previsível. Seu adversário evita seu ataque e desfere um golpe mortal em sua jugular. \n FIM DE JOGO")
      }
      else{
      alert("Você não fez nada e seu adversário desferiu um golpe mortal em sua jugular. \n FIM DE JOGO!")
      }
  } 
 } // IF inicio
 else{
     console.log(inicio)
     alert("FIM DE JOGO. \n\nVocê agora é um espadachim desonrado e ninguém mais te respeita.")
  }

