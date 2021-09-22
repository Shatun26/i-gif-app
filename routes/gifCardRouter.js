const Router = require('express');
const router = new Router();
const GifCardController = require ('../controllers/gifCardController')
router.post('/', GifCardController.create);
router.get('/',GifCardController.getAll);
router.delete('/:id', GifCardController.delete);

module.exports = router;
