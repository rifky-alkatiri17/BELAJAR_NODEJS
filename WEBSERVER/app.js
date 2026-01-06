const http = require('http');
const fs = require('fs');
// console.log(http)

const renderFile = (path, obj)=>{
	fs.readFile(path, (err,hasil)=>{
			if(err){
				obj.writeHead(404);
				obj.write('File Not Found...')
			}else{
				obj.write(hasil)
			}

			obj.end();
		});
}

//buat server
const server = http.createServer((req,res)=>{
	console.log(req.url);	
	res.writeHead(200,{
		'Content-Type':'text/html'
	});

	switch(req.url){
		case '/tes':
		// res.write('<h1 style="color:red">TEST...</h1>');
		renderFile('index3.html', res);
		break;

		case '/about':
		// res.write('<h1 style="color:red">ABOUT...</h1>');
		renderFile('index2.html', res);	
		break;

		default:
		// res.write('<h1 style="color:red">Hello World...</h1>');
		renderFile('index1.html', res);
		break;
	}
	
	
});

//jalankan server
server.listen(3000, ()=>{
	console.log('Server Aktif di port 3000...')
})

