var student = require('../models/student');
// List of all Costumes
exports.student_list = function(req, res) {
 res.send('NOT IMPLEMENTED: student list');
};
// for a specific Costume.
exports.student_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await student.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//Handle Costume update form on PUT.
exports.student_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Stu_Name.findById( req.params.id)
 // Do updates of properties
 if(req.body.Stu_Name)
 toUpdate.Stu_Name = req.body.Stu_Name;
 if(req.body.Stu_Age) toUpdate.Stu_Age = req.body.Stu_Age;
 if(req.body.Mail_Id) toUpdate.Mail_Id = req.body.Mail_Id;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
 

exports.student_list = async function(req, res) {
    console.log("detail" + req.params.id)
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