function depthFirstSearch(adjMatrix, startNode, targetNode) {
    if (!adjMatrix || !adjMatrix.length) { return []; }
    let visited = new Array(adjMatrix.length).fill(false); 
    
    function dfsFinder(currentNode, path) {
        visited[currentNode] = true;
        if (currentNode === targetNode) { return [...path, currentNode]; }
        for (let adj = 0; adj < adjMatrix[currentNode].length; adj++) {
            if (!visited[adj] && adjMatrix[currentNode][adj] === 1) {
                let foundPath = dfsFinder(adj, [...path, currentNode]);
                if (foundPath.length > 0) { return foundPath; }
            }
        }
        return [];
    }
    
    return dfsFinder(startNode, []);
}

module.exports = depthFirstSearch;
