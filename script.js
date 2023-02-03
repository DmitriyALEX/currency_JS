let xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://api.monobank.ua/bank/currency')
	xhr.onload = function () {
	let currency = JSON.parse(xhr.response);
	let currencyBuyUsd = Number(currency[0].rateBuy);
	let currencySaleUsd = Number(currency[0].rateSell);
	let divMainUsd = document.getElementById('mainUsd');
	let divUsdBuy = document.getElementById('usdBuy');
	let divUsdSale = document.getElementById('usdSale');
	divUsdBuy.innerHTML = "&nbsp" + "&nbsp" + currencyBuyUsd.toFixed(2);
	divUsdSale.innerHTML = "&nbsp" + "&nbsp" + currencySaleUsd.toFixed(2);

	let currencyBuyEur = Number(currency[1].rateBuy);
	let currencySaleEur = Number(currency[1].rateSell);
	let divMainEur = document.getElementById('mainEur');
	let divEurBuy = document.getElementById('eurBuy');
	let divEurSale = document.getElementById('eurSale');
	divEurBuy.innerHTML = "&nbsp" + currencyBuyEur.toFixed(2);
	divEurSale.innerHTML = "&nbsp" + currencySaleEur.toFixed(2);

	inputLeft.oninput = function () {
		 	let input = document.getElementById("inputLeft").value;
		 	let num = Number(inputLeft)   
		    let el = document.getElementById("selectLeft");
			let elRight = document.getElementById("selectRight");
			let value = selectLeft.value;
			let valueRight = selectRight.value;
			
			if (selectLeft.value === selectRight.value) {
				    let num = input    
		    		let inputRight = document.getElementById("inputRight").value = input;
			} 

			else {	
		    	if (selectLeft.value == 'UAH' && selectRight.value == 'USD') {
		    		let num = Number(input) / Number(currency[0].rateBuy)   
		    		let inputRight = document.getElementById("inputRight").value = num.toFixed(2);
		    	}

		    	if (selectLeft.value == 'USD' && selectRight.value == 'UAH') {
		    		let num = Number(input) * Number(currency[0].rateSell)   
		    		let inputRight = document.getElementById("inputRight").value = num.toFixed(2);
		    	}

		    	if (selectLeft.value == 'UAH' && selectRight.value == 'EUR') {
		    		let num = Number(input) / Number(currency[1].rateBuy)   
		    		let inputRight = document.getElementById("inputRight").value = num.toFixed(2);
		    	}

		    	if (selectLeft.value == 'EUR' && selectRight.value == 'UAH') {
		    		let num = Number(input) * Number(currency[1].rateSell)   
		    		let inputRight = document.getElementById("inputRight").value = num.toFixed(2);
		    	}

		    	if (selectLeft.value == 'USD' && selectRight.value == 'EUR') {
		    		let num = Number(input) * Number(currency[0].rateSell) 
		    		let num1 = Number(num) / Number(currency[1].rateBuy) 
		    		let inputRight = document.getElementById("inputRight").value = num1.toFixed(2);
		    		num1.toFixed(2)
		    	}

		    	if (selectLeft.value == 'EUR' && selectRight.value == 'USD') {
		    		let num = Number(input) * Number(currency[1].rateSell)
		    		let num1 = Number(num) / Number(currency[0].rateBuy) 
		    		let inputRight = document.getElementById("inputRight").value = num1.toFixed(2);
		    		num1.toFixed(2)
		    	}
			}
	}	

	inputRight.oninput = function () {
		 	let input = document.getElementById("inputRight").value;
		 	let num = Number(inputRight)   
		    let el = document.getElementById("selectRight");
			let elRight = document.getElementById("selectLeft");
			let value = selectRight.value;
			let valueLeft = selectLeft.value;
			
			if (selectRight.value === selectLeft.value) {
				    let num = input    
		    		let inputLeft = document.getElementById("inputLeft").value = input;
			} 

			else {	
		    	if (selectRight.value == 'UAH' && selectLeft.value == 'USD') {
		    		let num = Number(input) / Number(currency[0].rateBuy)   
		    		let inputLeft = document.getElementById("inputLeft").value = num.toFixed(2);
		    		let a = document.getElementById("result")
		    		console.log(num)
		    		a.innerHTML = num.toFixed(2);
		    	}

		    	if (selectRight.value == 'USD' && selectLeft.value == 'UAH') {
		    		let num = Number(input) * Number(currency[0].rateSell)   
		    		let inputRight = document.getElementById("inputLeft").value = num.toFixed(2);
		    	}

		    	if (selectRight.value == 'UAH' && selectLeft.value == 'EUR') {
		    		let num = Number(input) / Number(currency[1].rateBuy)   
		    		let inputRight = document.getElementById("inputLeft").value = num.toFixed(2);
		    	}

		    	if (selectRight.value == 'EUR' && selectLeft.value == 'UAH') {
		    		let num = Number(input) * Number(currency[1].rateSell)   
		    		let inputRight = document.getElementById("inputLeft").value = num.toFixed(2);
		    	}

		    	if (selectRight.value == 'USD' && selectLeft.value == 'EUR') {
		    		let num = Number(input) * Number(currency[0].rateSell) 
		    		let num1 = Number(num) / Number(currency[1].rateBuy) 
		    		let inputRight = document.getElementById("inputLeft").value = num1.toFixed(2);
		    		num1.toFixed(2)
		    	}

		    	if (selectRight.value == 'EUR' && selectLeft.value == 'USD') {
		    		let num = Number(input) * Number(currency[1].rateSell)
		    		let num1 = Number(num) / Number(currency[0].rateBuy) 
		    		let inputRight = document.getElementById("inputLeft").value = num1.toFixed(2);    		
		    	}
			}
	}	
}
xhr.overrideMimeType("text/html");
xhr.send();