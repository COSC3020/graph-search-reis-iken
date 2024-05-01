function depthFirstSearch(graph, startNode, targetNode) {
    let visited = [startNode];
    let path = [startNode];
    let finalPath = [];

    function depthFirstSearchInner(graph, startNode, targetNode) {
        if (startNode == targetNode) {
            finalPath = [...path];
            return;
        }
        for (let i = 0; i < graph[startNode].length && finalPath.length < 1; i++) {
            if (visited.includes(graph[startNode][i])) {
                continue;
            } else {
                visited.push(graph[startNode][i]);
                path.push(graph[startNode][i]);
                if (path[path.length - 1] == targetNode) {
                    finalPath = [...path]; // Make a copy of path
                } else {
                    depthFirstSearchInner(graph, graph[startNode][i], targetNode);
                }
            }
            if (finalPath.length === 0) {
                path.pop();
            }
        }
    }   
    depthFirstSearchInner(graph, startNode, targetNode);
    return finalPath;
}
