var sim = "sim"
var nao = "nao"


while(inicio != sim && inicio != nao){  
 var inicio = prompt("\n Você teve sua família assassinada. Você deseja se vingar do responsável? \n").toLowerCase()
}
 if(inicio == sim){
     alert("Depois de meses investigando o culpado, você finalmente o encontra: Kaito Osaka está em um barzinho.")
    while(ataque!=sim && ataque != nao){
     var ataque = prompt("Você deseja atacar Kaito Osaka agora?").toLowerCase()
    }
      if(ataque == sim){
          alert("Você caminha em direção a Kaito Osaka, e desfere um golpe forte com uma garrafa de bebida na nuca do assassino.")
         while(briga != sim && briga != nao){
          var briga =prompt("Kaito Osaka consegue se recompor e agora está furioso. Você quer usar uma faca para lutar?").toLowerCase()
         } if(briga == sim){
           alert("Voce se arma com uma faca. Seu adversário te dá o primeiro golpe na esperança de te desarmar porém não consegue.")
           while(esfaquear != sim && esfaquear != nao){
               var esfaquear = prompt("Você esfaqueia o asssassino da sua familia?").toLowerCase()
           }
           if(esfaquear == sim){
            alert("Voce esfaqueia a barriga de Kaito Osaka. O homem agora está condenado a morte. \n Você esta a poucos minutos de também se tornar um assassino")
            while(fuga != sim && fuga != nao){
            var fuga = prompt("Você quer correr do local do crime?").toLowerCase()
            } if(fuga == sim){
                alert("Kaito Osaka está morto. Você agora é um foragido das autoridades \n FIM DE JOGO")
            }else{
                alert("Você não foge do local e você é preso. Ao menos sua familia foi vingada. \n FIM DE JOGO")
            }
           }else{
               alert("Kaito Osaka também tira uma faca e te esfaqueia na barriga. \n FIM DE JOGO")
           }
         }else{
           alert("Voce escolhe não sacar uma arma branca. Agora está punho a punho.")
           while(punho != sim && punho != nao ){
           var punho = prompt("Voce desejar socar o seu adversario?").toLowerCase()
           }
           if(punho ==sim){
               alert("Seu adversário é um bom lutador e defende seu soco. Felizmente, você também é um bom lutador. \n Ambos lutam até o cansaço\n")
              while(finalizar != sim && finalizar != nao){
               var finalizar = prompt("Voce quer continuar a lutar ?").toLowerCase()
              }if (finalizar ==sim){
                  alert("Você está em melhor forma física. Kaito Osaka tem um infarte causado pelo esforço da luta.\nFIM DE JOGO \n")
              }else{
                  alert("Você desistiu de matar Kaito Osaka \n FIM DE JOGO \n")
              }
           }
           else{
            alert("Kaito Osaka tira uma faca e te esfaqueia. \n FIM DE JOGO ")
           }

         }
      } else{
          alert("Você esperou demais e o Kaito Osaka foi embora.\n FIM DE JOGO")
      }
 }else{
     alert("Você escolheu a vida de perdão.\n FIM DE JOGO \n ")
 }

 