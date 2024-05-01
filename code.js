function depthFirstSearch(graph, startNode, targetNode) {
    let visited = new Set();
    let stack = [[startNode, [startNode]]];
    while (stack.length > 0) {
        let [currentNode, path] = stack.pop();
        if (currentNode === targetNode) {
            return path;
        }
        visited.add(currentNode);
        for (let neighbor of graph[currentNode] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                stack.push([neighbor, path.concat(neighbor)]);
            }
        }
    }
    return [];
}
