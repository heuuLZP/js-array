/*
* 判断数组中是否有相同的元素的代码
*/
// 方案一
function isRepeat1(arrs) {
  if(arrs.length > 0) {
      var s = arrs.join(",");
      for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
          if(s.replace(arrs[i],"").indexOf(arrs[i])>-1) {
              return true;
          }
      }
  }
  return false;
}

// 方案二
function isRepeat2(arrs) {
  /*
  * 如果子元素是数组，并且需要考虑子数组中的元素
   */
  /*arrs = arrs.toString()
  arrs = arrs.split(",")*/
  var hash = {};
  if(arrs.length > 0){
      for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
          if(hash[arrs[i]]) {
              return true;
          }
          hash[arrs[i]] = true;
      }
  }
  return false;
}
var arrs = [1,4,3,2,5];
console.log(isRepeat1(arrs)); // false

var arrs2 = [1,2,3,1];
console.log(isRepeat1(arrs2)); // true


var arrs = [1,4,3,2,5];
console.log(isRepeat2(arrs)); // false

var arrs2 = [1,2,3,1];
console.log(isRepeat2(arrs2)); // true

var arrs2 = [1,2,3,[1,2]];
console.log(isRepeat2(arrs2)); // true
