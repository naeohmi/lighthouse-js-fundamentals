for (var j = 100; j <= 200; j++) {
  var addMe = '';
  if (j % 3 === 0) addMe += 'Loopy';
  if (j % 4 === 0) addMe += 'Lighthouse';
  console.log(addMe || j);
}