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
