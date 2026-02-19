const XLSX = require('xlsx');



const readFile = (path) =>{
	// Baca file
	const workbook = XLSX.readFile(path);

	// Ambil nama sheet pertama
	const sheetName = workbook.SheetNames[0];

	// Ambil sheet
	const sheet = workbook.Sheets[sheetName];

	// Convert ke JSON
	const data = XLSX.utils.sheet_to_json(sheet);

	console.log(data);
	return data
};


const editData = (path, dataSelected, obj) =>{

	/*
		path: lokasi file
		dataSelected: berupa nilai rujukan yg dicari (primary key data)
			ex: index, nip, nilai unik
		obj: data baru dalam bentuk obj
	*/ 
	// const data = readFile(path);

	const workbook = XLSX.readFile(path);
	const sheetName = workbook.SheetNames[0];
	const sheet = workbook.Sheets[sheetName];
	// Convert ke JSON
	const data = XLSX.utils.sheet_to_json(sheet);
	
	const index = data.findIndex(row => row.No === Number(dataSelected) );

	if (index === -1) {
	  console.log('Data tidak ditemukan!');
	  return;
	}

	// 4. Edit data
	data[index] = {
	  ...data[index], //ini mencopy obj sebelumnya (spread operator)
	  ...obj //timpa dg data baru (spread operator)
	};

	// 5. Convert balik ke sheet
	const newSheet = XLSX.utils.json_to_sheet(data);

	// 6. Ganti sheet lama
	workbook.Sheets[sheetName] = newSheet;

	// 7. Simpan ulang
	XLSX.writeFile(workbook, 'data_edited/ASN BKPPD Kota Kupang_edit.xlsx');

	console.log('Data berhasil diupdate!');
};


/* ========================
 panggil function 
 ========================== */

// readFile('data/ASN BKPPD Kota Kupang.xlsx')
editData('data/ASN BKPPD Kota Kupang.xlsx', 5, {Nama: 'Budi Santoso',Jabatan: 'Supervisor'});

// addData (blm ada)
// deleteData (blm ada)