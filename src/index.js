module.exports = function reverse (n) {
    let s = String(n);
    let c = '';
    for (let i=0; i<s.length; i++){
        c = s[i] + c; 
    }
    return c;
  }