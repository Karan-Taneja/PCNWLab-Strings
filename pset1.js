/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt!
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

    const reverse = input => {

        const reverseArray = []

        for (i = input.length -1; i >= 0; i--){
            reverseArray.push(input.charAt(i))
        }
        const reverseString = reverseArray.join("")

        return reverseString
    }

    const middleIndex = string => {

        if (string.length % 2 === 0){
            return string.length / 2
        }

        else if(string.length % 2 > 0){
            return ((string.length - 1) / 2)
        }

    }

    

// End of Help Function    

    const makeEven = name => {

        if (name.length % 2 > 0){
           return name = name + "#"
        }
        return name
    }

    console.log(makeEven("TK"))
    console.log(makeEven("Erika"))

/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

    const getLastChar = string => {
        return string.charAt(string.length -1)
    }

    console.log(getLastChar("TK"))
    console.log(getLastChar("Erika"))

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/
    const getThirdChar = string => {
        return string.charAt(2)
    }

    console.log(getThirdChar("TKhaos"))
    console.log(getThirdChar("Erika"))

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

    const get3rdCharFromEnd = string => {
        return string.charAt(string.length - 3)
    }


    console.log(get3rdCharFromEnd("TKhaos"))
    console.log(get3rdCharFromEnd("Erika"))

/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

    const startsWithVowel = string => {

    string = string.toLowerCase()
    let vowelArray = ["a", "e", "i", "o", "u"]
    let arrayIndex = 0
    let isVowel = false

        while (arrayIndex < 5 && isVowel === false){
            if (string.charAt(0) === vowelArray[arrayIndex]){
                isVowel = true
            }
            else {
                arrayIndex++
            }
        }
        return isVowel
    }

    console.log(startsWithVowel("TKhaos"))
    console.log(startsWithVowel("Erika"))


/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endsWithVowel = string => {

    string = string.toLowerCase()
    let vowelArray = ["a", "e", "i", "o", "u"]
    let arrayIndex = 0
    let isVowel = false

        while (arrayIndex < 5 && isVowel === false){
            if (string.charAt(string.length -1) === vowelArray[arrayIndex]){
                isVowel = true
            }
            else {
                arrayIndex++
            }
        }
        return isVowel
    }
    console.log(endsWithVowel("TKhaos"))
    console.log(endsWithVowel("Erika"))

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

const containsVowel = string => {

    string = string.toLowerCase()
    let vowelArray = ["a", "e", "i", "o", "u"]
    let arrayIndex = 0
    let charIndex = 0
    let isVowel = false

    while (charIndex < (string.length) && isVowel === false){
        while (arrayIndex < 5 && isVowel === false){
            if (string.charAt(charIndex) === vowelArray[arrayIndex]){
                isVowel = true
            }
            else {
                arrayIndex++
            }
        }
        arrayIndex = 0
        charIndex++
    }
    return isVowel
    }

    console.log(containsVowel("TKhaos"))
    console.log(containsVowel("Erika"))

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

    const hasUpperCase = string => {

        lowerCaseString = string.toLowerCase()

        if (string !== lowerCaseString){
            return true
        }
        return false
    }

    console.log(hasUpperCase("TKhaos"))
    console.log(hasUpperCase("Erika"))

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

    const isPalindromic = string => {

        string = string.toLowerCase()

        if (string === reverse(string)){
            return true
        }

        return false
    }

    console.log(isPalindromic("TKhaos"))
    console.log(isPalindromic("Tacocat"))


/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

    const getInitials = (fullName) => {

        let nameOne = []
        let nameTwo = []
        let index = 0

        for (index = 0; fullName.charAt(index) !== " "; index++){

            if (fullName.charAt(index) !== " "){
                nameOne.push(fullName.charAt(index))
            }

        }

        for (index; index < fullName.length; index++){
            if (fullName.charAt(index) !== " "){
                nameTwo.push(fullName.charAt(index))
            }
        }

        return `${nameOne[0]}${nameTwo[0]}`

    }
    console.log(getInitials("Taneja Karan"))
    console.log(getInitials("Bruce Wayne"))

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

    const isPerfectStr = string => {

        let findMiddle = middleIndex(string)

        let middleCharacter = string.charAt(findMiddle)

        let vowelArray = ["a", "e", "i", "o", "u"]
        let isVowel = false
        let isPalindrome = false

        middleString = `${string.charAt(findMiddle - 1)}${string.charAt(findMiddle)}${string.charAt(findMiddle + 1)}`
        
        isPalindrome = isPalindromic(middleString)

        for (i = 0; i < 5; i++){
            if (middleCharacter === vowelArray[i]){
                isVowel = true
            }
        }

        if (string.length > 3 && isVowel === true && isPalindrome === true) {
            return true
        }

        return false
    }

console.log(isPerfectStr("ab")) //false
console.log(isPerfectStr("hog")) //false
console.log(isPerfectStr("abtotab")) //true
console.log(isPerfectStr('abctotabc')); // true

// 123 ,  456,  789 //char num
// "abc","tot","abc"
// 012,   345,  678//index num

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

const strMasher = (stringOne, stringTwo) => {

    stringOneArray = []

    for (i = 0; i < stringOne.length; i++){
        stringOneArray.push(stringOne.charAt(i))
    }

    middle = middleIndex(stringOneArray) + 1

    stringOneArray.splice(middle, 0, stringTwo)

    return stringOneArray.join("")
}

console.log(strMasher("Hello", "Wrold"))