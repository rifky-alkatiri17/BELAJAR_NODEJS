const ExcelJS = require('exceljs');

const autoWidth = (worksheet) => {
  worksheet.columns.forEach((column) => {
    let maxLength = 10; // minimal lebar

    column.eachCell({ includeEmpty: true }, (cell) => {
      const cellValue = cell.value ? cell.value.toString() : '';
      maxLength = Math.max(maxLength, cellValue.length);
    });

    column.width = maxLength + 2; // padding biar tidak mepet
  });
};


const exportExcelRapi = async (data) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Data ASN');

  // Definisi kolom (HEADER + WIDTH + KEY)
  sheet.columns = [
    { header: 'No', key: 'No', width: 6 },
    { header: 'Nama', key: 'Nama', width: 30 },
    { header: 'NIP', key: 'NIP', width: 22 },
    { header: 'Jabatan', key: 'Jabatan', width: 25 },
    { header: 'Instansi', key: 'Instansi', width: 35 }
  ];

  // Tambah data
  data.forEach(row => {
    sheet.addRow(row);
    // AUTO WIDTH KOLOM
	autoWidth(sheet);
  });

  // ===== FORMAT HEADER =====
  const headerRow = sheet.getRow(1);
  headerRow.font = { bold: true };
  headerRow.alignment = { vertical: 'middle', horizontal: 'center' };

  // Background header (optional)
  headerRow.eachCell(cell => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFD9D9D9' }
    };
  });

  // ===== BORDER SEMUA CELL =====
  sheet.eachRow((row) => {
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
  });

  // ===== ALIGNMENT KOLOM TERTENTU =====
  sheet.getColumn('No').alignment = { horizontal: 'center' };
  sheet.getColumn('NIP').alignment = { horizontal: 'center' };

  // ===== FREEZE HEADER =====
  sheet.views = [{ state: 'frozen', ySplit: 1 }];

  // Simpan file
  await workbook.xlsx.writeFile('output_excel_rapi.xlsx');



  console.log('Excel rapi berhasil dibuat!');
};

// module.exports = exportExcelRapi;

const myData = [
	{
		"No" : 1,
		"Nama" : "Rifki Alkatiri",
		"NIP" : "199105172025051001",
		"Jabatan" : "Penata Kelola Sistem dan Teknologi Informasi",
		"Instansi" : "Pemerintah Kota Kupang"
	}
];


exportExcelRapi(myData)



