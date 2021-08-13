const card = document.querySelectorAll("#flip");
const cardBack = document.querySelectorAll('#back')
const textBack = document.querySelectorAll('#text-back')
allCards = []
allBack = []

textBack.forEach(back => {
    allBack.push(back) 
})

const [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve] = allBack


card.forEach(function(cards){
    cards.addEventListener('click',function(e){
       cards.classList.toggle('is-flipped');
       one.textContent = 'Hello finally'
       two.textContent = 'Hello YES!!'
    })
})





