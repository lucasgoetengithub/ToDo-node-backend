const express = require('express');
const router = express.Router();


const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacadressValidation = require('../middlewares/MacadressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskController.update);
router.get('/:id', TaskController.show);
router.get('/filter/all', MacadressValidation, TaskController.all);


module.exports = router;