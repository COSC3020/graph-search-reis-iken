const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const testCases = [
  {
    description: 'Graph with a loop',
    adjacencyMatrix: [[0, 1, 0], [1, 0, 1], [0, 1, 0]],
    startNode: 0,
    targetNode: 0,
    expectedPath: [0],
  },

  {
    description: 'Graph with a longer path',
    adjacencyMatrix: [[0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 0, 1], [0, 0, 1, 0]],
    startNode: 0,
    targetNode: 3,
    expectedPath: [0, 2, 3],
  },

  {
    description: 'Graph with multiple disconnected components',
    adjacencyMatrix: [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]],
    startNode: 0,
    targetNode: 3,
    expectedPath: [0, 1, 3],
  },
];

function runTest(testCase) {
  const actualPath = depthFirstSearch(testCase.adjacencyMatrix, testCase.startNode, testCase.targetNode);
  const passed = JSON.stringify(actualPath) === JSON.stringify(testCase.expectedPath);
  console.log(`Test Case: ${testCase.description} - ${passed ? 'Passed' : 'Failed'}`);
  console.log(`  Adjacency Matrix: ${JSON.stringify(testCase.adjacencyMatrix)}`);
  console.log(`  Start Node: ${testCase.startNode}`);
  console.log(`  Target Node: ${testCase.targetNode}`);
  console.log(`  Expected Path: ${JSON.stringify(testCase.expectedPath)}`);
  console.log(`  Actual Path: ${JSON.stringify(actualPath)}`);
  console.log('------------------------------------');
  return passed;
}

for(let c = 0; c < testCases.length; c++){
  assert(runTest(testCases[c]));
}
