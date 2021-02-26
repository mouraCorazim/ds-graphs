
const Graph = () => {
  return {
    from: mtx => {
      if(mtx && mtx.length === mtx[0].length)
        return {'type': "Graph", 'value': mtx}
    }
  }
}

const Relation = () => {
  return {
    of: (edge, vertexPair) => {
      if(vertexPair.type === "GraphVertexPair" && edge > -1 && edge < 2)
        return {'type'  : "GraphRelation",
                'edge'  : edge, 
                'vertex': vertexPair}
    }
  }
}

const VertexPair = () => {
  return {
    of: (x, y) => {
      if(x > -1 && y > -1 && x != undefined && y != undefined)
        return {'type': "GraphVertexPair", 'x': x, 'y': y}
    }
  }
}

const mirroredApply = (graph, fn) => {
  if(graph && graph.type === "Graph" && graph.value && fn){
    const r = []
    for(let i = 0; i < graph.value.length; i++)
      for(let j = 0; j < graph.value[0].length; j++){
        r.push(fn(graph.value[i][j], graph.value[j][i], i, j))
      }

    return r
  }
}

const moduleProperties = {
  build: { value: Graph(), writable: false },
  relation: { value: Relation(), writable: false },
  vertexPair: { value: VertexPair(), writable: false },
  mirroredApply: { value: mirroredApply, writable: false }
}

module.exports = Object.defineProperties({}, moduleProperties)