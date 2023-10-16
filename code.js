let smallFlightMap = [
    ["ATL", "DC"],
    ["DC", "NYC"],
    ["ATL", "DAL"],
    ["DAL", "DC"]
]
const toAdjacencyList = function(edgeList) {
    const adjacencyList = {};
    for (let edge of edgeList) {
      const src = edge[0];
      const dest = edge[1];
      if (adjacencyList[src] != undefined) {
          adjacencyList[src].push(dest);
      } else {
          adjacencyList[src] = [dest];
      }
    }
    return adjacencyList;
}
// find the path to get from startNode (source) to targetNode (dest)
function depthFirstSearch(graph, startNode, targetNode) {
    const graphList = toAdjacencyList(graph);
    const visited = new Set();
    const stack = [];
    stack.push(startNode);
    const cameFrom = {};// keep track of where you came from
    cameFrom[startNode] = undefined;//initialization
    while (stack.length > 0) {
        const currentCity = stack.pop();
        // console.log(currentCity);
        const adjacentCities = graphList[currentCity] || [];//it is returning an empty array if graphList[currentCity] is undefined.
        if (currentCity === targetNode) {
            const pathFromSrcToDest = [];
            pathFromSrcToDest.unshift(targetNode);
            let previousCity = cameFrom[targetNode];
                while (previousCity != undefined) {
                    pathFromSrcToDest.unshift(previousCity);
                    previousCity = cameFrom[previousCity];
                }
                return pathFromSrcToDest;
        }
        for (nextCity of adjacentCities) {//iterate children nodes
            if (!visited.has(nextCity)) {
                cameFrom[nextCity] = currentCity;
                stack.push(nextCity);
                visited.add(nextCity);
            }
        }
    }
    return [];
}
console.log(depthFirstSearch(smallFlightMap, "ATL", "NYC"))

// I will add test.js later because I don't know how to write it right now.
// get whole reference from below website:
// https://javascript.plainenglish.io/find-path-depth-first-search-28d27bba8ae0
