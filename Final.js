// Problem-01

function newPrice(currentPrice , discount ) {
    if(
        typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
    ){
        return "Invalid"
    }
    let discountAmmount = (currentPrice*discount)/100;
    let finalPrice = currentPrice - discountAmmount;

    return finalPrice.toFixed(3)
}

// Problem-02

function validOtp(otp) {
    if(
        typeof otp !== "string"
    ){
        return "Invalid"
    }

    if(
        otp.length === 8 && otp.startsWith("ph-")
    ){
        return true
    }
    else{
        return false
    }
}

// Problem- 03

function finalScore (omr) {
    
    let {right, wrong, skip} = omr;
    if(
        right + wrong+ skip !== 100
    ){
        return "Invalid"
    }

    let score = (right*1) - (wrong*0.5);

    return Math.round(score)

}

// Problem- 04

function gonoVote(array) {
    if(
        !Array.isArray(array)
    ){
        return "Invalid"
    }

    let haInput = 0;
    let naInput = 0;

    for(let vote of array){

        if(vote === "ha"){
            haInput = haInput + 1
        }

        if(vote === "na"){
            naInput = naInput + 1
        }
    }

    if(
            haInput > naInput
        ){
            return true
        }

        if(
            haInput === naInput
        ){
            return "equal"
        }

        else{
            return false
        }
    
}

// Problem- 05

function analyzeText(str) {

  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }

  let words = str.split(" ");

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  let totalCharacters = str.split(" ").join("").length;

  return {
    longwords: longestWord,
    token: totalCharacters
  }
}