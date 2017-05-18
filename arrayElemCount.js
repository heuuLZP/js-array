/*
 * 计算数组中每个元素在数组中出现的个数
 * @param {arrs} 数组
 * @method 定义一个新数组，循环当前的数组，使用一个临时的变量temp保存当前的值，外层for循环定义一次变量count=0，当做计数器，内部再一次循环数组判断当前的数组与外层的数组某一项是否相等，如是count++; 然后把当前的一项值置为-1，下一次就不会再继续循环了
 * @return {newArrs} 返回一个新数组
 */
function arrayElemCount(arrs){
    var hash = {};
     if(arrs.length > 0) {
        for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
            var temp = arrs[i];
            var count = 0;
            for(var j = 0,jlen = arrs.length; j < jlen; j+=1) {
                if(arrs[j] == temp) {
                    count++;
                    hash[arrs[j]] = count
                 }
            }
        }
     }
     return hash;
}
var arrs = [1,2,1,2,3,,4,5,6,7,1,2,3];
console.log(arrayElemCount(arrs));
// 打印如下：{ '1': 3,'2': 3,'3': 2,'4': 1,'5': 1,'6': 1,'7': 1,undefined: 1 }
