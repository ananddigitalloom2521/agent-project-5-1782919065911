const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const vacationRequestsRouter = require('./vacationRequests');
router.use('/users', usersRouter);
router.use('/vacation-requests', vacationRequestsRouter);
module.exports = router;