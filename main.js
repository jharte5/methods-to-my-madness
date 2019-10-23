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
  let newString = '';
  for (let i = 0; i < substring.length; i++) {
    newString = newString + string[i].length

  }
  return newString
}

function endsWith(str, substring) {
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
