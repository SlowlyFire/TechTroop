class BSNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertNode(value) {
    if (value < this.value) {
      if (this.left === null) this.left = new BSNode(value);
      else this.left.insertNode(value);
    } else {
      if (this.right === null) this.right = new BSNode(value);
      else this.right.insertNode(value);
    }
  }

  findNode(value) {
    if (this.value === value) return true;
    if (value < this.value) {
      if (this.left === null) return false;
      return this.left.findNode(value);
    } else {
      if (this.right === null) return false;
      return this.right.findNode(value);
    }
  }

  findCommonParent(val1, val2) {
    if (val1 < this.value && val2 < this.value)
      return this.left.findCommonParent(val1, val2);
    if (val1 > this.value && val2 > this.value)
      return this.right.findCommonParent(val1, val2);
    return this.value;
  }

  removeNode(node, value) {
    if (node === null) return null;
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;
      let maxLeft = node.left;
      while (maxLeft.right !== null) maxLeft = maxLeft.right;
      node.value = maxLeft.value;
      node.left = this.removeNode(node.left, maxLeft.value);
      return node;
    }
  }
}

module.exports = BSNode;