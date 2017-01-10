var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;

// write while loop printing contents of ingredients:
while (ingredients < 10) {
  console.log(ingredients);
  i++;
}

// write for loop printing contents of ingredients
for (var m = 0; m < ingredients.length; m++) {
  console.log(ingredients[m]);
}

// Write any loop (while or for) printing ingredients backwards
for (var j = ingredients.length-1; j >= 0; j--) {
  console.log(ingredients[j]);
}