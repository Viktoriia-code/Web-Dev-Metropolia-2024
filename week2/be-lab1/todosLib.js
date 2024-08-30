let todosArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
  // Check if any parameter is empty or undefined
  if (!task || typeof completed !== 'boolean' || !dueDate) {
      return false;
  }

  const newTodo = {
      id: nextId++,  // Assigns a unique id and increments it
      task,
      completed,
      dueDate
  };

  todosArray.push(newTodo); // Adds the new car to the array
  return newTodo; // Returns the added car object
}

function getAll() {
  return todosArray;
}

function findById(id) {
  const numericId = Number(id); // Converts the ID to a number
  const todo = todosArray.find(item => item.id === numericId); // Finds the car with the matching ID
  return todo || false; // Returns the car or false if not found
}

function updateOneById(id, updatedData) {
  const todo = findById(id);
  if (todo) {
      // Update properties only if they are provided in updatedData
      if (updatedData.task) todo.task = updatedData.task;
      if (updatedData.completed) todo.completed = updatedData.completed;
      if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;
      return todo; // Returns the updated car object
  }
  return false; // Returns false if the car with the provided ID is not found
}

function deleteOneById(id) {
  const todo = findById(id);
  if (todo) {
      const initialLength = todosArray.length;
      todosArray = todosArray.filter(todo => todo.id !== Number(id)); // Filters out the car with the matching ID
      return todosArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
  }
  return false; // Returns false if the car was not found
}

if (require.main === module) {
  // Add todo
  let result = addOne("Buy groceries", false, "2024-08-30");
  console.log(result);
  result = addOne("Make pizza", false, "2024-08-30");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOneById called:", updateOneById(1, { completed: true }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

const ToDos = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById
};

module.exports = ToDos;