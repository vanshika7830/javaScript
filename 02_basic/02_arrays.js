const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const all_new_heros = [...marvel_heros,...dc_heros]  //can add more than 2
// console.log(all_new_heros)

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// // const real_another_array = anotherArray.flat(1)   //1st depth
// const real_another_array = anotherArray.flat(Infinity)   //All depths
// console.log(real_another_array)


// console.log(Array.isArray("Vanshika"))
console.log(Array.from("Vanshika"))   //single parameter for from
console.log(Array.of("Vanshika","hello"))   //multiple parameter for of

console.log(Array.from({name:"Vanshika"}))   //Interesting
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

// Revisting Errors