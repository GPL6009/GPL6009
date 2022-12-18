const database = require('../controller/database');

exports.add_user = function (req, res) {
    //console.log('Form data:',req.body);

    var first_name = req.body.first_name;

    var last_name = req.body.last_name;

    var number = req.body.number;

    var email = req.body.email;

    var gender = req.body.gender;

    var address = req.body.address;

    var password = req.body.password;

    var cpassword = req.body.cpassword;

    var myimage = req.body.myimage;

    var query = `
    INSERT INTO users 
    (first_name, last_name, number, email, gender, address, password, cpassword, profile) 
    VALUES ("${first_name}", "${last_name}", "${number}", "${email}", "${gender}", "${address}", "${password}", "${cpassword}", "${myimage}")
    `;

    database.query(query, function(error, data)	{
        if(data<0){
            console.log('no data');
        }
    if(error){

        throw error;
    }
	else
	{
		console.log('inserted');
	}
    res.send(console.log('wow you done..!'));
    });








    
}
