module.exports = function(app)
{
	var Product = app.models.product

	var ProductsController = {
		/* begin of action index*/
		index: function(req, res) 
		{
			var perPage = 3, page = Math.max(0, req.param('page'))
			Product.find()
						 .select({})
						 .limit(perPage)
						 .skip(perPage * page)
						 .sort({
						 		title: 'asc'
						 }).then(result => res.json(result))
		},
		/* end of action index*/

		/* begin of action index*/
		create: function(req, res)
		{
			var product = req.body

			Product.create(product)
						 .then(result => res.json(result))
						 .catch(error => {
						 		res.status(412).json({ msg: error.message })
						 })
		},
		/* end of action index*/

		/* begin of action show*/
		show: function(req, res)
		{
			var id = req.params.id
			Product.findById(id)
						.then(result => res.status(200).json(result))
						.catch(error => {
							res.status(412).json({ msg: error.message });
						})
		},
		/* end of action show*/
		
		/* begin of action update*/
		update: function(req, res)
		{
			var id = req.params.id
			var product = req.body

			Product.findByIdAndUpdate(id, product)
						.then(result => res.status(200).json(product))
						.catch(error => {
							res.status(412).json({ msg: error.message });
						})
		},
		/* end of action update*/
		
		/* begin of action destroy*/
		destroy: function(req, res)
		{
			var id = req.params.id

			Product.findByIdAndRemove(id)
						.then(result => res.status(200).json({ info: "Deletado com sucesso!" }))
						.catch(error => {
							res.status(401).json({ msg: error.message });
						})
		}
		/* begin of action destroy*/
	}

	return ProductsController
}