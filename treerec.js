const tree = {
  value: 5,
  left: {
    value: 1,
    left: {
      value: 5,
    },
  },
  right: {
    value: 10,
    left: {
      value: 20,
    },
    right: {
      value: 30,
    },
  },
}

function sumTree(tree) {
  let sum = tree.value
  if (tree.left) {
    sum += sumTree(tree.left)
  }
  if (tree.right) {
    sum += sumTree(tree.rught)
  }
  return sum
}

console.log(sumTree(tree))
