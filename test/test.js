var chai = require('chai');
var assert = chai.assert;
var should = require('chai').should();
var sinon = require('sinon');
var IsAlive = require('../math');

describe('isalive tests', function () {
    it('should return treu when true', function () {
        var pinger = sinon.stub();
        pinger.returns(true);
        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;
    });
    it('should return treu when true tree in a row', function () {
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);
        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;
    });
    it('should return false when true doesnt come tree in a row', function () {
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(false);
        pinger.onThirdCall().returns(true);
        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.false;
    });

    it('should return an error when pin throws error', function() {
        var pinger = sinon.stub();
        pinger.throws(function(){ return new Error(); })
        var error = IsAlive(pinger);

        error.message.should.equal('ping threw exception');
    })
});