var student = require('../models/student');
// List of all Costumes
exports.student_list = function(req, res) {
 res.send('NOT IMPLEMENTED: student list');
};
// for a specific Costume.
exports.student_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: student detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.student_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: student create POST');
};
// Handle Costume delete form on DELETE.
exports.student_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: student delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.student_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: student update PUT' + req.params.id);
};

// List of all student
exports.student_list = async function(req, res) {
    try{
    thestudent = await student.find();
    res.send(thestudent);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.student_view_all_Page = async function(req, res) {
    try{
    thestudent = await student.find();
    res.render('student', { title: 'student Search Results', results: thestudent });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.student_create_post = async function(req, res) {
    console.log(req.body)
    let document = new student();
    document.Stu_Name = req.body.Stu_Name;
    document.Stu_Age = req.body.Stu_Age;
    document.Mail_Id = req.body.Mail_Id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };