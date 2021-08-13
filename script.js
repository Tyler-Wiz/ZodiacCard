const card = document.querySelectorAll("#flip");
const cardBack = document.querySelectorAll('#back')
const textBack = document.querySelectorAll('#text-back')
allCards = []
allBack = []
const aries = [

"People are feeling bold and ready to give you what you want as long as you're bold enough to ask for it.",
"You'll be making connections this month. For kissable lips that shine like the stars",
"Take a break from drama, log off social media, and bathe in self-care",
"Nurture your inner homebody by indulging in a television marathon, masturbating, and enjoying a delicious dinner",
"Having a solid plan in place that helps you cope with mental health issues that may arise will help you confront fears before they affect your relationship. "
]

const taurus = [
    "Don't fall for the lie that working yourself to the point of exhaustion is desirable",
    "You've been working hard lately, both in your professional and personal life. The latter is extremely impressive",
     "Plan a picnic with friends and catch up on everything you've missed.",
     "After practicing self-care, you deserve a night out, Taurus. ",
     "Carve in extra time for self-care and please, try to get plenty of sleep."
]



textBack.forEach(back => {
    allBack.push(back) 
})

const [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
] = allBack


card.forEach(function(cards){
    cards.addEventListener('click',function(){
      const isToggled = cards.classList.toggle('is-flipped')

      if(isToggled){
        one.textContent = aries[Math.floor(Math.random() * aries.length)]
        two.textContent = taurus[Math.floor(Math.random() * taurus.length)]
      } else {
          one.textContent = ''
          two.textContent = ''
      }
    })
    
})





