import readline from 'readline'; //core modules
import fs from 'fs'; //core

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/*rl.question('Masukkan Nama:', nama=>{
	rl.question('Masukkan No. HP:', nohp=>{
		const newContact = {nama, nohp};
		const fileBuffer = fs.readFileSync('contact.json','utf-8');
		const file = JSON.parse(fileBuffer);
		file.push(newContact);
		fs.writeFileSync('contact.json', JSON.stringify(file));
		console.log(file);
		let lastIndex = file.length - 1;
		console.log(`terima kasih ${file[lastIndex].nama} telah menginputkan ${file[lastIndex].nohp}`);
		rl.close();
	});
});*/

console.log(process.argv);
rl.close()