const express = require("express");

const app = express();

app.use(express.json()); //This middleware allows your server to read JSON data from request body.


const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 25,
        rating: 4.3
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Footwear",
        price: 2499,
        stock: 40,
        rating: 4.5
    },
    {
        id: 3,
        name: "Laptop Stand",
        category: "Accessories",
        price: 999,
        stock: 30,
        rating: 4.2
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 12,
        rating: 4.4
    },
    {
        id: 5,
        name: "Backpack",
        category: "Fashion",
        price: 1599,
        stock: 50,
        rating: 4.1
    }
];



app.get("/", (req, res) => {
    res.send("Express server is running");
});



//1. GET /products....

app.get("/products", (req, res) => {
    res.status(200).json(products);
});

//2. GET /products/:id

app.get("/products/:id", (req, res) => {
    const productId = Number(req.params.id);
    const user = products.find(u => u.id === productId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


// GET /products/category/:categoryName

app.get("/products/category/:categoryName", (req, res) => {
    const categoryName = String(req.params.categoryName);
    const user = products.filter(u => u.category === categoryName);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


// POST – add new products
app.post("/products", (req, res) => {
  const newProducts = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price:req.body.price,
    stock:req.body.stock,
    rating:req.body.rating
  };

  products.push(newProducts);
  res.status(201).json(newProducts);
});


// PUT – Replace entire product
app.put("/products/:id", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }


  products[index] = {
    id: products[index].id,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  res.status(200).json(products[index]);
});


// PUT – Update only stock
app.put("/products/:id/stock", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.stock = req.body.stock;

  res.status(200).json(product);
});


// PUT – Update only price
app.put("/products/:id/price", (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.price = req.body.price;

  res.status(200).json(product);
});



app.listen(3000, () => {
    console.log("Server started on port 3000");
});