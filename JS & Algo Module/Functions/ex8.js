const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

// Removes special characters and lowercases the sentence, returns array of words
const cleanText = function(sentence) {
  let cleaned = sentence.toLowerCase()
  for (let i = 0; i < specialChars.length; i++) {
    cleaned = cleaned.split(specialChars[i]).join("")
  }
  return cleaned.split(" ")
}

// Adds a word to the wordCounts counter
const addToCounter = function(word) {
  if (wordCounts[word] === undefined) {
    wordCounts[word] = 1
  } else {
    wordCounts[word]++
  }
}

// Main function: coordinates everything
const countWords = function(sentence) {
  const words = cleanText(sentence)
  for (let i = 0; i < words.length; i++) {
    addToCounter(words[i])
  }
}

countWords(story)
console.log(wordCounts)