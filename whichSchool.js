var school = "";
function whichSchool(age) {
  if (age < 13) {
    school = "Elementary School";
  } else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  } else {
    school = "Lighthouse Labs";
  }
  return school;
}