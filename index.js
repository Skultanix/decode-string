function decoder(aString) {
    let wordArr = aString.split('')
    let decodeArr = []
    for(let i = 1; i < wordArr.length; i++) {
      let newCode = wordArr[i].charCodeAt() + Number(wordArr[0])
      let newChar = String.fromCharCode(newCode)
      decodeArr.push(newChar)
      
    }
    let decodeStr = decodeArr.join("")
    return decodeStr
  }
  
  console.log(decoder('2fcjjm'))