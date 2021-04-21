const { Router } = require("express");

const routes = Router();
const todos = [];


routes.get('/listen/todo', (request, response) => {
    return response.status(200).json(todos);
})
routes.post("/todo", (request, response) => {
  const { title, description } = request.body;
  if(title === "" || description === "") {
      return response.status(400).json({
          err: "Title or description is empy"
      })
   }
   const todo = {
       id: 1,
       title,
       description
   }
   todos.push(todo);
   return response.status(200).json(todo);

});
routes.get("/", (request, response) => {
  return response.status(200).json({
    ok: true,
  });
});

module.exports = routes;
