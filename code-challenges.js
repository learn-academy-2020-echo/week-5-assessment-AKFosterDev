// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = 'lackadaisical'
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = 'gobbledygook'
// Expected output: "g0bbl3dyg00k"

// FIRST CODE
// Create a function that takes a string
const secretCodeConverter = (str) => {
	// convert string to an array - held in variable
	let strArray = str.split('')
	// create an array to hold new values
	let newArray = []
	// map over array
	strArray.map((letter) => {
		// check each letter and change based on letter being a, e, i or o
		if (letter === 'a' || letter === 'A') {
			return newArray.push('4')
		} else if (letter === 'e' || letter === 'E') {
			return newArray.push('3')
		} else if (letter === 'i' || letter === 'I') {
			return newArray.push('1')
		} else if (letter === 'o' || letter === 'O') {
			return newArray.push('0')
		} else {
			return newArray.push(letter)
		}
	})
	// convert array back to string (join(''))
	// return a coded message with vowels converted to ('a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0)
	return newArray.join('')
}

// REFACTOR ORIGINAL CODE
const secretCodeConverter2 = (str) => {
	// create an array to hold new values
	let newArray = []

	// convert string to an array - held in variable
	// map over array
	str.split('').map((letter) => {
		// check each letter and change based on letter being a, e, i or o
		if (letter === 'a' || letter === 'A') {
			return newArray.push('4')
		} else if (letter === 'e' || letter === 'E') {
			return newArray.push('3')
		} else if (letter === 'i' || letter === 'I') {
			return newArray.push('1')
		} else if (letter === 'o' || letter === 'O') {
			return newArray.push('0')
		} else {
			return newArray.push(letter)
		}
	})
	// convert array back to string (join(''))
	// return a coded message with vowels converted to ('a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0)
	return newArray.join('')
}

// call the function
console.log('Problem #1')
console.log(secretCodeConverter(secretCodeWord1))
console.log(secretCodeConverter(secretCodeWord2))
console.log('Problem #1 - Refactor')
console.log(secretCodeConverter2(secretCodeWord1))
console.log(secretCodeConverter2(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ['Apple', 'Banana', 'Plum', 'Cherry', 'Kiwi', 'Peach']
// Expected output: "Apple" "Banana" "Peach"

// Create a function that takes an array of words as an argument
const wordsWithA = (arr) => {
	// create a variable to hold new array of words with 'a'
	let aWords = []

	// iterate over each word in the array
	arr.map((word) => {
		// determine if word includes the letter a
		if (word.includes('a') || word.includes('A')) {
			// if does include an 'a' push to new array
			return aWords.push(word)
		}
	})

	// return the words that include an 'a' as strings
	return aWords.join(' ')
}

// call the function
console.log('Problem #2')
console.log(wordsWithA(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true

// Create a function that takes an array of 5 numbers
const fullHouseChecker = (arr) => {
	// create variable to hold sorted array
	let sorted = arr.sort((a, b) => a - b)
	// create conditional to check if values equal
	if (
		(sorted[0] === sorted[1] &&
			sorted[1] === sorted[2] &&
			sorted[3] === sorted[4]) ||
		(sorted[0] === sorted[1] &&
			sorted[2] === sorted[3] &&
			sorted[3] === sorted[4])
	) {
		return true
	} else {
		return false
	}
}

console.log('Problem #3')
console.log(fullHouseChecker(hand1))
console.log(fullHouseChecker(hand2))
console.log(fullHouseChecker(hand3))
console.log(fullHouseChecker(hand4))

// STRETCH:
var hand5 = ['K', 5, 'K', 5, 'K']
// Expected output: true
var hand6 = ['A', 'Q', 'A', 5, 3]

const fullHouseChecker2 = (arr) => {
	// create variable to hold converted array
	let intArray = []
	// map over array
	// create conditional to push letters converted in to integers to new array
	arr.map((item) => {
		if (item === 'A') {
			return intArray.push(1)
		} else if (item === 'J') {
			return intArray.push(11)
		} else if (item === 'Q') {
			return intArray.push(12)
		} else if (item === 'K') {
			return intArray.push(13)
		} else {
			return intArray.push(item)
		}
	})

	// create variable to hold sorted array
	let sorted = intArray.sort((a, b) => a - b)
	// create conditional to check if values equal
	if (
		(sorted[0] === sorted[1] &&
			sorted[1] === sorted[2] &&
			sorted[3] === sorted[4]) ||
		(sorted[0] === sorted[1] &&
			sorted[2] === sorted[3] &&
			sorted[3] === sorted[4])
	) {
		return true
	} else {
		return false
	}
}

// Expected output: false
console.log('Problem #3 - Stretch')
console.log(fullHouseChecker2(hand5))
console.log(fullHouseChecker2(hand6))
