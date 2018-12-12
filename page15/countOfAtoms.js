/**
* 726. Number of Atoms
* https://leetcode.com/problems/number-of-atoms/
*/

/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  let stack = [{}];
  let mergePrev = false;
  let upper = /[A-Z]/,
      lower = /[a-z]/,
      digit = /[0-9]/,
      atomNames = new Set(),
      atom = "",
      times = "";

  for (let i = 0; i < formula.length; i ++) {
    let c = formula[i];
    if (digit.test(c)) {
      times += c;
    } else if (lower.test(c)) {
      atom += c;
    } else {
      let k = times === "" ? 1 : parseInt(times);
      if (mergePrev) {
        let curr = stack.pop();
        product(curr, k);
        merge(stack[stack.length - 1], curr);
        mergePrev = false;
      } else {
        if (atom !== "") {
          setAtom(stack[stack.length - 1], atom, k, atomNames);
        }
      }
      times = "";
      atom = "";
      if (upper.test(c)) {
        atom = c;
      } else if (c === "(") {
        stack.push({});
      } else if (c === ")") {
        mergePrev = true;
      }
    }
  }
  let k = times === "" ? 1 : parseInt(times);
  if (mergePrev) {
    let curr = stack.pop();
    product(curr, k);
    merge(stack[stack.length - 1], curr);
    mergePrev = false;
  } else {
    if (atom !== "") {
      setAtom(stack[stack.length - 1], atom, k, atomNames);
    }
  }
  return objToString(stack[0], atomNames);
};

function merge (obj1, obj2) {
  if (!obj2) return;
  for (let key in obj2) {
    if (obj1[key] == null) {
      obj1[key] = obj2[key];
    } else {
      obj1[key] += obj2[key];
    }
  }
}

function product (obj, k) {
  if (k === 1) return;
  for (let key in obj) {
    obj[key] *= k;
  }
}

function setAtom (obj, atom, k, atomNames) {
  atomNames.add(atom);
  if (obj[atom] != null) {
    obj[atom] += k;
  } else {
    obj[atom] = k;
  }
}

function objToString(obj, atomNames) {
  let names = Array.from(atomNames);
  names.sort();
  let str = "";
  for (let name of names) {
    str += name;
    if (obj[name] > 1) {
      str += obj[name];
    }
  }
  return str;
}

// Runtime: 56 ms, faster than 91.30% of JavaScript online submissions for Number of Atoms.
