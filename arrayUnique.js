/*
 * javascript数组去重方案一
 * @param {arrs} 原数组
 * @method 新建一个新数组，遍历原数组，在新数组内使用indexOf查找原数组内的每一项，如果没有找到，就把当前的项存入新数组里面去，这样就过滤掉
 * 重复项 indexOf方法在IE8及IE8以下不支持，因此有必要封装一个
 * @return {newArrays} 返回新数组
 */
function arrayUnique(arrs) {
    var newArrays = [];
    for(var i = 0,ilen = arrs.length; i < ilen; i++) {
        if(newArrays.indexOf) {
            if(newArrays.indexOf(arrs[i]) == -1) {
                newArrays.push(arrs[i]);
            }
        }else {
            if(indexOf(arrs[i],newArrays) == -1) {
                newArrays.push(arrs[i]);
            }
        }

    }
    return newArrays;
}

/*
 * 数组下标判断法
 * 思路：先定义一个新数组，循环当前数组，使用indexOf方法，如果在当前的数组的第i项在当前数组中的位置是i项的话，说明该项在数组中并未出现过，存入新数组，否则的话，在原数组中出现过，因此需要过滤掉。性能和第一种方案差不多。
 * @return {newArrars} 返回新数组
 */
function arrayUnique2(arrs) {
    var newArrays = [];
    if(arrs.length > 0) {
        for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
            if(arrs.indexOf) {
                if(arrs.indexOf(arrs[i]) == i) {
                    newArrays.push(arrs[i]);
                }
            }else {
                if(indexOf(arrs[i],arrs) == i) {
                    newArrays.push(arrs[i]);
                }
            }

        }
    }
    return newArrays;
}

/*
 * 为了支持IE8及以下浏览器需要封装一个indexOf方法
 * @param {arr,arrs} 某一项 原数组
 * @return 返回数组某一项
 */
 function indexOf(arr,arrs){
    if(arrs.length > 0) {
        for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
            if(arrs[i] == arr) {
                return i;
            }
        }
    }
    return -1;
 }

/*
* 排序后相邻去除法
* @method 新建一个新数组，遍历当前的数组，如果当前的数组某一项不等于新数组的最后一项的话，就把当前的项存入新数组中，最后返回新数组
*/
function arrayUnique3(arrs) {
   var newArrays = [];
   if(arrs.length > 0) {
       arrs.sort();
       for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
           if(arrs[i] !== newArrays[newArrays.length - 1]) {
               newArrays.push(arrs[i]);
           }
       }
   }
   return newArrays;
}

/*
* 对象键值法(该方法性能最优)
* @method 定义一个空对象和空新数组，遍历当前的数组，判断该对象是否存在数组的某一项，如果不存在
* 就当当前的某一项存入新数组去，且当前的项置为-1 目的过滤掉重复的项
*/
function arrayUnique4(arrs) {
   var newArrays = [];
   var hash = {};
   if(arrs.length > 0) {
       for(var i = 0,ilen = arrs.length; i < ilen; i+=1) {
           if(!hash[arrs[i]]) {
               hash[arrs[i]] = 1;
               newArrays.push(arrs[i]);
           }
       }
   }
   return newArrays;
}
 var arrs = [4,5,2,1,2,1,3,1];
 console.log(arrayUnique4(arrs)); // [4,5,2,1,3]

var arrs = [1,2,3,1,2,3];
console.log(arrayUnique(arrs)); // [1,2,3]
console.log(arrayUnique2(arrs)); // [1,2,3]
