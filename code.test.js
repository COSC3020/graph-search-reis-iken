const fs = require('fs');
const assert = require('assert');

fs.readFile('code.js', 'utf8', function(err, data) {
    if (err) throw err;

    eval(data);

    const a = [[0,1,2],[3,2,1],[1,2],[1,2,3]];
    const b = [[3],[6],[2,3,4],[3,4,5],[4,5,6],[5,6,7],[6,7,8],[7,0,1]];

    assert.deepEqual(depthFirstSearch(b,0,8), [0,7,6,5,4,3,2,1]);
    assert.deepEqual(depthFirstSearch(b,1,0), [1,2,3,4,5,6,7,0]);
    assert.deepEqual(depthFirstSearch(a,3,7), []);
    assert.deepEqual(depthFirstSearch(a,3,2), [3,2]);
    assert.deepEqual(depthFirstSearch(a,0,3), [0,1,2,3]);
});
