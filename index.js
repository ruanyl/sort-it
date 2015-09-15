'use strict';

function sortIt(arr, keys) {
  var isArr = false;
  if(Object.prototype.toString.call(keys) === '[object Array]') {
    isArr = true;
  } else if(Object.prototype.toString.call(keys) === '[object String]') {
    isArr = false;
  } else {
    throw 'keys should be either an array or a string';
  }

  return arr.sort(function(a, b) {
    var key = '';
    if(isArr) {
      for(var i = 0; i < keys.length; i++) {
        if(keys[i][0] === '-') {
          key = keys[i].slice(1, keys[i].length);
          if(a[key] === b[key]) {
            continue;
          } else {
            return b[key] > a[key];
          }
        } else {
          key = keys[i];
          if(a[key] === b[key]) {
            continue;
          } else {
            return a[key] > b[key];
          }
        }
      }
    } else {
      if(keys[0] === '-') {
        key = keys.slice(1, keys.length);
        return b[key] > a[key];
      } else {
        key = keys;
        return a[key] > b[key];
      }
    }
  });

}

module.exports = sortIt;
