import Zombie from 'zombie';
const URL = 'https://kodaktor.ru/g/testing_f38ac';
const page = new Zombie();
const g=URL=>new Promise((rs,rj)=>page.visit(URL,e=>(e)?rj(e):rs()));
const vals = [
  {val: "?test=ilya@gmail.com", expected:"yes"},
  {val: "?test=il@gmail.com", expected:"no"},
  {val: "?test=ilya@gmail.com", expected:"yes"}
];
(async()=>{
  for (const o of vals) {
    await g(URL+o.val);
    console.log(page.document.querySelector('h3#response').textContent.padStart(5),URL+o.val
  );
  }
})();
