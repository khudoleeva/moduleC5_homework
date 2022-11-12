//Задание 3
const resultNode = document.querySelector('.result');

const btnNode = document.querySelector("#btn");

function funRequest(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();
	xhr.onprogress = function(event) {
		alert(`Загружено ${event.loaded} из ${event.total}`);
	};
	xhr.onload = function() {
	    if (xhr.status != 200) {
	      console.log('Статус ответа: ', xhr.status);
	    } else {
	      const result = JSON.parse(xhr.response);
	      console.log(`Загружено: ${xhr.status} ${xhr.response}`);
	      if (callback) {
	        callback(result);
	      }
	    }
	  };
	xhr.onerror = function() {
	    console.log('Ошибка! Статус ответа: ', xhr.status);
	};

}

function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
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
  
    
  resultNode.innerHTML = cards;
}

function vInput() {
	let value = document.querySelector('#myinput').value;
	console.log(value);
	if (value>=1 && value<= 10) {
		let url = new URL('https://picsum.photos/v2/list/');
		url.searchParams.set('limit', value);
		funRequest(url, displayResult);
	} else {
		alert("число вне диапазона от 1 до 10");
		resultNode.innerHTML = " ";
	};
}

btnNode.addEventListener("click", vInput);
	