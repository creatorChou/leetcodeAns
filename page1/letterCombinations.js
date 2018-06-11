/**
* Letter Combinations of a Phone Number
* https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const valueMap = {
    "2": function () {
      return {
        list: ["a", "b", "c"],
        currentIndex: 0
      }
    },
    "3": function () {
      return {
        list: ["d", "f", "e"],
        currentIndex: 0
      }
    },
    "4": function () {
      return {
        list: ["g", "h", "i"],
        currentIndex: 0
      }
    },
    "5": function () {
      return {
        list: ["j", "k", "l"],
        currentIndex: 0
      }
    },
    "6": function () {
      return {
        list: ["m", "n", "o"],
        currentIndex: 0
      }
    },
    "7": function () {
      return {
        list: ["p", "q", "r", "s"],
        currentIndex: 0
      }
    },
    "8": function () {
      return {
        list: ["t", "u", "v"],
        currentIndex: 0
      }
    },
    "9": function () {
      return {
        list: ["w", "x", "y", "z"],
        currentIndex: 0
      }
    }
  };

  let objList = digits.split("").map(s => valueMap[s]());

  console.log(objList);
};

var generator = function(s, parent) {
  this.parent = parent;
  switch(s) {
    case "":
      this.list = ["a", "b", "c"]
      break;
    case "":
      this.list = []
      break;
    case "":
      this.list = []
      break;
    case "":
      this.list = []
      break;
    case "":
      this.list = []
      break;
    case "":
      this.list = []
      break;
    case "":
      this.list = []
      break;
    case "":
      this.list = []
      break;
    default:
      break;
  }
}

letterCombinations("792");
