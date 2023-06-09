var output = document.getElementById("funFacts");

var facts = [
"Did you know that the name Spoekle actually comes from my cat Sparky? I was messing around with different namings and came up with this banger",
"While creating this website, I had no idea what I was doing, so I had to do a lot of searching",
"Prior to spoekle.com, I had no knowledge of html at all",
"Ever wondered what I do at school? Well I am following an IT related course in the Neterlands, see, now you know",
"I ran out of fun facts. What do I write here?",
"'Mobs so icy wonder why they kill me I'm just mining. Water I just fell in a hole, now I'm dyin'",
"Did you know that I actually play more than Beat Saber? I used to play a lot of CS:GO, Minecraft and Valorant"
];

var randomNumber = Math.floor(Math.random()*facts.length);
var element = facts[randomNumber];

output.innerHTML = element;
