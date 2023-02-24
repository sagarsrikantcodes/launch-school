let munsters = {
  Herman: {age: 32, gender: "male"},
  Lily: {age: 30, gender: "female"},
  Grandpa: {age: 402, gender: "male"},
  Eddie: {age: 10, gender: "male"},
  Marilyn: {age: 23, gender: "female"}

};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);
/*

Logs
{
  Herman: { age: 74, gender: 'other' },
  Lily: { age: 72, gender: 'other' },
  Grandpa: { age: 444, gender: 'other' },
  Eddie: { age: 52, gender: 'other' },
  Marilyn: { age: 65, gender: 'other' }
}

Yes, the family's data gets ransacked. The object
that gets changed by the function is the munsters
object.
*/
