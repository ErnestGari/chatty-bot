const input = require('sync-input');

// Greets the user
function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}
// Asks user for name and prints it
function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}
// Guesses age using remainders
function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}
// Count to the number input
function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}
// Simple quiz
function test() {
	console.log("Let's test your programming knowledge.");
	console.log("What is the year Javascript was invented?")

console.log("1. 2000");
console.log("2. 2005");
console.log("3. 1984");
console.log("4. 1995");

let numberInput = input();

if(numberInput = 4){	
	console.log("Congratulations, have a nice day!");
}else{
	console.log("Please, try again.");
	return input();
}
}
greet('Bug', '2022')
remind_name();
guess_age();
count();
test();