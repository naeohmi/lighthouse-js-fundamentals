// range = array of 2 nums representing start and end values for loop
// multiples = array of 2 nums rep-ing the multiples you want to replace with words
// words = array of 2 strings rep-ing words to replace with multiples
// example: loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function loopyLighthouse(range, multiples, words){
  for (var s = range[0]; s <= range[1]; s++) { //s = start
    var addMe = '';
    if (s % multiples[0] === 0) addMe += words[0];
    if (s % multiples[1] === 0) addMe += words[1];
    console.log(addMe || s);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
