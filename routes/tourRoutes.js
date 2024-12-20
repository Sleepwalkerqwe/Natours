const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back bad request (400)
// Add it to the post handler stack

router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router.route('/').get(tourController.getAllTours).post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour);

module.exports = router;
