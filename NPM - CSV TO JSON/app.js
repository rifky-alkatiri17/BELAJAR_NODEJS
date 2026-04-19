const express = require('express');
const multer = require('multer');
const csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const port = 3000;

//instance
const app = express();

//config
app.use(express.static('public'));
const upload = multer({ dest: 'uploads/' }); //handle file

//route
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
    // res.sendFile(__dirname + '/public/coba.html')
});

app.get('/coba', (req,res)=>{
    // res.sendFile(__dirname + '/public/index.html')
    res.sendFile(__dirname + '/public/coba.html')
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);

    if (!req.file) {
        return res.send('File tidak ditemukan');
    }

    const filePath = req.file.path;

    // pakai delimiter tetap ;
    const json = csvToJson
        .fieldDelimiter(';')
        .getJsonFromCsv(filePath);
    
    // buat nama file unik
    const outputFile = `downloads/result-${Date.now()}.json`;

    // simpan file JSON
    fs.writeFileSync(outputFile, JSON.stringify(json, null, 2));

    // tampilkan + link download
    res.send(`
        <h2>Hasil Convert JSON</h2>
        <pre>${JSON.stringify(json, null, 2)}</pre>
        <a href="/download?file=${outputFile}">Download JSON</a>`
    );
  
});

// route download
app.get('/download', (req, res) => {
  const file = req.query.file;
  res.download(file);
});

//start server
app.listen(port,()=>{
    console.log(`Server berjalan di port http://localhost:${port}`)
})