//saturdayFun takes the argument activity
// roller-skate as default activity
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = 'go to the office'){
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
const wrapWithAsterisk = wrapAdjective('*');
const wrapWithDoublePipe = wrapAdjective('||');

