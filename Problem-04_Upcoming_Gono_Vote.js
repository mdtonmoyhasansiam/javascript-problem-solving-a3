

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
