const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/data.json');
// 1. Baca file dan parsing
const file = fs.readFileSync(filePath, 'utf-8');
const data = JSON.parse(file);


// ================ FUNCTIONS =========================
function readData(){
  return data
};


function editData(id,dataBaru) {  
  // 2. Cari index berdasarkan id
  const index = data.findIndex(item => item.id === id);

  console.log(index);

  if (index === -1) {
    console.log('Data tidak ditemukan');
    return;
  }

  

  // 3. Update data (merge)
  /*ket: 
  1. ini menggunakan spread operator
  2. spread operator mengcopy obj
  3. ↓↓↓↓↓↓↓↓↓↓↓
  */
  data[index] = dataBaru;

  // 4. Simpan kembali
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log('Data berhasil diupdate');
}

module.exports = {readData, editData}