  
module.exports = function reverse (n) {
    let arr = String(n).split("");
    if (arr[0] === "-"){
      arr.splice(0, 1);
    }
    arr.reverse();
    let result = arr.join("");
    return Number(result);
  }
