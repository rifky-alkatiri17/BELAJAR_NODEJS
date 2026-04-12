const fs = require('fs'); //core modules
const express = require('express'); //npm
const app = express();
const port = 7000;
const expressLayouts = require('express-ejs-layouts');
const {readData, editData} = require('./utility/functions.js');

app.set('view engine', 'ejs'); //config

app.use(express.static('public')); //built-in middleware
app.use(expressLayouts); //third party middleware
app.use(express.urlencoded({ extended: true })); //built-in middleware

app.get('/', (req, res) => {
    res.render('home', {
        layout: 'layouts/main-layout',
        title: 'Halaman Home'
    })
});

app.get('/pegawai', (req, res) => {
    const listPegawai = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    res.send(listPegawai)
});

app.get('/pegawai/:id', (req, res) => {
    const id = req.params.id;
    const listPegawai = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    let dataPegawai = listPegawai.filter(item => item.id == id);
    res.send(dataPegawai)
})

app.get('/pegawai/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const listPegawai = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    let newListPegawai = listPegawai.filter(item => item.id !== id);
    fs.writeFileSync('data/data.json', JSON.stringify(newListPegawai));
    /*res.json({
    status: 'success',
        message: `Pegawai dengan id ${id} berhasil dihapus`
    })*/
    res.send(newListPegawai)
})

app.get('/pegawai/ubah/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const listPegawai = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    let newListPegawai = listPegawai.filter(item => item.id === id);
    // fs.writeFileSync('data/data.json', JSON.stringify(newListPegawai));
    if (newListPegawai.length === 0) {
        // return res.status(404).send('Data pegawai tidak ditemukan');
        res.send(newListPegawai.length)
    }; 

    res.render('ubah',{
    	title:'Form Ubah Data',
    	layout: 'layouts/main-layout',
    	pegawai: newListPegawai[0]
    })
});

app.post('/pegawai/ubah/:id', (req,res)=>{
	const id = parseInt(req.params.id);
    const listPegawai = JSON.parse(fs.readFileSync('data/data.json', 'utf-8'));
    let newListPegawai = listPegawai.filter(item => item.id === id);
    // console.log(req.body)
    const {idi,nama,nip,jabatan,instansi} = req.body;
    res.send(req.body);
    const objBaru = {
        "nama": "Erik Nara Kaha",
        "jabatan" : "Operator"
    };
    editData(id,req.body)
    // nnti ubah datanya berdasarkan index lalu ditulis kembali di data.json
});

app.get('/coba/:id', (req,res)=>{
    const id = req.params.id;
    let dataLama = readData();
    let dataBaru = {
        "id" : "id baru",
        "nama" : "Nama Baru",
        "nip" : "NIP Baru",
        "jabatan" : "Jabatan baru",
        "instansi" : "Instansi Baru"
    };
    // dataLama[2] = dataBaru;
    res.send(dataLama.findIndex(el=>el.id == id))
});

app.use('/', (req, res) => {
    res.sendFile('views/blank.html', { root: __dirname })
});

app.listen(port, () => {
    console.log('App berjalan di port ' + port)
});