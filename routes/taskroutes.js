const express = require('express');
const router = express.Router();
const {createTask} = require('../controllers/taskcontrollers');     
router.post('/createtask',createTask);
module.exports = router;