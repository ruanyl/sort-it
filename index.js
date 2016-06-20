'use strict';

function sortIt(arr, keys) {
    var criteria;
    if (Object.prototype.toString.call(keys) === '[object Array]') {
        criteria = keys;
    } else if (Object.prototype.toString.call(keys) === '[object String]') {
        criteria = [keys];
    } else {
        throw 'keys should be either an array or a string';
    }

    return arr.sort(function (a, b) {
            for (var i = 0; i < criteria.length; i++) {
                var key = criteria[i];

                var desc = key[0] === '-';
                if (desc) {
                    key = key.substring(1);
                }

                var aValue = getPropertyValue(a, key);
                var bValue = getPropertyValue(b, key);

                if (aValue === bValue) {
                    continue;
                }

                if (desc) {
                    return bValue > aValue;
                } else {
                    return aValue > bValue;
                }
            }
            return 0;
        }
    );


    function getPropertyValue(obj, key) {
        var dotIndex = key.indexOf('.');
        if (dotIndex !== -1) {
            var keyHead = key.substring(0, dotIndex);
            var keyQueue = key.substring(dotIndex + 1);
            if (obj[keyHead]) {
                return getPropertyValue(obj[keyHead], keyQueue);
            } else {
                return;
            }
        } else {
            return obj[key];
        }
    }

}

module.exports = sortIt;