const foo = function(item, key) {
	if (item.id === key) {
		// 匹配到了
		return item;
	} else {
		// 未匹配到
		if (item.hasOwnProperty("children")) {
			// 有children
			let children = item.children;
			// 判断children[i]有没有结果，如果有，则返回结果的对象，如果没有，则返回null或者false
			for (let i = 0; i < children.length; i ++) {
				let result = foo(children[i], key);
				if (result) return result;
			}
		}
		// 根本就没children属性，或者整个循环都没有return,则代表没有找到。返回null或者false
		return null
	}
}
