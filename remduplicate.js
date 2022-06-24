//Remove Duplicates
var arr = [1,1,2];
function remove(arr){
   var u = [];
   arr.forEach(element => {
      if (!u.includes(element)) {
          u.push(element);
      }
  });
  return u;
}
console.log(remove(arr));

//Square root
var x = 64;
let res = Math.sqrt(x);
console.log(res);

//Valid Palindrome
let s = "A man, a plan, a canal: Panama" ;
let str = s.toLowerCase().replaceAll(/[_\W]/g, '');
let r = str.split('').reverse().join('') === str;
console.log(r);
