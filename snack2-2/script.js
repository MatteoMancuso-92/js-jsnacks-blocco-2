const arrFirstNames = ['Franco', 'Mario', 'Aziz', 'Nello'];

const arrLastNames = ['Teodoro', 'Blallo', 'Ragnar', 'Fiore', 'Lello', 'Ciano'];

const arrFullNames = [];

for (let i = 0; i < arrFirstNames.length; i++) {

	const firstName = arrFirstNames[i];

	const randIndex = Math.floor(Math.random() * arrLastNames.length);

	const lastName = arrLastNames[randIndex];

	const fullName = firstName + ' ' + lastName;
	
	arrFullNames.push(fullName);
}

const arrFullNamesRandom = [];
const numFullNames = Math.min(arrFirstNames.length, arrLastNames.length);
for (let i = 0; i < numFullNames; i++) {
	const randFirstIndex = Math.floor(Math.random() * arrFirstNames.length);
	const randLastIndex = Math.floor(Math.random() * arrLastNames.length);
	arrFullNamesRandom.push(arrFirstNames[randFirstIndex] + ' ' + arrLastNames[randLastIndex]);
}

console.log(arrFullNames);
console.log(arrFullNamesRandom);