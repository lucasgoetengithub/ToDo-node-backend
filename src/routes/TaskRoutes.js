const express = require('express');
const router = express.router();

const TaskController = require('../controller/TaskController');

router.post('/', TaskController.create);

module.exports = router;