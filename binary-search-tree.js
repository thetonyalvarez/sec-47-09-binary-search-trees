class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses iteration. */

	insert(val) {
		let newNode = new Node(val);
		if (this.root == null) {
			this.root = new Node(val);
			return this;
		}

		let curr = this.root;

		while (true) {
			// if arg val is lower than the curr val...
			if (val < curr.val) {
				// then check if the current left val is empty
				if (curr.left == null) {
					// if so, make the arg val the current.left val
					curr.left = newNode;
					return this;
					// if curr.left val is not empty, then set curr val to curr.left val to traverse down the next level in tree
				} else if (curr.left) {
					curr = curr.left;
				}
			}
			// if arg val is lower than the curr val...
			else if (val > curr.val) {
				// then check if the current left val is empty
				if (curr.right == null) {
					// if so, make the arg val the current.left val
					curr.right = newNode;
					return this;
					// if curr.left val is not empty, then set curr val to curr.left val to traverse down the next level in tree
				} else if (curr.right) {
					curr = curr.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
	 * Returns the tree. Uses recursion. */

	insertRecursively(val, curr = this.root) {
		if (this.root == null) {
			this.root = new Node(val);
			return this;
		}

		if (curr == null) return;

		if (val < curr.val) {
			if (curr.left == null) {
				curr.left = new Node(val);
				return this;
			}
			return this.insertRecursively(val, curr.left);
		} else {
			if (curr.right == null) {
				curr.right = new Node(val);
				return this;
			}
			return this.insertRecursively(val, curr.right);
		}
	}

	/** find(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses iteration. */

	find(val, curr = this.root) {
		while (curr != null) {
			if (curr.val == val) {
				return curr;
			}
			if (val > curr.val) {
				curr = curr.right;
			} else if (val < curr.val) {
				curr = curr.left;
			}
		}
		return;
	}

	/** findRecursively(val): search the tree for a node with value val.
	 * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
	 * Return an array of visited nodes. */

	dfsPreOrder() {}

	/** dfsInOrder(): Traverse the array using in-order DFS.
	 * Return an array of visited nodes. */

	dfsInOrder() {}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
	 * Return an array of visited nodes. */

	dfsPostOrder() {}

	/** bfs(): Traverse the array using BFS.
	 * Return an array of visited nodes. */

	bfs() {}

	/** Further Study!
	 * remove(val): Removes a node in the BST with the value val.
	 * Returns the removed node. */

	remove(val) {}

	/** Further Study!
	 * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
	 * findSecondHighest(): Find the second highest value in the BST, if it exists.
	 * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
