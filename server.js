const express = require('express');
const app = express();

app.use(express.json());

let todoItems = []

app.get('/', (req, res) => {
  res.send({ "message": "welcome to CRUD api !!!" })
})

app.get('/todos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(todoItems)
});


app.post('/todos/new', (req, res) => {
  const { title } = req.body;
  const newTodoItem = { id: todoItems.length + 1, title }
  todoItems.push(newTodoItem)
  res.status(201).json(newTodoItem)
});


app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todoItem = todoItems.find(item => item.id === parseInt(id));
  if (!todoItem) {
    res.status(404).send('To-do item not found');
  } else {
    todoItem.title = title;
    res.json(todoItem);
  }
});


app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todoItems.findIndex(item => item.id === id);
  if (index === -1) return res.status(404).send('To-do item not found');
  todoItems.splice(index, 1);
  res.send('To-do item deleted successfully');
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000');
});
