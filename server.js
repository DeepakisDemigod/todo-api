const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.json());

app.get('/docs', (req, res) => {
  res.render('index')
})

let todoItems = []

app.get('/api/v1/', (req, res) => {
  res.send({ "message": "welcome to todo api !!!" })
})

app.get('/api/v1/todos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(todoItems)
});


app.post('/api/v1/todos/new', (req, res) => {
  const { title } = req.body;
  const newTodoItem = { id: todoItems.length + 1, title }
  todoItems.push(newTodoItem)
  res.status(201).json(newTodoItem)
});


app.put('/api/v1/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todoItem = todoItems.find(item => item.id === parseInt(id));
  if (!todoItem) {
    res.status(404).send({
      "message": "todo item not found",
      "status": 404
    });
  } else {
    todoItem.title = title;
    res.json(todoItem);
  }
});


app.delete('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todoItems.findIndex(item => item.id === id);
  if (index === -1) return res.status(404).send('To-do item not found');
  todoItems.splice(index, 1);
  res.send({
    "message": "todo item deleted successfully",
    "status": 200
  });
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000');
});
