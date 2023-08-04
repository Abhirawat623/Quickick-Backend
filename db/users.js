const {v4 : uuid} = require("uuid");

const userdata = {

"users":[
    {
        id:uuid(),
        username: "abhishekrawat",
        password:"abhishek123",
        emailid:"abhi123@abc.com"
    }, {
        id:uuid(),
        username: "ankitrawat",
        password:"ankit123",
        emailid:"ankit123@abc.com"
    }
]

};

module.exports = userdata;