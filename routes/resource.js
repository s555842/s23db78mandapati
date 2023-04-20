var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Student_controller = require('../controllers/student');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/student', Student_controller.Student_create_post);
// DELETE request to delete Costume.
router.delete('/student/:id', Student_controller.Student_delete);
// PUT request to update Costume.
router.put('/student/:id', Student_controller.Student_update_put);
// GET request for one Costume.
router.get('/student/:id', Student_controller.Student_detail);
// GET request for list of all Costume items.
router.get('/student', Student_controller.Student_list);
module.exports = router;
