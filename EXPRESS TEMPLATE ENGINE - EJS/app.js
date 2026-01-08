const express = require('express');
const app = express();
const port = 7000;
// const ejs = require('ejs');
const fs = require('fs');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/about', (req,res)=>{
	// res.send('ini adalah halaman about...')
	res.render('about', {title:'Halaman About'})
});

app.get('/contact', (req,res)=>{
	// res.send('ini adalah halaman contact...')
	res.render('contact', {title:'Halaman Contact'})
});

app.get('/product/:id', (req,res)=>{
	res.send(`ini adalah halaman product dengan id: ${req.params.id}...`)
});

app.get('/', (req,res)=>{
	// res.sendFile('index.html',{root:__dirname})
	fs.readFile('./data.json',{encoding:'utf-8'}, (err,result)=>{
		res.render('index', {title:'Halaman Index', result: JSON.parse(result)});
		// console.log(result)
	});
});

app.use('', (req,res)=>{
	// res.sendFile('404.html',{root:__dirname})
	res.render('404', {title:'Page Not Found'})
})



app.listen(port,()=>{
	console.log(`Server Berjalan di Port ${port}`)
})

