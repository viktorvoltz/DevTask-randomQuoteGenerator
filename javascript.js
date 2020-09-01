var inspirational_Quotes = [
'All our dreams can come true\, if we have the courage to pursue them.\– Walt Disney',
'The secret of getting ahead is getting started.\– Mark Twain',
'I\’ve missed more than 9\,000 shots in my career. I\’ve lost almost 300 games. 26 times I\’ve been trusted to take the game winning shot and missed. I\’ve failed over and over and over again in my life and that is why I succeed.\– Michael Jordan',
'Don\’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe\, remember\, you can achieve. – Mary Kay Ash',
'The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb',
'Only the paranoid survive.\– Andy Grove',
'It’s hard to beat a person who never gives up. – Babe Ruth',
'I wake up every morning and think to myself\, \‘how far can I push this company in the next 24 hours. – Leah Busque',
'If people are doubting how far you can go\, go so far that you can\’t hear them anymore. – Michele Ruiz',
'We need to accept that we won\’t always make the right decisions\, that we\’ll screw up royally sometimes – understanding that failure is not the opposite of success\, it\’s part of success. – Arianna Huffington',
'Write it. Shoot it. Publish it. Crochet it\, saute it\, whatever. MAKE. – Joss Whedon',
]

var love_Quotes = [

    'I look at you and see the rest of my life in front of my eyes.',
       
    'The greatest happiness of life is the conviction that we are loved; loved for ourselves\, or rather\, loved in spite of ourselves. — Victor Hugo',
      
    'All\, everything that I understand\, I only understand because I love. — Leo Tolstoy',
      
    'I\'m much more me when I\'m with you.',
      
    'It\'s a very dangerous state. You are inclined to recklessness and kind of tune out the rest of your life and everything that\'s been important to you. It\'s actually not all that pleasurable. I don\t know who the hell wants to get in a situation where you can\'t bear an hour without somebody\'s company. — Colin Firth',
   
    'The best and most beautiful things in this world cannot be seen or even heard\, but must be felt with the heart. — Helen Keller',
       
    'To love is nothing. To be loved is something. But to love and be loved, that\’s everything. — T. Tolis',
       
    'In order to be happy oneself it is necessary to make at least one other person happy. — Theodor Reik',
       
    'Maybe the only vow we ever need to offer the one we love is this: I will never\, not for a sliver of a second\, make you feel alone. — Tyler Knott Gregson',
  
    'There\'s no substitute for a great love who says, \'No matter what\'s wrong with you, you\'re welcome at this table. — Tom Hanks',
      
    'Being deeply loved by someone gives you strength\, while loving someone deeply gives you courage. — Lao-Tzu',

]

function inspirationalquote(){
    var randomNumber = Math.floor((Math.random() * inspirational_Quotes.length));



document.getElementById('quoteGen').innerHTML = inspirational_Quotes[randomNumber];

}

function lovequote(){
    var randomNumber = Math.floor((Math.random() * love_Quotes.length));



document.getElementById('quoteGen').innerHTML = love_Quotes[randomNumber];

}
