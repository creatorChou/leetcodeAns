/**
 * Initialize your data structure here.
 */
var Trie = function() {
	this.head = new Tree();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
	let node = this.head,
			newNode = null,
			index;
	for (var i = 0; i < word.length; i ++) {
		index = word.charCodeAt(i) - 97;
		if (node.nexts[index]) {
			newNode = node.nexts[index];
		} else {
			newNode = new Tree();
			node.nexts[index] = newNode;
		}
		node = newNode;
	}
	newNode.isTail = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
	let node = this.head,
			newNode = null,
			index, i;

	for (i = 0; i < word.length; i ++) {
		index = word.charCodeAt(i) - 97;
		if (node.nexts[index]) {
			newNode = node.nexts[index];
		} else {
			return false;
		}
		node = newNode;
	}
	return newNode.isTail;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
	let node = this.head,
			newNode = null,
			index, i;

	for (i = 0; i < prefix.length; i ++) {
		index = prefix.charCodeAt(i) - 97;
		if (node.nexts[index]) {
			newNode = node.nexts[index];
		} else {
			return false;
		}
		node = newNode;
	}
	return true;
};

function Tree () {
	this.isTail = false;
	this.nexts = new Array(26);
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
