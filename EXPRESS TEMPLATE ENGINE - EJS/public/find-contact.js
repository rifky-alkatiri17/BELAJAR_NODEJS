const cari = document.querySelector('#cari');
// const tbody = document.querySelector('tbody');

cari.addEventListener('keyup', (e) => {
  	const keyword = e.target.value;
  	if (!keyword) return;

	const ambilData = async () =>{
		let respon = await fetch('/contact/' + encodeURIComponent(keyword) );
	  	let hasil = await respon.json(); 
	  	// return hasil
	  	console.log(hasil)
	}

	ambilData()

});