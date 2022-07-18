/* Quan sát expected results và hoàn thành code còn thiếu để vượt qua thử thách này. */
// Expected results:
/* var arr =[1,2,3]

function total(m) {
  return m.reduce((a,b)=> a+b) 
}
console.log(total(arr)) */

// Expected results:
var arr = [
  ['name', 'abc'],
  ['age', 18],
];

function arrToObj(ketqua) {
    var result = ketqua.reduce((total, [key, value])=> Object.assign(total, {[key]:value}), {});
    return result
}
console.log(arrToObj(arr))