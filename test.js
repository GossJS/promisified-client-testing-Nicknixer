const Zombie = require('zombie');
const should = require('should');
const URL = 'http://kodaktor.ru';
var assert = require('assert');

var Browser = require('zombie');
const page = new Zombie();
const g=URL=>new Promise((rs,rj)=>page.visit(URL,e=>(e)?rj(e):rs()));
const data = [ 
{"value": "il@gmail.com", "expected": "no"}, 
{"value": "ilya@gmail.com", "expected": "yes"}, 
{"value": "elias@gmail.ru", "expected": "no"}, 
{"value": "il-ya@gmail.com", "expected": "no"}, 
{"value": "name#gmail.com", "expected": "no"}, 
{"value": "hahaha@gmail.com", "expected": "yes"},
{"value": "hahaha@.com", "expected": "no"} 
];


describe('Email checker', function() {
    for (const o of data) {
		it(`${o.value} should be returned ${o.expected}`, function(done) {
			this.timeout(15000);
    		Zombie.visit(`https://kodaktor.ru/g/testing_0ab37?test=${o.value}`, (e, browser)=>{
    			browser.pressButton('go').then(function() {
			      assert.ok(browser.success);
			      assert.equal(browser.text('h3'), o.expected);
			    }).then(done, done);
    		});
  		});
	}
});
