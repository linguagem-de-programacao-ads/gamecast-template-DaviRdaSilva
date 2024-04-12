
async function buscar(){

    console.log("Passei por aqui");
    
    const resposta = await fetch("https://660f44af356b87a55c510d81.mockapi.io/agendas");

    const respostaDadosAgenda = await resposta.json();

    console.log("Respota: ",respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        var card = document.createElement("div");
        card.className = "cardItem";
    
        var cardIMagen = document.createElement("div");
        cardIMagen.className = "dataGame";
        card.appendChild(cardIMagen);
    
        var cardDescricao = document.createElement("div");
        cardDescricao.className = "descricao";
        card.appendChild(cardDescricao);
        var cardAssisitr = document.createElement("div");
        cardAssisitr.className = "assistir";
        card.appendChild(cardAssisitr);

        return card
    });

    /*
    <div class="cardItem">
          <div class="dataGame">
            <img src="../assets/imagens/calendar-solid.svg" alt="" /> 20/04 21:30
          </div>
          <img class="img-background" src="../assets/imagens/jogo-padrao.png" alt="" />
          <div class="descricao">
            <p><strong>Nome do Jogo</strong></p>
            <p>
              Descrição de como vai funcionar o GamePlay, frase legal para
              chamar a galera :D
            </p>
            <p><strong>Gamers: </strong></p>

            <div class="gamers">
              <div class="gamerItem">@nick01</div>
              <div class="gamerItem">@nick02</div>
              <div class="gamerItem">@nick03</div>
              <div class="gamerItem">@nick04</div>
            </div>
          </div>
          <div class="assistir">
            <a class="assistirItem">
              <img src="../assets/imagens/youtube.svg" alt="" /> Assistir
            </a>
          </div>
        </div>
    */

    

}

console.log("Antes de buscar");
buscar();
console.log("Depois de buscar");