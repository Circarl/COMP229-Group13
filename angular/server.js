const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Set up API routes
app.use(express.json()); // Parse JSON request bodies

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // Check if user already exists
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ error: 'Server error.' });
    }

    if (existingUser) {
      return res.status(409).json({ error: 'User already exists.' });
    }

    // Create a new user and save to the database
    const newUser = new User({ email, password });
    newUser.save((err, savedUser) => {
      if (err) {
        return res.status(500).json({ error: 'Server error.' });
      }
      res.status(201).json(savedUser);
    });
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
