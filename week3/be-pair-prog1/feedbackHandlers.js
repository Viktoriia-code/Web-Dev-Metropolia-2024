const { json } = require("express");
const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAllFeedbacks();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body;

  const newFeedback = Feedback.createFeedback(sender, message, rating);

  if (newFeedback) {
    res.json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create the feedback." });
  }
};

const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = getFeedbackById(feedbackId);

  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({ message: "feedback not found" });
  }
};

const updateFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const numericId = Number(feedbackId);

  const { sender, message, rating } = req.body;

  const upDatedFeedback = Feedback.updateFeedback(numericId, {
    sender,
    message,
    rating,
  });

  if (upDatedFeedback) {
    res.json(upDatedFeedback);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

const deleteFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const isDeleted = Feedback.deleteFeedback(feedbackId);

  if (isDeleted) {
    res.json({ message: "Feedback deleted succesfully" });
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
