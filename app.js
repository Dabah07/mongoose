const connectDB = require('./config/database');
const personController = require('./controllers/personController');


connectDB();


async function exec_checkpoint_methods() {
  try {
   
    const person = await personController.createPerson({
      name: "John Doe",
      age: 25,
      favoriteFoods: ["pizza", "pasta"]
    });

    const manyPeople = await personController.createManyPeople([
      { name: "Mary", age: 27, favoriteFoods: ["burrito"] },
      { name: "Jane", age: 29, favoriteFoods: ["burrito", "tacos"] }
    ]);

    const maryPeople = await personController.findPeopleByName("Mary");

    const burritoLovers = await personController.searchBurritos();
    console.log("Burrito lovers:", burritoLovers);

  } catch (err) {
    console.error("Error:", err);
  }
}

exec_checkpoint_methods(); 