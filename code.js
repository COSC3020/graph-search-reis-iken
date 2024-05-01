function depthFirstSearch(graph, startNode, targetNode) {
    visited = [startNode];
    path = [startNode];
    finalPath = []

    function depthFirstSearchInner(graph, startNode, targetNode) {
        if(startNode == targetNode) {
            return startNode;
        }

        for (i = 0; i < graph[startNode].length && finalPath.length < 1; i++){
            if(visited.includes(graph[startNode][i] )){
                continue;
            }
            else {
                visited.push(graph[startNode][i])
                path.push(graph[startNode][i])

                if (path[path.length - 1] == targetNode) {
                    finalPath = path
                } else {
                    depthFirstSearchInner(graph, graph[startNode][i], targetNode )
                }

            }
            if (finalPath == []) {
            path.pop()
            }
        }
    }   
    depthFirstSearchInner(graph, startNode, targetNode)
    return finalPath;
}
