const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]
function superbowlWin(array){
  if(array.find(didTheyWin)===undefined){
    return array.find(didTheyWin)
  } else {
    return (array.find(didTheyWin).year)
  }
}

function didTheyWin(key){
  if (key.result===`W`){
    return (key.year)
  }
}
  