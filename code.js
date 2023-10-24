  function depthFirstSearch(graph, startNode, targetNode) {
    const stack = [startNode];
    const visited = new Set();
    const paths = new Array(graph.length).fill([]);
  
    while (stack.length > 0) {
      const vertex = stack.pop();
      visited.add(vertex);
  
        for (const neighbor of graph[vertex]) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
            paths[neighbor] = paths[vertex].concat(neighbor);
            if (neighbor === targetNode) {
              // Include the source vertex in the path
              return [startNode, ...paths[neighbor]];
            }
          }
        }
    }
    return []
  }
// get whole reference from below website:
// https://stackoverflow.com/questions/12864004/tracing-and-returning-a-path-in-depth-first-search
