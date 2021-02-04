const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { User } = require("./models/User")

const config = require('./config/key')

//application/x-www-form-urlencoded -> 이렇게 된 데이터를 분석해서 가져올 수 있게함.
app.use(bodyParser.urlencoded({extended: true}));

//application/json -> 이렇게 된 데이터를 분석해서 가져올 수 있음.
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World!'))

app.post('/register', (req, res) => {

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  });

  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
