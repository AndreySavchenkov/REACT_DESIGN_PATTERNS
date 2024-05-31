const express = require("express");

const app = express();

app.use(express.json());

let currentUser = {
  name: "Andrei Sauchankau",
  age: 34,
  country: "Poland",
  books: ["First Book"],
};

let users = [
  {
    name: "Andrei Sauchankau",
    age: 34,
    country: "Poland",
    books: ["First Book"],
  },
  {
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
  },
  {
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
  {
    name: "Grimanda Ngozi Adichie",
    age: 43,
    country: "Nigeria",
    books: ["Half of a Yellow Sun", "Americanah"],
  },
];

let books = [
  {
    name: "To kill a Mockingbird",
    pages: 281,
    title: "Harper Lee",
    price: 12.99,
  },
  {
    name: "To Catcher in teh Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
    name: "To Little Prince",
    pages: 85,
    title: "Antone de Saint-Exupéry",
    price: 7.99,
  },
];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;

  users = users.map((user) => (user.id === id ? editedUser : user));

  res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
