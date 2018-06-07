var longestMountain = function(A) {
    if (A.length < 3) return 0;
    var mountains = [],
        status = 0,
        output = 0;
    
    for(var i = 1; i<A.length; i++) {
        if (A[i] > A[i-1]) {
            if (status === 0) {
                mountains.push([A[i-1], A[i]]);
                status = 1;
            } else  if (status === 1) {
                mountains[mountains.length - 1].push(A[i]);
            } else if (status === 2) {
                mountains.push([A[i-1], A[i]]);
                status = 1;
            }
        } else if (A[i] < A[i-1]) {
            if (status === 0) {
                continue;
            } else  if (status === 1) {
                mountains[mountains.length - 1].push(A[i]);
                status = 2;
            } else if (status === 2) {
                mountains[mountains.length - 1].push(A[i]);
            }
        } else {
            status = 0;
            continue;
        }
    }

    var maxIndex,
        j = 0,
        pass = false;
    for(i=0; i<mountains.length; i++) {
        if (mountains[i].length < 3) {
            continue;
        }
        maxIndex = mountains[i].length - 1;
        for(j=0; j<mountains[i].length - 1; j++) {
            if (mountains[i][j] > mountains[i][maxIndex]) {
                pass = true;
                break;
            }
        }
        if (pass) {
            output = output > mountains[i].length ? output : mountains[i].length;
        }
    }

    return output;
};


var arr = [0,1,2,3,4,5,6,7,8,9]
var otpt = longestMountain(arr);

console.log("output:" + otpt);
