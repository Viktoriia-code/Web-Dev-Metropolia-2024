const express = require('express');
const connectDB = require("./config/db");
const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());

connectDB();

// Use the userRouter for all /users routes
app.use('/api/users', userRouter);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});