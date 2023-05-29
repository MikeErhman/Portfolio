
		
	var inp = document.querySelector(".inp")
	var buttons = document.querySelectorAll(".bodyCalc_keys_buttons")
	console.log(buttons)
	var plusCount = 0 ,
	minusCount = 0 ,
	umnCount = 0,
	delitCount = 0;
	var firstEqual = ""
	var lastEqual = ""
	var finalEqual = ""
	
	function buttonEventFirst(B) {
		B = Number(B)
		inp.textContent += B;
		firstEqual += B 
	}
	function buttonEventLast(B) {
		B = Number(B)
		lastEqual += B 

	}
	var p = new Promise(function(resolve,reject) {
	buttons.forEach(function(buttonsF){
		buttonsF.addEventListener("click", function() {
		console.log("buttonsF ", buttonsF)
		
		switch(true) {
			case buttonsF.className == "bodyCalc_keys_buttons k1" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k2" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k3" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k4" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k5" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k6" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k7" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k8" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k9" : buttonEventFirst(buttonsF.textContent);break
			case buttonsF.className == "bodyCalc_keys_buttons k0" : buttonEventFirst(buttonsF.textContent);break
		}})	
	

		
		console.log("firstEqual is" + typeof(firstEqual))
	buttonsF.addEventListener('click', function(){
		
		switch(true) {
			case buttonsF.className == "bodyCalc_keys_buttons plus" : inp.textContent += "+"; plusCount++;resolve(firstEqual = Number(firstEqual));break
			case buttonsF.className == "bodyCalc_keys_buttons minus" : inp.textContent += "-";minusCount++; resolve(firstEqual = Number(firstEqual));break
			case buttonsF.className == "bodyCalc_keys_buttons umn" : inp.textContent += "*"; umnCount++; resolve(firstEqual = Number(firstEqual)); break
			case buttonsF.className == "bodyCalc_keys_buttons dilit" : inp.textContent += "/"; delitCount++; resolve(firstEqual = Number(firstEqual)); break
			case buttonsF.className == "bodyCalc_keys_buttons del" : location.reload(); break

		} 

	})
	})
}).then(firstEq => {
	buttons.forEach(function(buttonsS){
		buttonsS.addEventListener("click", function() {
		console.log("buttonsS ",buttonsS)
		switch(true) {
			case buttonsS.className == "bodyCalc_keys_buttons k1" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k2" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k3" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k4" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k5" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k6" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k7" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k8" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k9" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons k0" : buttonEventLast(buttonsS.textContent);break
			case buttonsS.className == "bodyCalc_keys_buttons ravno" : 
				switch(true) {
				case plusCount > 0 : 
					// switch(true) {
					// 	case 
					// }
					lastEqual = Number(lastEqual); finalEqual = firstEq + lastEqual  ;inp.textContent = finalEqual;firstEq = finalEqual;lastEqual = ""; plusCount = 0; break
				case minusCount > 0 : lastEqual = Number(lastEqual); finalEqual = firstEq - lastEqual  ;inp.textContent = finalEqual; firstEq = finalEqual;lastEqual = ""; minusCount = 0; break
				case umnCount > 0 : lastEqual = Number(lastEqual); finalEqual = firstEq * lastEqual  ;inp.textContent = finalEqual; firstEq = finalEqual;lastEqual = ""; umnCount = 0;break
				case delitCount > 0 : lastEqual = Number(lastEqual); finalEqual = firstEq / lastEqual  ;inp.textContent = finalEqual; firstEq = finalEqual;lastEqual = ""; delitCount = 0;break
				}

 
				
		}
		
		console.log("a is ", firstEq, "type ", typeof(firstEq))
		console.log("b is ", lastEqual,  "type ", typeof(lastEqual))
		
	})})})




		// document.addEventListener('keypress', (key) => {
		// keyWhich = key.key;
		// var keyP = window.event.keyCode;
		// var keychar = String.fromCharCode(keyP);


		// if ((("0123456789+-*/").indexOf(keychar) > -1)){ 
			
				
		// 		buttonEventFirst(keyWhich)
		// 	}
			
		// }
		
		// )
