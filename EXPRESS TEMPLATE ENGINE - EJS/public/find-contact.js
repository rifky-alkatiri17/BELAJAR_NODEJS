const cari = document.querySelector('#cari');
const tbody = document.querySelector('tbody');

const renderTable = (data) => {
  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-danger">
          Data tidak ditemukan...
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = data.map((item, index) => `
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${item.nama}</td>
      <td>${item.nohp}</td>
      <td>${item.email}</td>
      <td>
        <a href="/details/${item.nama}" class="badge text-bg-success">Detail</a>
      </td>
    </tr>
  `).join('');
};

cari.addEventListener('keyup', async (e) => {
  const keyword = e.target.value.trim();
  let url = '';
  if(keyword === ''){
  	url = '/contacts';
  }else{
  	url = '/contact/' + encodeURIComponent(keyword);
  }
  
  const respon = await fetch(url);
  const hasil = await respon.json();

  renderTable(hasil);
});



/*cari.addEventListener('keyup', (e) => {
  	const keyword = e.target.value; 
  	if (!keyword) return; 	

	const ambilData = async () =>{
		let respon = await fetch('/contact/' + encodeURIComponent(keyword) );
	  	let hasil = await respon.json(); 
	  	// console.log(hasil.length);	

	  	if (hasil && hasil.length > 0){ 
		  	tbody.innerHTML = hasil.map((item,index)=>{	  		 
		  		 return `<tr>
				  			<td scope="row">${index+1}</td>
							<td>${item.nama}</td>
							<td>${item.nohp}</td>
							<td>${item.email}</td>
							<td>
							    <a href="/details/${item.nama}" class="badge text-bg-success">Detail</a>
							</td>
				  		</tr>`
		  	}).join('')
	  	}else{
	  		 tbody.innerHTML = `
	  		 	<tr>
			  		<td colspan="5" class="alert alert-danger" role="alert">
					  Data tidak ditemukan...
					</td>
		  		</tr>`
	  	};
	};

	ambilData()

});*/

