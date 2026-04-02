const express = require('express');
//const bodyParser = require('body-parser');

const Date = require('date');

const app = express();
const date=new Date();


app.set('view engine','ejs');
app.set(express.static(__dirname));
app.set(express.urlencoded({extended:true}));


app.get('/',(req,res)=>
{
	const curDate = date.getDate();
	res.render('index',{'datetime':curDate});
});
app.get('/dbtime',(req,res)=>
{
	const curDbDate = date.getDbDate();
	res.render('index_db',{'datetimedb':curDbDate});
});

const PORT = 8080;

app.listen(PORT, ()=>{
	console.log(`Server is listening on ${PORT}`);
})
