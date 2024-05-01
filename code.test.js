const assert = require('assert');
const depthFirstSearch = require('./code');

const a = [[0,1,2],[3,2,1],[1,2],[1,2,3]];
const b = [[0,1,1,0,0,0,0,0],[0,0,0,1,1,1,0,0],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]];

assert.deepEqual(depthFirstSearch(b,0,7), [0,1,3,2,6,7]);
assert.deepEqual(depthFirstSearch(b,1,0), [1,3,2,6,7,0]);
assert.deepEqual(depthFirstSearch(a,3,7), []);
assert.deepEqual(depthFirstSearch(a,3,2), [3,2]);
assert.deepEqual(depthFirstSearch(a,0,3), [0,1,2,3]);
