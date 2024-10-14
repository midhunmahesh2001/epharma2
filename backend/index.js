const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory product data
let products = [
  { id: 1, name: 'Paracetamol', price: 50, quantity: 10 },
  { id: 2, name: 'Ibuprofen', price: 80, quantity: 5 },
  { id: 3, name: 'Aspirin', price: 70, quantity: 8 },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Get total items
app.get('/api/products/total', (req, res) => {
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
  res.json({ totalItems });
});

// Order a product
app.post('/api/order', (req, res) => {
  const { id, quantity } = req.body;
  const product = products.find((p) => p.id === id);

  if (!product || product.quantity < quantity) {
    return res.status(400).json({ message: 'Insufficient stock' });
  }

  product.quantity -= quantity; // Reduce quantity
  products = products.filter((p) => p.quantity > 0); // Remove if stock is 0

  res.json({ message: 'Order placed', products });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
