const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 7000;

const data = [{
	"nama": "Rifki Alkatiri",
	"nip": "199105172025051001",
	"jabatan": "PKSTI",
	"intansi/opd": "BKPPD Kota Kupang"
}]



app.set('view engine', 'ejs');
app.use(express.static('public')); //built-in middleware
app.use(expressLayouts); //third party middleware
app.use(express.urlencoded( {extended:true} )); //built-in middleware


app.get('/', (req,res)=>{
	// res.send('<h1>Ini Halaman Beranda....</h1>')
	res.render('tabel', {
		layout: 'layouts/main-layout',
		title: 'Halaman Beranda',
	})
});

// ini di-request oleh client menggunakan fetch
app.get('/data', (req,res)=>{
	res.send(data)
})

app.listen(port, ()=>{
	console.log(`Server Berjalan di http://127.0.0.1:${port}`)
})