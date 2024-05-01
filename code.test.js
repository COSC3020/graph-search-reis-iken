const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

a = [[0,1,2],[3,2,1],[1,2],[1,2,3]]
b = [[3],[6],[2,3,4],[3,4,5],[4,5,6],[5,6,7],[6,7,8],[7,0,1]]

assert(JSON.stringify(depthFirstSearch(b,0,8)) == JSON.stringify([0,7,6,5,4,3,2,1]))

assert(JSON.stringify(depthFirstSearch(b,1,0)) == JSON.stringify([1,2,3,4,5,6,7,0]))

assert(JSON.stringify(depthFirstSearch(a,3,7)) == JSON.stringify([]))

assert(JSON.stringify(depthFirstSearch(a,3,2)) == JSON.stringify([3,2]))

assert(JSON.stringify(depthFirstSearch(a,0,3)) == JSON.stringify([0,1,2,3]))
