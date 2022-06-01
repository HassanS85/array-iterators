//Write a function that:
// Takes an array of names as a parameter.
// It needs return a new array with each of the first letters of the names capitalized

// const arrays = ["apple", "banana", "pear", "kiwi"]
// const myArray = arrays.map((array) => {
//     for (let i = 0; i < arrays.length; i++) {
//         arrays[i] = arrays[i].toUpperCase()
//     }return arrays;
// });

// console.log(myArray);


// // Write a function that:
// // Takes an array of letters as a parameter.
// // It needs return a new array with only consonants, the vowels need to be removed.

// const arraysFruit = ["apple", "banana", "pear", "kiwi"]
// const removeVowels = arraysFruit.filter((Fruit) => {
//     return Fruit.includes("a", "e", "i", "o", "u");
// })

// console.log(removeVowels)


// // Write a function that:
// // Takes an array of numbers as a parameter
// // It needs to return the mean average
// // Total the numbers and divide by the amount of numbers in the array

// const numbers = [2,35,3,5,9]

// const mean = (arr) => {
//     return arr.reduce((total, current) => total += current, 0) / arr.length;

// }
// console.log(mean(numbers));


// const times = [1,2,3,5,6,7]
// const sum = times.reduce((a, b) => a + b, 0);
// const avg = (sum / times.length) || 0;

// console.log(`The sum is: ${sum}. The average is: ${avg}.`);


// Write a function that:

// Takes an array of words
// Returns a new array of words
// Figure out the difference with the examples below and use an array iterator method to implement it.

const arrayWords = ["spray", "limit", "disco", "exuberant", "destruction", "present"];
const filteredWords = arrayWords.filter((Words) => {
    if (Words.length > 5) {
        return Words
    }
})

console.log(filteredWords)


// Write a function that:

// Takes an array of words
// Returns a new array of words
// Figure out the difference with the examples below and use an array iterator method to implement it.

// const stringTogether =  ["please camel", "join casing", "these disco", "with shoes"];
// const newArray = stringTogether.map((strings) => {
//     return strings
// })
//     stringTogether.forEach(strings => {
//         return newJoin = stringTogether.join("");  
//     }); 

// console.log(newJoin);


// Takes an array of scrabble tile objects
// Returns a score
// Figure out the difference with the examples below and use an array iterator method to implement it.


const scrabbleLetters = [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];

const sum = scrabbleLetters.reduce((accumulator, total) => accumulator + total.value, 0);
console.log(sum);
