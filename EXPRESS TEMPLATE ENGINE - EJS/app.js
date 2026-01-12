const express = require('express'); //npm
const app = express(); 
const port = 7000;
// const ejs = require('ejs');
const fs = require('fs'); //core
const expressLayouts = require('express-ejs-layouts'); //npm
const {loadData, findData} = require('./utils/functions.js'); //user-defined
const { title } = require('process');

// file ejs relative terhadap folder views
app.set('view engine', 'ejs'); //config
app.use(express.static('public')); //config
app.use(expressLayouts); //config

// middleware
/*app.use('/',(req,res,next)=>{
	res.render('Hello', {
		layout:'layouts/main-layout',
		// title: 'Rifki Alkatiri'
	});
	console.log('midleware1 dijalankan...');	
	console.log('Time : ' + Date())
	next()
});*/

// app.use();

// end middleware

app.get('/about', (req,res)=>{
	// res.send('ini adalah halaman about...')
	res.render('about', {
		layout: 'layouts/main-layout',
		title:'Halaman About'
	})
});

app.get('/contact', (req,res)=>{
	// res.send('ini adalah halaman contact...')
	const data = loadData('./data/data-contacts.json');	
	res.render('contact', {
		layout: 'layouts/main-layout',
		title:'Halaman Contact',
		data
	})
});

app.get('/contact/:nama', (req,res)=>{
	// res.send('ini adalah halaman contact...')
	const data = loadData('./data/data-contacts.json');
	const result = findData(data, req.params.nama);	
	res.render('contact', {
		layout: 'layouts/main-layout',
		title:'Halaman Contact',
		data: result
	})
});

/*app.use('/details/:nama', (req,res,next)=>{
	const data = loadData('./data/data-contacts.json');
	const result = findData(data, req.params.nama);
	if(!result){
		return res.status(404).send('Data tidak ditemukan');
	}else{
		console.log(result)
	}
	next()
});*/

app.get('/details/:nama', (req,res)=>{
	const data = loadData('./data/data-contacts.json');
	const result = findData(data, req.params.nama);
	console.log(result);
	res.render('details',{
		layout:'layouts/main-layout',
		title: 'Halaman Details',
		data: result
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

app.use('/', (req,res)=>{
	// res.sendFile('404.html',{root:__dirname})
	res.render('404', {
		layout: 'layouts/main-layout',
		title:'Page Not Found'
	})
})



app.listen(port,()=>{
	console.log(`Server Berjalan di Port ${port}`)
})

