const express = require('express');
const bodyParser = require('body-parser');

const locationRoutes = require('./routes/location');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST, GET');
    res.setHeader('Access-Control-Allow-Methods','POST, GET, OPTIONS');
    next();
});//응답을 보내는 라우팅에 가기 전에 헤더를 추가
//*입력하여 요청을 보내고자 하는 모든 서버를 허용
app.use(locationRoutes);

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.use((req, res, next) => {
//   const userName = req.body.username || 'Unknown User';
//   res.render('index', {
//     user: userName
//   });
// });

app.listen(3000);
