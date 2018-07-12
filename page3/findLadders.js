/**
* 126. Word Ladder II
* https://leetcode.com/problems/word-ladder-ii/description/
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return [];
  let result = [];
  backtrack(result, [beginWord], wordList, endWord);
  return result;
};

var backtrack = function (result, arr, wordList, endWord) {
  let word = arr[arr.length - 1];
  if (word === endWord) {
    if (result.length > 0) {
      let len = result[0].length;
      if (len > arr.length) {
        result.length = 0;
        result.push(arr.slice());
      } else if (len === arr.length) {
        result.push(arr.slice());
      }
    } else {
      result.push(arr.slice());
    }
    return;
  }
  let tempArr = [], dict, diff, i, j;
  for (i = 0; i < wordList.length; i ++) {
    dict = wordList[i];
    if (arr.indexOf(dict) !== -1) {
      continue;
    }
    diff = 0;
    for (j = 0; j < dict.length; j ++) {
      if (dict[j] !== word[j]) {
        diff ++;
      }
    }
    if (diff < 2) {
      tempArr.push(dict);
    }
  }
  if (tempArr.length > 0) {
    let passArr = [], minDiff = Number.MAX_VALUE;
    for (i = 0; i < tempArr.length; i ++) {
      diff = 0;
      for (j = 0; j < dict.length; j ++) {
        if (tempArr[i][j] !== endWord[j]) {
          diff ++;
        }
      }
      if (diff < minDiff) {
        minDiff = diff;
        passArr.length = 0;
        passArr.push(tempArr[i]);
      } else if (diff === minDiff) {
        passArr.push(tempArr[i]);
      }
    }
    for (i = 0; i < passArr.length; i ++) {
      arr.push(passArr[i]);
      backtrack(result, arr, wordList, endWord);
      arr.pop();
    }
  }
}

// Time Limit Exceeded

var findLadders2 = function (beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) === -1) return [];
  let result = [];
  let compareList = [[beginWord]],
      temp, i, j, arr, list;
  while (result.length === 0) {
    // console.log(compareList)
    len = compareList.length;
    for (i = 0; i < len; i ++) {
      arr = compareList.shift();
      temp = wordList.filter(word => canTrans(word, arr));
      console.log(temp)
      if (temp.length === 0) {
        return result;
      }
      for (j = 0; j < temp.length; j ++) {
        list = arr.slice();
        list.push(temp[j]);
        compareList.push(list);
        // console.log(temp[j])
        if (temp[j] === endWord) {
          result.push(list);
        }
      }
    }
  }
  return result;
}

var canTrans = function(word, arr) {
  if (arr.indexOf(word) !== -1) return false;
  let diff = 0;
  for (let i = 0; i < word.length; i ++) {
    if (word[i] !== arr[arr.length - 1][i]) {
      diff ++;
    }
  }
  return diff < 2;
}

var getDiff = function(word, target) {
  let diff = 0;
  for (let i = 0; i < word.length; i ++) {
    if (word[i] !== target[i]) {
      diff ++;
    }
  }
  return diff;
}

let arr = ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"];
let arr2 = ["ion","rev","che","ind","lie","wis","oct","ham","jag","ray","nun","ref","wig","jul","ken","mit","eel","paw","per","ola","pat","old","maj","ell","irk","ivy","beg","fan","rap","sun","yak","sat","fit","tom","fin","bug","can","hes","col","pep","tug","ump","arc","fee","lee","ohs","eli","nay","raw","lot","mat","egg","cat","pol","fat","joe","pis","dot","jaw","hat","roe","ada","mac"];
let arr3 = ["kid","tag","pup","ail","tun","woo","erg","luz","brr","gay","sip","kay","per","val","mes","ohs","now","boa","cet","pal","bar","die","war","hay","eco","pub","lob","rue","fry","lit","rex","jan","cot","bid","ali","pay","col","gum","ger","row","won","dan","rum","fad","tut","sag","yip","sui","ark","has","zip","fez","own","ump","dis","ads","max","jaw","out","btu","ana","gap","cry","led","abe","box","ore","pig","fie","toy","fat","cal","lie","noh","sew","ono","tam","flu","mgm","ply","awe","pry","tit","tie","yet","too","tax","jim","san","pan","map","ski","ova","wed","non","wac","nut","why","bye","lye","oct","old","fin","feb","chi","sap","owl","log","tod","dot","bow","fob","for","joe","ivy","fan","age","fax","hip","jib","mel","hus","sob","ifs","tab","ara","dab","jag","jar","arm","lot","tom","sax","tex","yum","pei","wen","wry","ire","irk","far","mew","wit","doe","gas","rte","ian","pot","ask","wag","hag","amy","nag","ron","soy","gin","don","tug","fay","vic","boo","nam","ave","buy","sop","but","orb","fen","paw","his","sub","bob","yea","oft","inn","rod","yam","pew","web","hod","hun","gyp","wei","wis","rob","gad","pie","mon","dog","bib","rub","ere","dig","era","cat","fox","bee","mod","day","apr","vie","nev","jam","pam","new","aye","ani","and","ibm","yap","can","pyx","tar","kin","fog","hum","pip","cup","dye","lyx","jog","nun","par","wan","fey","bus","oak","bad","ats","set","qom","vat","eat","pus","rev","axe","ion","six","ila","lao","mom","mas","pro","few","opt","poe","art","ash","oar","cap","lop","may","shy","rid","bat","sum","rim","fee","bmw","sky","maj","hue","thy","ava","rap","den","fla","auk","cox","ibo","hey","saw","vim","sec","ltd","you","its","tat","dew","eva","tog","ram","let","see","zit","maw","nix","ate","gig","rep","owe","ind","hog","eve","sam","zoo","any","dow","cod","bed","vet","ham","sis","hex","via","fir","nod","mao","aug","mum","hoe","bah","hal","keg","hew","zed","tow","gog","ass","dem","who","bet","gos","son","ear","spy","kit","boy","due","sen","oaf","mix","hep","fur","ada","bin","nil","mia","ewe","hit","fix","sad","rib","eye","hop","haw","wax","mid","tad","ken","wad","rye","pap","bog","gut","ito","woe","our","ado","sin","mad","ray","hon","roy","dip","hen","iva","lug","asp","hui","yak","bay","poi","yep","bun","try","lad","elm","nat","wyo","gym","dug","toe","dee","wig","sly","rip","geo","cog","pas","zen","odd","nan","lay","pod","fit","hem","joy","bum","rio","yon","dec","leg","put","sue","dim","pet","yaw","nub","bit","bur","sid","sun","oil","red","doc","moe","caw","eel","dix","cub","end","gem","off","yew","hug","pop","tub","sgt","lid","pun","ton","sol","din","yup","jab","pea","bug","gag","mil","jig","hub","low","did","tin","get","gte","sox","lei","mig","fig","lon","use","ban","flo","nov","jut","bag","mir","sty","lap","two","ins","con","ant","net","tux","ode","stu","mug","cad","nap","gun","fop","tot","sow","sal","sic","ted","wot","del","imp","cob","way","ann","tan","mci","job","wet","ism","err","him","all","pad","hah","hie","aim","ike","jed","ego","mac","baa","min","com","ill","was","cab","ago","ina","big","ilk","gal","tap","duh","ola","ran","lab","top","gob","hot","ora","tia","kip","han","met","hut","she","sac","fed","goo","tee","ell","not","act","gil","rut","ala","ape","rig","cid","god","duo","lin","aid","gel","awl","lag","elf","liz","ref","aha","fib","oho","tho","her","nor","ace","adz","fun","ned","coo","win","tao","coy","van","man","pit","guy","foe","hid","mai","sup","jay","hob","mow","jot","are","pol","arc","lax","aft","alb","len","air","pug","pox","vow","got","meg","zoe","amp","ale","bud","gee","pin","dun","pat","ten","mob"]
// console.log(findLadders2("qa", "sq", arr));
// console.log(findLadders2("cat", "fin", arr2));
console.log(findLadders2("cet", "ism", arr3));
