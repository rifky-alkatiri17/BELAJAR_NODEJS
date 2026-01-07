const express = require('express');
const app = express();
const port = 7000;
// const ejs = require('ejs');
const fs = require('fs');

app.set('view engine', 'ejs');

app.get('/about', (req,res)=>{
	res.send('ini adalah halaman about...')
});

app.get('/contact', (req,res)=>{
	res.send('ini adalah halaman contact...')
});

app.get('/product/:id', (req,res)=>{
	res.send(`ini adalah halaman product dengan id: ${req.params.id}...`)
});

app.get('/', (req,res)=>{
	// res.sendFile('index.html',{root:__dirname})
	fs.readFile('./data.json',{encoding:'utf-8'}, (err,result)=>{
		res.render('index', {result: JSON.parse(result)});
		console.log(result)
	});
});

app.use('', (req,res)=>{
	// res.sendFile('404.html',{root:__dirname})
	res.render('404')
})

app.listen(port,()=>{
	console.log(`Server Berjalan di Port ${port}`)
})

