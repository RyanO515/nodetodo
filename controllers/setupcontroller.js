var Todos = require("../models/todoModel");

module.exports = function (app) {

	app.get('/api/setUpTodos', function (req, res) {

		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Feed dog',
				isDone: false,
				hasAttachemnt: false
			},
			{
				username: 'test',
				todo: 'Larn Node',
				isDone: false,
				hasAttachemnt: false
			}
		];

		Todos.create(starterTodos, function(err, results) {
			res.send(results);
		});
	});
}