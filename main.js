function slice(string, start = 0, end = string.length) {
  let newString = '';
  for (let i = start; i < end; i++) {
   newString = newString + string[i]
  } 
    
  return newString 
}
function repeat(str, repetitions) {
  let newStr = '';
  for (let i = 0; i < repetitions; i++) {
    newStr = newStr + str;
  }

  return newStr
}

function startsWith(string, substring) {
  
  for (let i = 0; i < substring.length; i++) {
    
    if(string[i] !== substring[i]) {
      return false
    }
  }
  return true
  
}

function endsWith(str, substring) {
  for (let i = 0; i < substring.length; i++) {
    
    if(str[i] !== substring[i]) {
      return false
    }else {
      str[i] === 0
    } return true
  }
}

function includes(arr, item) {
}

function join(arr, separator = '') {
}


function split(str, separator) {
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
