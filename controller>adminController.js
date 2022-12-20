const database = require('../controller/database');

exports.add_user = function (req, res) {
    //console.log('Form data:',req.body);

    //console.log('Form data:',req.body.first_name);

    //var first_name = req.body.first_name;

    //var data     = first_name.split(',')[1];
    //console.log('already..!');
        //var eval=data[0].email;
        //console.log(eval);
    //var eval;
    var email = req.body.email;

    var query='SELECT * FROM users WHERE email ="' + email + '"';
    database.query(query, function(err, result){
        if (err) throw err;
        //console.log('already..!');
        //var eval=0;
        //var eval=data[0].email;
        //console.log(eval);
        
        if(result.length===0){
            var first_name = req.body.first_name;

        var last_name = req.body.last_name;

        var number = req.body.number;

        var email = req.body.email;

        var gender = req.body.gender;

        var address = req.body.address;

        var password = req.body.password;

        var cpassword = req.body.cpassword;

        var myimage = "hi";

        //var file = req.file.myimage;

        //var img_name=file.name;

        var query = `
INSERT INTO users 
(first_name, last_name, number, email, gender, address, password, cpassword, profile) 
VALUES ("${first_name}", "${last_name}", "${number}", "${email}", "${gender}", "${address}", "${password}", "${cpassword}", "${myimage}")
`;

        database.query(query, function (error, data) {
            if (data < 0) {
                console.log('no data');
            }
            if (error) {

                throw error;
            }
            else {
                
        return res.send(console.log("inserted"));
            }
            //res.send(console.log('wow you done..!'));
            
        });
        
        }
        else{
            //console.log('This email is already exists..!');
            return res.send(console.log("This email is already exists..!"));
        }
        
    });
    
}
