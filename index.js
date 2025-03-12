const record = [
    {year:"2013",result:"W"},
    {year:"2014",result:"l"},
    {year:"2015",result:"N/A"}
]

function superbowlWin(array){
    let win = array.find(game=>game.result==="W")
    return win?  win.year: undefined
    }
console.log(superbowlWin(record))