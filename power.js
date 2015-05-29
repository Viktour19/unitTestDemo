
function power(number, powerUp){

var keep = number;

	for(var i =1; i<powerUp; i++){

		keep = keep*number;
		
	}

	return keep;
}

exports.power = power;