var assert = require('assert');
var expect = require('chai').expect;
var prog = require('./power');



// Starting begins here

describe('A function that powers a number up', function (){

	it('Should return the result of the power', function (){

			var result = prog.power(2, 3);

			expect(result).to.equal(8);

	});

} );
