let fs = require('fs');
let jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

let testDepthFirstSearch = jsc.forall("json", "nat", "nat", function (graph, startNode, targetNode) {
    let solutions = {
        [[0, 1, 2, 3, 4], 0, 4]: [0, 1, 2, 3, 4],
        [[0, 1, 2, 3, 4], 3, 0]: [3, 0],
        [[0, 1, 2, 3, 4], 1, 5]: [],
    };

    let result = depthFirstSearch(graph, startNode, targetNode);
    let expected = solutions[[graph, startNode, targetNode]] || [];

    return jsc.utils.isEqual(result, expected);
});

jsc.assert(testDepthFirstSearch);
