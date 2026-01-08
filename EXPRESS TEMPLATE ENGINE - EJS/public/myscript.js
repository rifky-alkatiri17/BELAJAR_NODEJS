const input = document.querySelector('input');
const isiTabel = document.querySelector('#isiTabel');
const rekam = isiTabel.innerHTML;

input.addEventListener('keyup', (e)=>{
	isiTabel.innerHTML = '';		

	switch(input.value){
		case '':
			isiTabel.innerHTML = rekam;
			break;

		default:
			isiTabel.innerHTML += e.target.value;
			break;
	}
});