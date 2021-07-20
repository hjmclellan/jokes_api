const jokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get('/api/jokes', jokesController.getAll);
    app.get('/api/jokes/:id', jokesController.getOne);
    app.post('/api/jokes/create/new', jokesController.create);
    app.put("/api/jokes/update/:id", jokesController.update);
    app.delete("/api/jokes/delete/:id", jokesController.delete);
}