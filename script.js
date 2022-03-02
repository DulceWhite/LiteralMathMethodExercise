//1a

let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

//1b
console.log(warmHugs.toUpperCase());

//1c
console.log(warmHugs.replace("like", "love"));

//2a
let beenImpaled = "Oh, look at that. I've been impaled.";

//2b
console.log(beenImpaled.slice(-19));

//3a
let doDotDot = ". . ."

//3b
let skullBones;
skullBones = `I don't have a skull ${doDotDot} or bones`;
console.log(skullBones);

//4
console.log(Math.PI);

//5
let randomNumber = Math.random();
randomNumber *= 3;
//randomNumber *= 2;
//randomNumber ++;
randomNumber = Math.ceil(randomNumber);
//randomNumber = Math.round(randomNumber);
console.log(randomNumber);

//BONUS

//6
console.log("Let It Go!".repeat(3).toUpperCase()); 

//7a
let reindeers = "Reindeers are better than people.";

//7b
console.log(reindeers.replace("Reindeers are better than people." , "Reindeers_are_better_than_people." ));

//8
console.log(Math.SQRT2);
console.log(Math.sqrt(2));

//9
let newRandomNumber = Math.ceil((Math.random()*17)+6);
console.log(newRandomNumber);