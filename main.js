//Write a function that:
// Takes an array of names as a parameter.
// It needs return a new array with each of the first letters of the names capitalized

const arrays = ["apple", "banana", "pear", "kiwi"]
const myArray = arrays.map((array) => {
    for (let i = 0; i < arrays.length; i++) {
        arrays[i] = arrays[i].toUpperCase()
    }return arrays;
});

console.log(myArray);


// Write a function that:
// Takes an array of letters as a parameter.
// It needs return a new array with only consonants, the vowels need to be removed.

const arraysFruit = ["apple", "banana", "pear", "kiwi"]
const removeVowels = arraysFruit.filter((Fruit) => {
    return Fruit.includes("a", "e", "i", "o", "u");
})

console.log(removeVowels)


// Write a function that:
// Takes an array of numbers as a parameter
// It needs to return the mean average
// Total the numbers and divide by the amount of numbers in the array

const numbers = [2,35,3,5,9]

const mean = (arr) => {
    return arr.reduce((total, current) => total += current, 0) / arr.length;

}

console.log(mean(numbers));