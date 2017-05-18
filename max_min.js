/**
 * 最小值
 * 排序后，返回数组的首元素
 */
function min(arrs) {
  if (arrs.length > 0) {
    arrs.sort(function (a,b){
      return a - b
    })
  }
  return arrs[0]
}
/**
 * 最大值
 * 排序后，返回数组的最后一个元素
 */
function max(arrs) {
  if (arrs.length > 0) {
    arrs.sort(function (a,b){
      return a - b
    })
  }
  return arrs[arrs.length -1]
}

var arrs = [18,3,5,6]
console.log(min(arrs));
console.log(max(arrs));
