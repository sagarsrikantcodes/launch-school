var dinoError = new Error("Oh no! A dino error!");
dinoError.name = "DinoError";

console.log("dinoError name: ", dinoError.name);
// Logs: dinoError name: DinoError

console.log("dinoError message: ", dinoError.message);
// Logs: dinoError message: Oh no! A dino error!

