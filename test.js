'use strict';
var test = require('ava');
var sortIt = require('./');

var arr = [
    {firstName: 'abc', lastName: 'efg', address: {country: 'FR'}},
    {firstName: 'bcd', lastName: 'fgh', address: {country: 'CA'}},
    {firstName: 'bcd', lastName: 'egh', address: {country: 'US'}},
    {firstName: 'cde', lastName: 'ghi', address: {country: 'CA'}},
    {firstName: 'def', lastName: 'hij', address: {country: 'BE'}}
];

test('asc by lastName', function (t) {
    var result = sortIt(arr, 'lastName');
    t.assert(result[0].lastName === 'efg');
    t.assert(result[4].lastName === 'hij');
});

test('asc by firstName', function (t) {
    var result = sortIt(arr, '-firstName');
    t.assert(result[0].firstName === 'def');
    t.assert(result[4].firstName === 'abc');
});

test('asc by firstName then lastName', function (t) {
    var result = sortIt(arr, ['firstName', 'lastName']);
    t.assert(result[0].firstName === 'abc');
    t.assert(result[4].firstName === 'def');
    t.assert(result[1].lastName === 'egh');
    t.assert(result[2].lastName === 'fgh');
});

test('asc by firstName then desc by lastName', function (t) {
    var result = sortIt(arr, ['firstName', '-lastName']);
    t.assert(result[0].firstName === 'abc');
    t.assert(result[4].firstName === 'def');
    t.assert(result[1].lastName === 'fgh');
    t.assert(result[2].lastName === 'egh');
});


test('asc by address.country', function (t) {
    var result = sortIt(arr, 'address.country');
    t.assert(result[0].address.country === 'BE');
    t.assert(result[1].address.country === 'CA');
    t.assert(result[2].address.country === 'CA');
    t.assert(result[3].address.country === 'FR');
    t.assert(result[4].address.country === 'US');
});

test('asc by lastName then asc by address.country', function (t) {
    var result = sortIt(arr, ['-address.country', 'lastName']);
    t.assert(result[0].address.country === 'US');
    t.assert(result[1].address.country === 'FR');
    t.assert(result[2].address.country === 'CA');
    t.assert(result[2].lastName === 'fgh');
    t.assert(result[3].address.country === 'CA');
    t.assert(result[3].lastName === 'ghi');
    t.assert(result[4].address.country === 'BE');
});
