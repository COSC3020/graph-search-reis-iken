let fs = require('fs');
let jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');
let testDepthFirstSearch = jsc.forall(jsc.dict(jsc.array(jsc.string)), jsc.nestring, jsc.nestring, function(graph, startNode, targetNode) {
    let result = depthFirstSearch(graph, startNode, targetNode);
    function isValidPath(path) {
        if (path.length === 0) {
            return startNode === targetNode;
        }
        if (path[0] !== startNode || path[path.length - 1] !== targetNode) {
            return false;
        }
        for (let i = 0; i < path.length - 1; i++) {
            if (!graph[path[i]] || !graph[path[i]].includes(path[i + 1])) {
                return false;
            }
        }
        return true;
    }
    return isValidPath(result);
});

jsc.assert(testDepthFirstSearch);
