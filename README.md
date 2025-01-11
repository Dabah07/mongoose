# MongoDB & Mongoose Checkpoint

A Node.js application demonstrating various MongoDB operations using Mongoose ODM (Object Data Modeling). This project implements basic CRUD operations and advanced query methods on a Person database.

## Project Structure
```
├── config/
│   └── database.js
├── controllers/
│   └── personController.js
├── models/
│   └── Person.js
├── .env
├── index.js
└── package.json
```

## Setup
1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your MongoDB URI:
```
MONGO_URI="your_mongodb_uri"
```

3. Run the application:
```bash
npm run dev
```

## Database Schema

### Person Model
- **name**: String (required)
- **age**: Number
- **favoriteFoods**: Array of Strings

## Available Methods

### Create Operations
- `createPerson(personData)`: Creates a single person
- `createManyPeople(arrayOfPeople)`: Creates multiple people at once

### Read Operations
- `findPeopleByName(name)`: Finds all people with a specific name
- `findOneByFood(food)`: Finds one person with a specific favorite food
- `findPersonById(personId)`: Finds a person by their ID

### Update Operations
- `addFavoriteFood(personId)`: Adds 'hamburger' to person's favorite foods
- `updateAge(personName)`: Updates person's age to 20

### Delete Operations
- `removeById(personId)`: Removes a person by ID
- `removeManyPeople()`: Removes all people named "Mary"

### Advanced Queries
- `searchBurritos()`: Finds burrito lovers, sorts by name, limits to 2 results, and excludes age

## Example Usage

```javascript
// Create a person
const person = await personController.createPerson({
  name: "John Doe",
  age: 25,
  favoriteFoods: ["pizza", "pasta"]
});

// Find people by name
const maryPeople = await personController.findPeopleByName("Mary");

// Chain search for burrito lovers
const burritoLovers = await personController.searchBurritos();
```

