module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  
  if(arr.length % 2 !== 0) return false;

  while(true) {
   let rest = 0;
    for(let i = 0; i < bracketsConfig.length; i++) {
      for(let last = arr.length - 1; last >= 0; last--) {
        if(arr[last] == bracketsConfig[i][1] && arr[last - 1] == bracketsConfig[i][0]) {
          arr.splice(last - 1, 2);
          rest = 1;
        }
        if(arr.length === 0) return true;
      }
    }
  if(rest === 0) return false;
  }
}
