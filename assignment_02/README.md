# 📦 Product Management REST API using Node.js & Express

📌 **Project Description**
The Product Management API is a RESTful API built using Node.js and Express.js. It manages product data stored in an in-memory JSON array.

This API allows users to:
- Retrieve all products
- Retrieve product by ID
- Filter products by category
- Add new products
- Replace entire product details
- Update specific fields like stock and price

*No database is used. Data is stored in a local array inside the application.*

---

## 🚀 Tech Stack
- **Node.js**
- **Express.js**
- **JavaScript**
- **Postman** (for API testing)

---

## 📂 Project Setup

**1️⃣ Clone the Repository**
```bash
git clone <repository_url>
cd product-api
```

**2️⃣ Install Dependencies**
```bash
npm install
```

**3️⃣ Run the Server**
```bash
node index.js
```
*Server will start on: `http://localhost:3000`*

---

## 📌 API Endpoints

**Base URL**: `http://localhost:3000`

### 🔹 1. GET `/`
- **Description**: Check if server is running.
- **Response**: `Express server is running`
- **Status Code**: `200 OK`

### 🔹 2. GET `/products`
- **Description**: Retrieve all products.
- **Response**: Returns array of product objects.
- **Status Code**: `200 OK`

### 🔹 3. GET `/products/:id`
- **Description**: Retrieve product by ID.
- **Example**: `GET /products/1`
- **Success Response**: 
  ```json
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  }
  ```
- **Status Code**: `200 OK`
- **Error Response**: `{ "message": "Product not found" }`
- **Status Code**: `404 Not Found`

### 🔹 4. GET `/products/category/:categoryName`
- **Description**: Retrieve products by category.
- **Example**: `GET /products/category/Electronics`
- **Status Code**: `200 OK`

### 🔹 5. POST `/products`
- **Description**: Add a new product.
- **Request Body**: 
  ```json
  {
    "name": "Keyboard",
    "category": "Electronics",
    "price": 1200,
    "stock": 15,
    "rating": 4.6
  }
  ```
- **Response**: Returns newly created product with generated ID.
- **Status Code**: `201 Created`

### 🔹 6. PUT `/products/:id`
- **Description**: Replace entire product (except ID).
- **Example**: `PUT /products/1`
- **Request Body**: 
  ```json
  {
    "name": "Gaming Mouse",
    "category": "Electronics",
    "price": 1500,
    "stock": 20,
    "rating": 4.7
  }
  ```
- **Status Code**: `200 OK`
- **Error Response**: `404 Not Found` if product does not exist.

### 🔹 7. PUT `/products/:id/stock`
- **Description**: Update only stock value.
- **Request Body**:
  ```json
  {
    "stock": 100
  }
  ```
- **Status Code**: `200 OK`

### 🔹 8. PUT `/products/:id/price`
- **Description**: Update only price value.
- **Request Body**:
  ```json
  {
    "price": 2000
  }
  ```
- **Status Code**: `200 OK`

---

## 📊 HTTP Status Codes Used
| Status Code | Meaning |
| :--- | :--- |
| **200 OK** | Request successful |
| **201 Created** | New resource created |
| **404 Not Found** | Resource does not exist |

---

## 🧠 Concepts Covered
- REST API Design
- Route Parameters (`req.params`)
- Request Body Handling (`req.body`)
- JSON Middleware (`express.json()`)
- HTTP Status Codes
- PUT vs POST difference
- In-memory data storage

---

## 👨‍💻 Author
**Hemang Singh**
Node.js Backend Developer (Beginner Level Project)

- 🔗 **Live API URL**: [https://assignment-nodejs-1.onrender.com](https://assignment-nodejs-1.onrender.com)
- 🔗 **Postman Documentation**: [https://documenter.getpostman.com/view/50840788/2sBXcGDyzw](https://documenter.getpostman.com/view/50840788/2sBXcGDyzw)
