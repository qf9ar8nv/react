const express = require('express');
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const config = require('./config/key');

//application/x-www-form-urlencoded -> 이렇게 된 데이터를 분석해서 가져올 수 있게함.
app.use('boiler-plate', bodyParser.urlencoded({extended: true}));

//application/json -> 이렇게 된 데이터를 분석해서 가져올 수 있음.
app.use('boiler-plate', bodyParser.json());
app.use('boiler-plate', cookieParser)

const mongoose = require('mongoose');


mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/hello', (req, res) => res.send('hello word!'))

app.post('/api/users/register', (req, res) => {

  const user = new User(req.body)
  console.log('11', user, '33')

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  });
})



app.post('/api/users/login', (req, res) => {

  //요청된 이메일을 찾아봄
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user){
      return res.json({
        loginSucces: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }
  })

  //요청된 이메일이 맞는 비밀번호인지 확인
  user.comparePassowrd(req.body.password , (err, isMatch ) => {
    if(!isMatch)
    return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})

  //비번까지 맞다면 토큰 생성
    user.generateToken((err, user) => {
      if(err) return res.status(400).send(err);

      //토큰을 저장한다. 어디에? 쿠키/로컬
      res.cookie("x_auth", user.token)
      .status(200)
      .json({loginSuccess: true, userId: user._id})
    })
  })
})


app.get('/api/users/auth', auth, (req, res) => {

  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  })

})


app.get('/api/users/auth', auth, (req, res) => {

  User.findOneAndUpdate({ _id: req.user._id}, 
    { token: ""},
    (err, user) => {
      if(err) return res.json({ success: false, err});
      return res.status(200).send({
        success: true
      })
    })


})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
