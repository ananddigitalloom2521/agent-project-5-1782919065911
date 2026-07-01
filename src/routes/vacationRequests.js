const express = require('express');
const router = express.Router();
const VacationRequest = require('../models/VacationRequest');
router.get('/', async (req, res) => {
  const vacationRequests = await VacationRequest.find();
  res.json(vacationRequests);
});
router.post('/', async (req, res) => {
  const vacationRequest = new VacationRequest(req.body);
  await vacationRequest.save();
  res.json(vacationRequest);
});
router.put('/:id', async (req, res) => {
  const vacationRequest = await VacationRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vacationRequest);
});
module.exports = router;