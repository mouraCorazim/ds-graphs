const Graph = require('./Graphs.js')

const mtx = [[0, 1, 1, 0, 0],
             [1, 0, 1, 1, 1],
             [1, 1, 0, 0, 0],
             [0, 1, 0, 0, 0],
             [0, 1, 0, 0, 0]]

const graphG = Graph.build.from(mtx)

const c = (x, y, z, w) => 
  Graph.relation.of(x && y, Graph.vertexPair.of(z, w))

Graph.mirroredApply(graphG, c)