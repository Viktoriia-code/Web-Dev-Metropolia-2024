// {
//   "sender": "John Smith",
//   "message": "Great session on React components! I found the examples very helpful.",
//   "rating": 5
// }

let feedbackArray = [];

let nextId = 0;

function getAllFeedbacks() {
  return feedbackArray;
}

function createFeedback(sender, message, rating) {
  if (!sender || !message || !rating) {
    return false;
  }

  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
}

function getFeedbackById(id) {
  const numericId = Number(id);
  const feedback = feedbackArray.find((item) => item.id === numericId);

  if (feedback) {
    return feedback;
  } else {
    return false;
  }
}

function updateFeedback(id, upDatedFeedback) {
  const feedback = getFeedbackById(id);
  if (feedback) {
    if (upDatedFeedback.sender) {
      feedback.sender = upDatedFeedback.sender;
    }

    if (upDatedFeedback.message) {
      feedback.message = upDatedFeedback.message;
    }

    if (upDatedFeedback.rating) {
      feedback.rating = upDatedFeedback.rating;
    }
    return feedback;
  }
  return false;
}

function deleteFeedback(id) {
  const feedback = getFeedbackById(id);
  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter(
      (feedback) => feedback.id !== Number(id)
    );
    return feedbackArray.length < initialLength;
  }
  return false;
}

if (require.main === module) {
  // Add car
  let result = createFeedback("John Smith", "Great Trip", 5);
  console.log(result);
  // Add another car
  result = createFeedback("Mike Breen", "Nice Trip", 4);
  console.log(result);

  console.log("getAll called:", getAllFeedbacks());

  console.log("findById called:", getFeedbackById(1));

  console.log(
    "updateOneById called:",
    updateFeedback(0, {
      sender: "Steph Curry",
      message: "Good Trip",
      rating: 3,
    })
  );
  console.log("findById called after item updated:", getFeedbackById(0));

  console.log("deleteOneById called:", deleteFeedback(1));
  console.log("findById called after item deleted:", getFeedbackById(1));
}

FeedBack = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

module.exports = FeedBack;
