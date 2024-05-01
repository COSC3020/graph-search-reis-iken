const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

a = [[0,1],[3,2],[1],[1,2]]
b = [[2],[6],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]]

assert(JSON.stringify(depthFirstSearch(b,0,7)) == JSON.stringify([0,2,3,4,5,6,7]))

assert(JSON.stringify(depthFirstSearch(b,1,0)) == JSON.stringify([1,6,7,0]))

assert(JSON.stringify(depthFirstSearch(a,3,7)) == JSON.stringify([]))

assert(JSON.stringify(depthFirstSearch(a,3,2)) == JSON.stringify([3,1,2]))

assert(JSON.stringify(depthFirstSearch(a,0,3)) == JSON.stringify([0,1,3]))
