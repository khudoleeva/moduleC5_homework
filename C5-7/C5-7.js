const resultNode = document.querySelector('.result');

const btnNode = document.querySelector("#btn");

resultNode.innerHTML = localStorage.getItem("keyCards");
function useRequest(url){
	return fetch(url)
		.then((response) => {return response.json();})
		.catch(() => {console.log('error')})

}

async function vInput() {
	let value1 = document.querySelector('#myinput1').value;
	let value2 = document.querySelector('#myinput2').value;
	console.log(value1, value2);
	if (value1>=1 && value1<= 10 && value2>=1 && value2<= 10) {
		let url = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
		const requestResult = await useRequest(url);
		console.log(requestResult);
		if (requestResult) {
			 let cards = '';
  
 			 requestResult.forEach(item => {
	   			 const cardBlock = `
	     		 <div class="card">
	        		<img
	         			 src="${item.download_url}"
	          			 class="card-image"
	        		/>
	       			<p>${item.author}</p>
	   	  		 </div>
	  		    `;
	  		    cards = cards + cardBlock;
 		 	});
  			localStorage.setItem("keyCards",cards);
  			resultNode.innerHTML = cards;
		}	

  		console.log('end');
	} else if ((value1<1 || value1>10 || isNaN(value1)) && value2>=1 && value2<= 10){
		resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10";
	} else if ((value2<1 || value2>10 || isNaN(value2)) && value1>=1 && value1<= 10){
		resultNode.innerHTML = "Лимит вне диапазона от 1 до 10";
	} else if ((value1<1 || value1>10 || isNaN(value1)) && (value2<1 || value2>10 || isNaN(value2))){
		resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
	}
}

btnNode.addEventListener("click", vInput);