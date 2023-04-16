const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


/*class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/
/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;    
  }
  root() {
    this.root = getRoot(this.root, this.root.data);
    function getRoot() {
      if (!root) {
        return null;
      } else {
        return root;        
      };            
    };
    // throw new NotImplementedError('Not implemented');    
  }

  add(data) {
    this.root = addWithIn(this.root, data);
    function addWithIn(node, data) {
      if (!node) {
        return new Node(data);
      };
      if (node.data === data) {
        return node;        
      };
      if (data < node.data) {
        node.left = addWithIn(node.left, data);
      } else {
        node.right = addWithIn(node.right, data);
      }
      return node;
    };
    // throw new NotImplementedError('Not implemented');
  }

  has(data) {
    return searchWithIn(this.root, data);
    function searchWithIn(node, data) {
      if (!node) {
        return false;
      };
      if (node.data === data) {
        return true;
      };
      return data < node.data ? 
        searchWithIn(node.left, data) :
        searchWithIn(node.right, data);
    };
    //throw new NotImplementedError('Not implemented');    
  }

  find(data) {
    return findWithIn(this.root, data);
    function findWithIn (node, data) {
      if (!node) {
        return null;
      };
      if (node.data === data) {
        return node;
      };
      return data < node.data ? 
        findWithIn(node.left, data) :
        findWithIn(node.right, data);
    };
    // throw new NotImplementedError('Not implemented');    
  }

  remove(data) {
    this.root = removeNode(this.root, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      };
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        };  
        if (!node.left) {
          node = node.right;
          return node;
        };
        if (!node.right) {
          node = node.left;
          return node;
        };

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      };
    };// throw new NotImplementedError('Not implemented');    
  };

  min() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
    // throw new NotImplementedError('Not implemented');    
  }

  max() {
    if (!this.root) {
      return;
    }
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
    // throw new NotImplementedError('Not implemented');    
  };
}

module.exports = {
  BinarySearchTree
};