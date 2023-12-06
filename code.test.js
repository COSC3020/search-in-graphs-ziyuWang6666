const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js').toString());

// case one
var graph1 = [];
assert(JSON.stringify(depthFirstSearch(graph1, 0, 1)) == JSON.stringify([]));


// case two
var graph2 = [0];
assert(JSON.stringify(depthFirstSearch(graph2, 0, 1)) == JSON.stringify([0]));


// case three
var graph3 = [[]];
assert(JSON.stringify(depthFirstSearch(graph3, 0, 1)) == JSON.stringify([[]]));

// case four
var graph4 = [
    [1,2],
    [0,3,4],
    [0,5],
    [1],
    [1,5],
    [2,4]];
assert(JSON.stringify(depthFirstSearch(graph4, 0, 5)) == JSON.stringify([ 0, 2, 5 ]));
assert(JSON.stringify(depthFirstSearch(graph4, 1, 2)) == JSON.stringify([ 1, 4, 5, 2 ]));
assert(JSON.stringify(depthFirstSearch(graph4, 0, 6)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph4, 0, 2)) == JSON.stringify([ 0, 2 ]));

// case five
var graph5 = [[-1]];
assert(JSON.stringify(depthFirstSearch(graph5, 0, 1)) == JSON.stringify([[-1]]));
assert(JSON.stringify(depthFirstSearch(graph5, 0, 0)) == JSON.stringify([[-1]]));
