//Função confete
const canvas = document.querySelectorAll('#celebrate');
  const jsConfetti = new JSConfetti();

  function happy() {
      jsConfetti.addConfetti({ 
        particleCount: 100,
        confettiRadius: 5, 
        
        }    
  )}


//Soltar confete e girar cartão
const cardTeste = document.querySelectorAll(".card")

console.log(cardTeste)

for (let i = 0; i < cardTeste.length; i++) {
  const card = cardTeste[i];

  card.onclick = () => { 
    card.classList.toggle("flipCard");
    happy();
    
  }
}