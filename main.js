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
  for (let i = 0; i <= substring.length; i++) {
    const substringIndex = substring.length - i;
    const strIndex = str.length - i;
    if (str[strIndex] !== substring[substringIndex]) {
      return false;
    }
  }

  return true;
}

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

function join(arr, separator = '') {
}


function split(str, separator) {
}

function trimStart(str) {
}

function trimEnd(str) {
  let trimmed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      return str.slice(0, i + 1);
    }
  }

  return trimmed;
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
