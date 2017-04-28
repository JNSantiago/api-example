module.exports = function(app)
{
	var ProductsController = app.controllers.products_controller

	app.get('/products', ProductsController.index)
	app.post('/products', ProductsController.create)
	app.get('/product/:id', ProductsController.show)
	app.put('/product/:id', ProductsController.update)
	app.delete('/product/:id', ProductsController.destroy)
}