let tourArray = [];

let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(name, info, image, price) {
  if (!name || !info || !image || !price) {
    return false;
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price
  };

  tourArray.push(newTour);
  return newTour;
}

function findById(id) {
  const numericId = Number(id);
  const tour = tourArray.find(item => item.id === numericId);
  if (tour) {
      return tour;
  } else {
      return false;
  }
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
      // Update properties only if provided in updatedData
      if (updatedData.name) {
          tour.name = updatedData.name;
      }
      if (updatedData.info) {
          tour.info = updatedData.info;
      }
      if (updatedData.image) {
          tour.image = updatedData.image;
      }
      if (updatedData.price) {
        tour.price = updatedData.price;
      }
      return tour;
  }
  return false;
}

function deleteOneById(id) {
  const tour = findById(id);
  if (tour) {
      const initialLength = tourArray.length;
      tourArray = tourArray.filter(tour => tour.id !== Number(id));
      return tourArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {
  console.log("getAll called:", getAll());
}

Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById
}

module.exports = Tour;