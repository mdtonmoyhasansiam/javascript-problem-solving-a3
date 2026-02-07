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
