// CHALLENGE 1 - capitalize() - makes the first character of a given string uppercase.
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

// CHALLENGE 2 - capitalizeWords() - makes all characters uppercase.
function capitalizeWords(str) {
    return str.toUpperCase()
  }

// CHALLENGE 3 - capitalizeHeadline() - makes the first character of each word uppercase. Imagine that each word is separated by a space.
function capitalizeHeadline(str) {
    const strArray = str.split(' ')
    let charArray = []
    for (let x = 0; x < strArray.length; x++) {
      charArray.push(strArray[x].charAt(0).toUpperCase() + strArray[x].slice(1));
    }
    return charArray.join(" ");
  }

// CHALLENGE 4 - removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
function removeExtraSpaces(str) {
    let newStr = str.trim()
    const strArray = newStr.split(' ').filter(word => word !== '')
    return strArray.join(" ")
  }

// CHALLENGE 5 - kababCase() - Removes extra spaces and replaces spaces with the hyphen “-“, and makes all characters lowercase.
function kababCase(str) {
    const strArray = str.split(' ')
    let newStr = ""
    for (let x = 0; x < strArray.length; x++) {
      if (x === strArray.length - 1) {
        newStr += strArray[x]
      } else {
        newStr += strArray[x] + '-'
      }
    }
    return newStr
  }

// CHALLENGE 6 - snakeCase() - Removes extra space and replaces spaces with an underscore “_”, and makes all characters lowercase.
function snakeCase(str) {
    const strList = str.split(' ')
    let newStr = ""
    for (let x = 0; x < strList.length; x++) {
      if (x === strList.length - 1) {
        newStr += strList[x]
      } else {
        newStr += strList[x] + '_'
      }
    }
    return newStr
  }

// CHALLENGE 7 - camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
    const newString = str.split(' ')
    let newStr = ""
    for (let x = 0; x < newString.length; x++) {
      if (x == 0) {
        newStr += newString[x]
      } else {
        newStr += capitalizeHeadline(newString[x])
      }
    }
    return newStr
  }

// CHALLENGE 8 - shift() - this method will take the first character of a string and move to the end of a string
function shift(str) {
    let letterArray = str.split('')
    let firstLetter = letterArray[0]
    let newArray = letterArray.slice(1)
    newArray.push(firstLetter)
    newArray = newArray.join('')
    return newArray
  }
