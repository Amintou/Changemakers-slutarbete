function fizzBuzz(){
	for(var i=0;i<=100;i++){
		if(i%5 === 0 && i%3 === 0){
			print('FizzBuzz');
		} else if (i%3 === 0){
			print('Fizz');
		} else if(i%5 === 0){
			print('Buzz');
		} else {
			print(i);
		}
	}
}


function fizzBuzz(number, i = 0, fzzNumber, buzzNumber){
	for(i;i<=number;i++){
		if(i%fizzNumber === 0 && i%buzzNumber === 0){
			print('FizzBuzz');
		} else if (i%fizzNumber === 0){
			print('Fizz');
		} else if(i%buzzNumber === 0){
			print('Buzz');
		} else {
			print(i);
		}
	}
}



function fizzBuzz(number, i = 0, fzzNumber, buzzNumber){
	for(i;i<=number;i++){
		output = '';
		if(i%3 === 0){
			output+='Fizz';
		} 
		if (i%5 === 0){
			output+='Buzz';
		} 
		if(i%3 !== 0 && i%5 !== 0){
			output+=i;
		}
		print(output);
	}

}




