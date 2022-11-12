//Задание 4
const resultNode = document.querySelector('.result');

const btnNode = document.querySelector("#btn");

function useRequest(url){
	return fetch(url)
		.then((response) => {
			console.log("получаем url",response.url);
			return response.url;
		})
		.catch(() => {console.log('error')})

}


async function vInput() {
	let value1 = document.querySelector('#myinput1').value;
	let value2 = document.querySelector('#myinput2').value;
	console.log(value1, value2);
	if (value1>=100 && value1<= 300 && value2>=100 && value2<= 300) {
		let url = `https://picsum.photos/${value1}/${value2}`;
		const requestResult = await useRequest(url);
		resultNode.innerHTML = `<img src=${requestResult} alt= “ ”>`
  		console.log('end');
	} else {
		alert("одно из чисел вне диапазона от 100 до 300");
		resultNode.innerHTML = " ";
	};

}

btnNode.addEventListener("click", vInput);
