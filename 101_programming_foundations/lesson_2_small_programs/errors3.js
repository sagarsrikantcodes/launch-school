function cloneDinosaur(name) {
  try {
    var myDinosaur = {
      name : name,
      dangerMessage: name.toUpperCase() + " IS COMING!!!",
    };
    return myDinosaur;

  } catch (e) {
    console.log(e.name + ": " + e.message);
    return undefined;

  } finally {
    console.log("Dinosaur clone function complete.");
  }
}

var badUserInput = null;
var dino = cloneDinosaur(badUserInput);


console.log(dino);

var goodUserInput = "Rex";
var rex = cloneDinosaur(goodUserInput);

console.log(rex);