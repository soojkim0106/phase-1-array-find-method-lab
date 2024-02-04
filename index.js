// code your solution here

const superbowlWin = record =>{
    const winningYear = record.find(record => record.result === 'W');
    if(winningYear){
        return winningYear.year
    }
    else{
        return undefined
    }
}