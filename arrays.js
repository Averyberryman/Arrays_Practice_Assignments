// Arrays Practice Problems

var stringNames = ["Luke", "Mark", "John", "Matthew"]

var favoriteNumbers = [99, 66, 00, 14]

var booleanValue = [true, false, true, false]

// Using the slice method, I will isolate the stringNames array to list only "Mark" and "John" by providing the start and stop points in the form of index numbers 1 and 4.
// This looks like:

stringNames.slice(1, 3)

// Using the pop method, I will remove the last element from the favoriteNumbers array, which should be 14.
// This looks like:

favoriteNumbers.pop([3])

// Using the push method, I will add another element to the booleanValue array.
// This looks like:

booleanValue.push(false[4])


// noticeably, these methods depend on understanding index positions. 
// I found the simplest explanation to be the most effective, and pulled it from the article we were provided:
// Instead of thinking of how a string, number, or boolean may correspond to a number based on how many there are, think of how many index positions you would need to move in order to get to a certain value.

// For example, here is an array of Strings:

var coolWords = ["phlharmonic", "aquiescence", "conscienscious", "indubitably"]

// If I wanted to isolate the string "acquiescence", I would have to know the index position.
// While it is the second element in the array, its index position is 1 because I would need only to move one index position to get to it, and we start from 0.
// Therefore, the command would look like this:

console.log(coolWords[1])
