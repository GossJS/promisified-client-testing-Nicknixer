import Zombie from 'zombie';
import should from 'should';
const URL = 'https://kodaktor.ru/g/testing_f38ac';
const page = new Zombie();
const g=URL=>new Promise((rs,rj)=>page.visit(URL,e=>(e)?rj(e):rs()));
const data = [ {"value": "il@gmail.com", "expected": "no"}, {"value": "ilya@gmail.com", "expected": "yes"}, {"value": "elias@gmail.ru", "expected": "no"}, {"value": "il-ya@gmail.com", "expected": "no"}, {"value": "name#gmail.com", "expected": "no"}, {"value": "hahaha@gmail.com", "expected": "yes"} ];
for (const o of data) {
  it('should return yes or no', ()=>{
    g(URL+'?test='+o.value).then(()=>({result: page.document.querySelector('h3#response').textContent})).should
    .eventually.have.property('result',  o.value );
  });
}
