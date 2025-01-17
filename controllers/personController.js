const Person = require('../models/Person');


const createPerson = async (personData) => {
  const person = new Person(personData);
  return await person.save();
};

const createManyPeople = (arrayOfPeople) => {
  return Person.create(arrayOfPeople);
};


const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return console.error(err);
    console.log('Personne trouvée :', data);
  });
};




const findPeopleByName = (name) => {
  Person.find({ name }, (err, data) => {
    if (err) return console.error(err);
    console.log('Personnes trouvées :', data);
  });
};


const findPersonById = (personId) => {
  return Person.findById(personId);
};


const addFavoriteFood = async (personId) => {
  const person = await Person.findById(personId);
  person.favoriteFoods.push('hamburger');
  return person.save();
};


const updateAge = (personName) => {
  return Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true }
  );
};


const removeById = (personId) => {
  return Person.findByIdAndRemove(personId);
};

const removeManyPeople = () => {
  return Person.deleteMany({ name: "Mary" });
};

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