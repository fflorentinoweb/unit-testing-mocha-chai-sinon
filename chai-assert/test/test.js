var chai = require('chai');
var assert = chai.assert;
// var sinon = require('sinon');
var expect = require('chai').expect;
var Add = require('../math');

var should = require('chai').should();

describe('Add tests', function() {
    it('should return tree when called 1 and 2' ,function(){
        // var result = Add(1, 2);
        // var expectedResult = 3;
        // assert.equal(expectedResult, result);


        //**************** /

        var numberOne = 1;
        var numberTwo = 2

        var expectedResult = 3;
        var notExpetedResult = 10;
        var actualResult = Add(numberOne, numberTwo);

        assert.equal(actualResult, expectedResult);
        // assert.notEqual(actualResult, notExpetedResult);

        // CHAI - should 
    });
});