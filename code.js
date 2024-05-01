function depthFirstSearch(adjMatrix, startNode, targetNode) {
    if (!adjMatrix || !adjMatrix.length) { return []; }
    let visited = []; 
    
    function dfsFinder(currentNode, path) {
        visited.push(currentNode);
        if (currentNode == targetNode) { return path.concat(currentNode); }
        for (let adj = 0; adj < adjMatrix[currentNode].length; adj++) {
            if (!visited.includes(adj) && adjMatrix[currentNode][adj] == 1) {
                let foundPath = dfsFinder(adj, path.concat(currentNode));
                if (foundPath) { return foundPath; }
            }
        }
        return [];
    }
    
    let solution = dfsFinder(startNode, []);
    return solution;
}
