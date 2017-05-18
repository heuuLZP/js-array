/**
 * concat()
 */
var arr1 = [1,2,3],
    arr2 = [4,5,6],
    arr3 = [7,8,9,1,2,3];
console.log("concat()");
console.log(arr1.concat(arr2,arr3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]
console.log(arr1); // [1,2,3]
console.log(arr2); // [4,5,6]
console.log(arr3); // [7,8,9,1,2,3]
console.log();

/**
 * join()
 */
 var arrs = [];
 arrs[0] = "aa";
 arrs[1] = "bb";
 arrs[2] = "cc";
 console.log("join()");
 console.log(arrs.join()); // aa,bb,cc
 console.log(arrs.join("/")); // aa/bb/cc
 console.log(arrs.join("-")); // aa-bb-cc
 console.log(arrs);
 console.log();

/**
 * push()
 */
console.log("push()");
var arrs = [1,2,3];
arrs.push(4);
console.log(arrs);  // [1,2,3,4]
console.log(arrs.push(5,6))  // 6
console.log(arrs);  // [1,2,3,4,5,6]
console.log();

/**
 * pop()
 */
console.log("pop()");
var arrs = [1,2];
console.log(arrs.pop()); // 2
console.log(arrs);  // [1]
console.log(arrs.pop()); // 1
console.log(arrs);  // []
console.log(arrs.pop()); // undefined
console.log(arrs);  // []
console.log();

/**
 * reverse()
 */
console.log("reverse()");
var arrs = [1,2,3,4];
console.log(arrs.reverse()); //[4,3,2,1]
console.log(arrs); //[4,3,2,1]
console.log();

/**
 * sort()
 */
console.log("sort()");
var arrs = ["tugenhua","longen","alibaba"];
console.log(arrs.sort());   // ["alibaba", "longen", "tugenhua"]

var arrs2 = ["15","5","8","12"];
console.log(arrs2.sort(function(a,b){
    return a - b;  // ["5", "8", "12", "15"]
}));
console.log(arrs2);
console.log();

/**
 * shift()
 */
console.log("shift()");
var arrs = [1,2,3,4];
console.log(arrs.shift());// 1
console.log(arrs); // [2,3,4]

var arrs2 = [];
console.log(arrs2.shift()); // undefined
console.log(arrs2)
console.log();

/**
 * unshift()
 */
console.log("unshift()");
var arrs = [1,2];
console.log(arrs.unshift(4)); // 3
console.log(arrs); //[4, 1, 2]
console.log();

/**
 * splice()
 */
console.log("splice()");
// 假如原数组如下
var arrs = [1,2,3,4,5,6];
// 先向数组的第二个位置中添加一个元素8；
console.log(arrs.splice(1,0,8));
console.log(arrs); // [1, 8, 2, 3, 4, 5, 6]

// 接着从arrs数组中删除一个元素2
arrs.splice(2,1);
console.log(arrs); // [1, 8, 3, 4, 5, 6]

// 再接着从arrs数组中替换一个元素8 使他变为10;如下代码：
console.log(arrs.splice(1,1,10));
console.log(arrs); // [1, 10, 3, 4, 5, 6]
console.log();

/**
 * slice()
 */
console.log("slice()");
var arrs2 = [1,2,3];
console.log(arrs2.slice(1)); // [2,3]
console.log(arrs2);
console.log(arrs2.slice(0,1));// [1]
console.log(arrs2.slice(1,-1)); // [2]
console.log(arrs2.slice(2,-1)); // []
console.log(arrs2.slice(0));  // [1,2,3]
console.log();

/**
 * toString()
 */
console.log("toString()");
var arrs = [1,2,[1,2,3,4]];
console.log(arrs.toString()); // 1,2
console.log(arrs);
