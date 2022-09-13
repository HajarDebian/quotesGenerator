var btn= document.getElementById("clickable");
var quotes=["“Be yourself; everyone else is already taken.”",
                "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
                "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
                "“A room without books is like a body without a soul.”",
                "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
                "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
                "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
                "“You only live once, but if you do it right, once is enough.”",
                "“Be the change that you wish to see in the world.”",
                "“In three words I can sum up everything I've learned about life: it goes on.”"]

    var authors=[" ― Oscar Wilde",
                "― Marilyn Monroe",
                "― Albert Einstein",
                "― Marcus Tullius Cicero",
                "― Bernard M. Baruch",
                "― William W. Purkey",
                "― Dr. Seuss",
                "― Mae West",
                "― Mahatma Gandhi",
                "― Robert Frost"]

btn.onclick= function generateQuotes()
{
    var random= Math.floor(Math.random()*(quotes.length));
    var quote= document.getElementById("quote").innerHTML=quotes[random];
    var author= document.getElementById("author").innerHTML= authors[random];
}