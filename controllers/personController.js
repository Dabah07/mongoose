const Person = require('../models/Person');

// Create and save a single person
const createPerson = async (personData) => {
  const person = new Person(personData);
  return await person.save();
};

// Create multiple people
const createManyPeople = (arrayOfPeople) => {
  return Person.create(arrayOfPeople);
};

// Find people by name
const findPeopleByName = (name) => {
  return Person.find({ name: name });
};

// Find one person by favorite food
const findOneByFood = (food) => {
  return Person.findOne({ favoriteFoods: food });
};

// Find person by ID
const findPersonById = (personId) => {
  return Person.findById(personId);
};

// Find, update and save - Adding hamburger to favoriteFoods
const addFavoriteFood = async (personId) => {
  const person = await Person.findById(personId);
  person.favoriteFoods.push('hamburger');
  return person.save();
};

// Find one and update - Update age by name
const updateAge = (personName) => {
  return Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true }
  );
};

// Remove one person by ID
const removeById = (personId) => {
  return Person.findByIdAndRemove(personId);
};

// Remove all people named Mary
const removeManyPeople = () => {
  return Person.deleteMany({ name: "Mary" });
};

// Chain search query
const searchBurritos = async () => {
  return await Person.find({ favoriteFoods: "burrito" })
    .sort({ name: 1 })
    .limit(2)
    .select('-age');
};

module.exports = {
  createPerson,
  createManyPeople,
  findPeopleByName,
  findOneByFood,
  findPersonById,
  addFavoriteFood,
  updateAge,
  removeById,
  removeManyPeople,
  searchBurritos
}; 