const people_info = [
  { name: "guido", profession: "bungalow builder", age: 17, country: "canaland", city: "sydurn", catchphrase: "what a piece of wood!" },
  { name: "petra", profession: "jet plane mechanic", age: 31, country: "greenmark", city: "bostork", catchphrase: "that's my engine, bub" },
  { name: "damian", profession: "nursery assistant", age: 72, country: "zimbia", city: "bekyo", catchphrase: "with great responsibility comes great power" }
]

// Capitalizes the first letter of a string
const capitalize = function(str) {
  return str[0].toUpperCase() + str.slice(1)
}

// Formats age based on the rules
const getAge = function(age) {
  if (age < 21) return "an Underage"
  if (age > 55) return "a 55+"
  return `a ${age} year old`
}

// Capitalizes each word in a multi-word profession
const capitalizeProfession = function(profession) {
  return profession.split(" ").map(word => capitalize(word)).join(" ")
}

// Formats "City, Country"
const getLocation = function(city, country) {
  return `${capitalize(city)}, ${capitalize(country)}`
}

// Formats the catchphrase: quoted and first letter capitalized
const capitalizeCatchphrase = function(catchphrase) {
  return `"${capitalize(catchphrase)}"`
}

// Main summary function
const getSummary = function(person) {
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} `
  summary += capitalizeProfession(person.profession)
  summary += ` from ${getLocation(person.city, person.country)}. `
  summary += `${capitalize(person.name)} loves to say ${capitalizeCatchphrase(person.catchphrase)}.`
  return summary
}

// Loop that calls getSummary for each person
for (let i = 0; i < people_info.length; i++) {
  console.log(getSummary(people_info[i]))
}