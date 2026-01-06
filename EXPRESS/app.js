const express = require('express');
const app = express();

app.get('/tes/:id/:cat', (req,res)=>{
	// res.send('<h1 style="color:red; font-family:Arial,Calibri">Hello World</h1>');
	/*res.json({
		nama: 'Rifki Alkatiri',
		nip: '199105172025051001',
		jabatan: 'PKSTI'
	})*/
	// res.sendFile('./index1.html',{root:__dirname});
	// res.send('Produk id = ' + req.params.id)
	res.json({
		productId: req.params.id,
		categoryId: req.params.cat,
		category: req.query.kategori
	})
});

app.use('', (req,res)=>{
	res.sendFile('./index1.html',{root:__dirname})
});

app.listen(3000, ()=>{
	console.log('Server Berjalan di port 3000...')
})