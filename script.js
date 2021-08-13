const card = document.querySelectorAll("#flip"); // get card nodelist
const cardBack = document.querySelectorAll('#back') 
const textBack = document.querySelectorAll('#text-back') //get h2 nodelist
allCards = []
allBack = []

//Array for all zodiac signs 
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

const leo = [
    "Whether you decide to advance a relationship or call it quits, know that as long as you follow your intuition, you're doing the right thing. ",
    "Enjoy this new phase — there's nothing wrong with a beautiful, calm love life.",
    "Don't be surprised if a romantic interest asks you to commit around this time",
    " Talk to friends or work with a therapist if you're not sure what you want. ",
    "If you are still feeling uncertain about your love life, now is the time for profound revelations"

]

const virgo = [
    "You are the hermit of the zodiac and need alone time to recharge.",
    "You don't want to blow off someone you care about based on rumors.",
    "Communication may be hazy, especially with lovers, so ask for clarification before jumping to conclusions. ",
    "Have any difficult conversations in person rather than over text. ",
    "Reach out to new acquaintances or old friends who you haven't spoken to in a while"
]

const libra = [
    "Don't let anyone drain your life force.",
    "Many of us are conditioned into feeling bad about taking time for self-care, but it's crucial to excelling in both your professional and personal life. ",
    "You can keep your exciting love life, but you also have to start getting enough sleep and prioritizing your health. ",
    "You always make a fabulous party guest and are very fun to date, but you must build time for rest into your social calendar. ",
    " During this time, old trauma may resurface, which can be emotionally draining"

]
const aquarius = [
    "You'll finally be able to forgive yourself and let go of the past.",
    "You typically ooze independence and confidence, Aquarius, but secretly, you may beat yourself up for past mistakes",
    "Remind yourself that no one has a perfect record, especially in matters of love,  In fact, heartbreak is just part of dating",
    "Now that your confidence is up, it's time to leave the house and go have some fun",
    " Go hit the town (while staying safe, of course) because the stars are aligned to provide you with an exceptionally fun night"


]
const pisces = [
    "When joyful Leo season begins on Thursday, July 22, it's time to press pause on what's bothering you and live in the present.",
    "Check-in with your friends or your therapist, but remember that it's OK to be filled with feelings; you're a Pisces, after all!",
     "Your loved ones appreciate your emotional depth. ",
     "You feel revitalized through socialization and are ready to apply that optimism to dating",
     "You are one of the loveliest signs of the zodiac, and your emotional depth is one of your best qualities"
]

// holds random content calling in Array 
//display random horoscope
function displayArray(rand) {
    return rand[Math.floor(Math.random() * rand.length)]
}

// loop through the nodelist of h2 and pass to an empty array
textBack.forEach(back => {
    allBack.push(back) 
})

//array destruction of pushed array allBack
const [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
] = allBack

//loop through the card nodelist and effect the toggle class. 
//return displayarray function in each h2 
card.forEach(function(cards){
    cards.addEventListener('click',function(){
      const isToggled = cards.classList.toggle('is-flipped')

      if(isToggled) {
        one.textContent = displayArray(aries)
        two.textContent = displayArray(taurus)
        three.textContent = displayArray(gemini)
        four.textContent = displayArray(cancer)
        five.textContent = displayArray(leo)
        six.textContent = displayArray(virgo)
        seven.textContent = displayArray(libra)
        eleven.textContent = displayArray(aquarius)
        twelve.textContent = displayArray(pisces)
      }
    })
})





