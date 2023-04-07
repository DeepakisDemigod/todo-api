# **TODO API**
![logo](SAVE_20230325_110245-removebg-preview.png)

## todo-api
this is a restful api made using the nodejs, todo-api is an api that allows you to make requests for features similar to a todo app.

## ***npm dependencies***
1. node `v18.14.1`
2. express `v4.18.2`
---
## ***documentation***

*base-url*
```
https://todoapi.tech/api/v1/
```

`GET` ***{base-url}***/
   - api welcomes you (°•°).
```
{
  "message": "welcome to todo api!!!"
}
```


`GET` ***{base-url}***/todos
   - this endpoint help you retrieve all the created todos and returns you, initially array is empty because there is no todos now so create some.
```
[]
```


`POST` ***{base-url}***/todos/new
  - this endpoint help you create a new todo
```
//Request Body/Raw
{
  "title":"get the milk"
}
```


```
// Response
{
  "id": 1,
  "title": "get the milk"
}
```

`GET` ***{base-url}***/todos
   - after some todos are created you will see your todos.
```
[
  {
     "id": 1,
     "title": "get the milk"
   },
   {
     "id": 2,
     "title": "get the almonds"
    }
]
```

`PUT` ***{base-url}***/todos/:id
   - this endpoint will help you update an already created todo, `:id` is an query parameter you need to put the `id` of the todo.
```

```


`POST` ***{base-url}***/todos/new
   - this endpoint helps you create a new todo
```
{
  "title": "get the milk and almonds"
}
```

`DELETE` ***{base-url}***/todos/:id
   - this 

> you can read the docs [here](https://todoapi.tech/docs/docs.html)
`https://todoapi.tech/api/v1`





Documentation for Javascript
`https://todoapi.tech/docs/docs.html`
