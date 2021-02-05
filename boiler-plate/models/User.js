const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');



const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

//index.js에서 save처리하기전 function을 먼저 처리함.(mongoose 함수)
userSchema.pre('save', function( next ){
    var user = this;

    if (user.isModified('password')) {
        //비밀번호를 암호화 시킴.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    //plainPassword: 1234567 암호화된 비밀번호: asdfi1...
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err),
        cb(null, isMatch)
    })
}


userSchema.methods.generateToken = function(cb) {

    var user = this;
    //jsonwebtoken을 이용해 token 생성.
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    // user._id + 'secretToken' -> token.
    // token을 'secretToken' 이용해서 user._id 확인 가능.

    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err)
        cb(null, user)
    })

}   

//Schema를 moddel에 담아서 사용.
const User = mongoose.model('User', userSchema)

//다른 파일에서도 사용 가능하게 함.
module.exports = { User }