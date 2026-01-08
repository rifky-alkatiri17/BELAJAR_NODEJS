const express = require('express');
const app = express();
const port = 7000;
// const ejs = require('ejs');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');
// file ejs relative terhadap folder views

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);

app.get('/about', (req,res)=>{
	// res.send('ini adalah halaman about...')
	res.render('about', {
		layout: 'layouts/main-layout',
		title:'Halaman About'
	})
});

app.get('/contact', (req,res)=>{
	// res.send('ini adalah halaman contact...')
	res.render('contact', {
		layout: 'layouts/main-layout',
		title:'Halaman Contact'
	})
});

app.get('/product/:id', (req,res)=>{
	res.send(`ini adalah halaman product dengan id: ${req.params.id}...`)
});

app.get('/', (req,res)=>{
	// res.sendFile('index.html',{root:__dirname})
	fs.readFile('./data.json',{encoding:'utf-8'}, (err,result)=>{
		res.render('index', {
			layout: 'layouts/main-layout',
			title:'Halaman Index', 
			result: JSON.parse(result)
		});
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

