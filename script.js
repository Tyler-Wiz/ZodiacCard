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

const gemini = [

    "Write down all of the ways in which you help your company or employer prosper and be ready to present your case for a raise.",
     "Leo loves attention just as much as you do, so this transit implies that the rest of the month will be filled with laughter and joy with friends.",
     "You're known for being charming and the life of the party, but there's more to you than charisma",
     "Consider working with a therapist if you don't already to process trauma and become an even better version of yourself",


    ]

const cancer = [
    "Be ready to listen when a romantic interest finds the strength to be clear about how they feel. ",
    "It's time to stop hiding feelings and lay your cards on the table. ",
    'Your emotional maturity is a gift, dear Cancer',
    "Sometimes other people can't keep up because they are afraid of their emotions, but that's not your fault.",
    "There is a time for emotional talks and a time to enjoy life, and Leo season demands the latter. "

]

function displayArray(rand) {
    return rand[Math.floor(Math.random() * rand.length)]
}

textBack.forEach(back => {
    allBack.push(back) 
})

const [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
] = allBack


card.forEach(function(cards){
    cards.addEventListener('click',function(){
      const isToggled = cards.classList.toggle('is-flipped')

      if(isToggled) {
        one.textContent = displayArray(aries)
        two.textContent = displayArray(taurus)
        three.textContent = displayArray(gemini)
        four.textContent = displayArray(cancer)
      }
    })
})





