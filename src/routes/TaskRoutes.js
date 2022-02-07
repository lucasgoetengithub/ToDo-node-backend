const express = require('express');
const router = express.Router();


const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacadressValidation = require('../middlewares/MacadressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskController.update);
router.get('/:id', TaskController.show);
router.delete('/:id', TaskController.delete);
router.get('/filter/all', MacadressValidation, TaskController.all);
router.put('/:id/:done', TaskController.done);
router.get('/filter/late', MacadressValidation, TaskController.late);
router.get('/filter/today', MacadressValidation, TaskController.today);
router.get('/filter/week', MacadressValidation, TaskController.week);
router.get('/filter/month', MacadressValidation, TaskController.month);
router.get('/filter/year', MacadressValidation, TaskController.year);

module.exports = router;