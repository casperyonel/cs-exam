
// SUM ZERO 
// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss in list sum to 0, and false otherwise.
let newArray = [-2, 1, 3, 5, 3, 2]

const newFunc = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === (-1 * array[j])) {
                return true
            }
        }
    }
    return false
}
// RUNTIME = O(n^2)
// SPACE COMPLEXITY: O(n)

console.log(newFunc(newArray))









// HAS UNIQUE CHARS
// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique characters. Return False otherwise.

let string = "Hello"

const hasUniqueChars = (string) => {
    let array = string.toLowerCase().split('')
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (array[i] === array[j]) {
                return false
            }
        }
    }
    return true
}

// RUNTIME: O(n^2)
// SPACE COMPLEXITY: O(n)

console.log(hasUniqueChars(string))











// PANGRAM
// A pangram is a sentence that contains all the 
// letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

const pangramTest = sentence => {
    let a = sentence.toLowerCase().split('')
    let alphabet = ["!", " ", "z", "x", "c", "v", "b", "n", "a", "s", "d", "f", "g", "h", "j", "k", "l", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    let answer = []

    for (let j = 0; j < alphabet.length; j++) {
        for (let i = j + 1; i < a.length; i++) {
            if (alphabet[j] === a[i]) {
                answer.push[a[i]]
            }
        }
    }
    return answer
}

// RUNTIME = O(n^2)
// SPACE COMPLEXITY: O(n)

let sentence = "The quick brown fox jumps over the lazy dog!"
console.log(pangramTest(sentence))












// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

let words = ["hi", "hello", "Hellllllooooooo"]

const findLongestWord = words => {
    wordsArray = []
    answerArray = []
    for (let i = 0; i < words.length; i++) {
        let newWord = words[i].split("")
        wordsArray.push(newWord)
    }
    for (let j = 0; j < wordsArray.length; j++) {
        answerArray.push(wordsArray[j].length)
    } 
    for (let e = 0; e < answerArray.length; e++) {
        for (let f = 1; f < answerArray.length; f++) {
            if (answerArray[e] > answerArray[f]) {
                return wordsArray[e].length
            }
        }
    }
}

// RUNTIME = O(n^2)
// SPACE COMPLEXITY: O(n)

console.log(findLongestWord(words))