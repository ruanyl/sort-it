sort-it
========
[![build status](https://secure.travis-ci.org/ruanyl/sort-it.svg)](http://travis-ci.org/ruanyl/sort-it)
[![NPM version](https://badge.fury.io/js/sort-it.svg)](http://badge.fury.io/js/sort-it)

sort

## Installation

This module is installed via npm:

``` bash
$ npm install sort-it
```

## Example Usage

``` js
var sortIt = require('sort-it');

var arr = [
  {firstName: 'abc', lastName: 'efg'},
  {firstName: 'bcd', lastName: 'fgh'},
  {firstName: 'bcd', lastName: 'egh'},
  {firstName: 'cde', lastName: 'ghi'},
  {firstName: 'def', lastName: 'hij'}
];

test(function (t) {
  var result = sortIt(arr, 'lastName');
  t.assert(result[0].lastName === 'efg');
  t.assert(result[4].lastName === 'hij');
});

test(function (t) {
  var result = sortIt(arr, '-firstName');
  t.assert(result[0].firstName === 'def');
  t.assert(result[4].firstName === 'abc');
});

test(function (t) {
  var result = sortIt(arr, ['firstName', 'lastName']);
  t.assert(result[0].firstName === 'abc');
  t.assert(result[4].firstName === 'def');
  t.assert(result[1].lastName === 'egh');
  t.assert(result[2].lastName === 'fgh');
});

test(function (t) {
  var result = sortIt(arr, ['firstName', '-lastName']);
  t.assert(result[0].firstName === 'abc');
  t.assert(result[4].firstName === 'def');
  t.assert(result[1].lastName === 'fgh');
  t.assert(result[2].lastName === 'egh');
});
```
