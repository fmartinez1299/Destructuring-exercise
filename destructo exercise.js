/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};
const { x, y } = coordinates;
console.log("Coordinates:", x, y);

/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};
const { first, second, ...remaining } = locations;
console.log("Key Locations:", first, second);
console.log("Remaining Locations:", remaining);

/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};
const { upper, middle = remaining.third, lower } = doorCode;
console.log("Door Code Sequence:", upper, middle, lower);

/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};
const { ancientWord: translation } = riddle;
console.log("Riddle Translation:", translation);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
const [element1, element2] = elements;
console.log("Essential Elements:", element1, element2);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
const [firstStone, , , , , sixthStone] = stones;
console.log("Extracted Stones:", firstStone, sixthStone);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visibleShadow, ...hiddenShadows] = shadows;
console.log("Visible Shadow:", visibleShadow);
console.log("Hidden Shadows:", hiddenShadows);

/* Task 8: The Wise Function */
function revealPath({ direction, distance }) {
	console.log(`Travel ${distance} units towards the ${direction}`);
}
revealPath({ direction: "North", distance: 15 });

/* Task 9: Potion of Clarity */
function mixPotion({ ingredient1 = "Water", ingredient2 = "Fireflower" } = {}) {
	console.log(`Mixing ${ingredient1} and ${ingredient2}`);
}
mixPotion({});
mixPotion({ ingredient1: "Dragon Scale" });

/* Task 10: The Array Spell */
function castSpell([ingredient1, ingredient2]) {
	console.log(`Casting spell with ${ingredient1} and ${ingredient2}`);
}
castSpell(["Phoenix Feather", "Unicorn Hair", "Mandrake Root"]);

/* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
const { outer: { inner: finalKey } } = nestedSecret;
console.log("Unveiled Secret:", finalKey);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneA, stoneB] = [stoneB, stoneA];
console.log("Swapped Stones:", stoneA, stoneB);
