const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userFields : {
        username : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        roles :{
            type : [String]
        }
    },
    profileFields : {
        firstName : {
            type : String
        },
        lastName : {
            type : String
        },
        age : {
            type : Number
        }
    },
    activityTracking :{
        lastLogin : {
            type : Date
        }
    }
});

const login = mongoose.model("login",userSchema);
module.exports = login;