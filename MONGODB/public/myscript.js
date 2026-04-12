const getData = async ()=>{
	const data = await fetch('/data');
	const result = await data.json();

	console.log(result[0])
};

getData()