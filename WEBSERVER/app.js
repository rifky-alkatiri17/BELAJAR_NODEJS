const http = require('http');
const fs = require('fs');
// console.log(http)

const server = http.createServer((req,res)=>{
	console.log(req.url);	
	res.writeHead(200,{
		'Content-Type':'text/html'
	});

	switch(req.url){
		case '/tes':
		res.write('<h1 style="color:red">TEST...</h1>');
		break;

		case '/about':
		res.write('<h1 style="color:red">ABOUT...</h1>');
		break;

		default:
		// res.write('<h1 style="color:red">Hello World...</h1>');
		fs.readFile('./index1.html', (err,hasil)=>{
			if(err){
				res.writeHead(404);
				res.write('File Not Found...')
			}else{
				res.write(hasil)
			}

			res.end();
		});
		break;
	}
	
	
});

server.listen(3000, ()=>{
	console.log('Server Aktif di port 3000...')
})

