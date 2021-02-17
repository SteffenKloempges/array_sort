//lev 1_1 sort
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortLanguages = languages.sort()
console.log(sortLanguages)

//lev 1_2 sort_reverse

let languages2 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortLanguages2 = languages2.sort()
console.log(sortLanguages2)
let reverseLanguage2 = languages2.reverse()
console.log(reverseLanguage2)

//lev 2_1 sort_reverse_name

let strNames = ["sergio", "hannah", "regallager", "reliefpfeiler", "rentner"]

console.log(strNames.reverse())

//lev 2_2 sort _ bigger numbers

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

function compare(a, b) {
    return a - b;
}
console.log(numArray2.sort(compare));

//lev 1_13 join

let meinText1 = ["Hello", "World"]
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join1 = meinText1.join()
let join2 = meinText1.join("")
let join3 = meinText1.join(" ")
let join4 = meinText1.join("+")

console.log(join1)
console.log(join2)
console.log(join3)
console.log(join4)

let join5 = meinText2.join()
let join6 = meinText2.join("")
let join7 = meinText2.join(" ")
let join8 = meinText2.join("+")

console.log(join5)
console.log(join6)
console.log(join7)
console.log(join8)

let join9 = meinText3.join()
let join10 = meinText3.join("")
let join11 = meinText3.join(" ")
let join12 = meinText3.join("+")

console.log(join9)
console.log(join10)
console.log(join11)
console.log(join12)


