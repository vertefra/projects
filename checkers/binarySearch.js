class BinaryTree {
  constructor(headNode) {
    this.head = headNode;
  }
}

class Node {
  constructor(data = undefined, leftNode = null, rightNode = null) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  addLeftNode(node) {
    this.leftNode = node;
  }

  addRightNode(node) {
    this.rightNode = node;
  }
}

const head = new Node(0);

const tree = new BinaryTree(head);

for (i = 0; i < 4000; i++) {
  const record = Math.floor(Math.random() * 1000);
}
