var chai = require('chai');
var assert = chai.assert;
var should = require('chai').should();
var sinon = require('sinon');
var Add = require('../math');

describe('Spy tests', function() {
    it('should log result of add' ,function(){
        var numberOne = 1;
        var numberTwo = 2;

        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);

        logSpy.called.should.be.true
    });
    it('should call log wiht result of add', function() {
        var numberOne = 1;
        var numberTwo = 2;

        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);

        logSpy.calledWith(3).should.be.true;
    })
});