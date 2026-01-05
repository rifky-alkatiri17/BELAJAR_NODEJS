/*const fs = require('fs');
//fs.writeFileSync('data.txt', 'Hello World');
fs.readFile('data.txt','utf-8', (err, data) => {
	if(err) throw err;
	else console.log(data);
}) //async */

/*const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Masukkan Nama Anda:', nama =>{
	rl.question('Masukkan No HP Anda:', nohp =>{
		console.log(`Terima kasih ${nama}, Anda Telah Menginputkan ${nohp}`);
		rl.close();
	})
})*/

/*const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const fs = require('fs');

rl.question('Masukkan Nama Anda:', nama =>{
	rl.question('Masukkan No HP Anda:', nohp =>{
		console.log(`Terima kasih ${nama}, Anda Telah Menginputkan ${nohp}`);
		fs.writeFile('data2.txt', `Terima kasih ${nama}, Anda Telah Menginputkan ${nohp}`, err => console.log(err));
		rl.close();
	})
})*/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const fs = require('fs');

rl.question('Masukkan Nama Anda:', nama =>{
	rl.question('Masukkan No HP Anda:', nohp =>{
		//console.log(`Terima kasih ${nama}, Anda Telah Menginputkan ${nohp}`);
		const dataContact = {nama:nama,nohp:nohp}
		const file = fs.readFileSync('contact.json','utf-8'); //masih dalam bentuk string
		const myContact = JSON.parse(file);	//data diparse ke dalam bentuk array/json
		//console.log(`datanya: ${myContact}, tipenya: ${typeof(myContact)}`); //cek
		myContact.push(dataContact); // push/add 
		//console.table(`datanya: ${myContact}, tipenya: ${typeof(myContact)}`); //cek lagi
		fs.writeFile('contact.json', JSON.stringify(myContact), err => console.log(err)); //tulis
		rl.close();
	})
})






