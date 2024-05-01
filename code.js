function depthFirstSearch(graph, startNode, targetNode) {
    let visited = new Set();
    let stack = [[startNode, [startNode]]];
    while (stack.length > 0) {
        let [currentNode, path] = stack.pop();
        if (currentNode === targetNode) {
            return path;
        }
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            for (let neighbor of graph[currentNode] || []) {
                stack.push([neighbor, path.concat(neighbor)]);
            }
        }
    }
    return [];
}
