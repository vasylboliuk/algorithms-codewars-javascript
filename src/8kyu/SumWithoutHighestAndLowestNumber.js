/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
*/
function sumArray(array) {
  if(array==null || array.length<2) return 0;
    array.sort(function(a, b){return a - b});
    var sum = 0;
    for(var i=0; i<array.length; i++){
      sum = sum + array[i];
    }
        
    return sum - array[0] - array[array.length-1];
}

console.log("Basic tests");
testing(sumArray([ 6, 2, 1, 8, 10 ]) , 16)
testing(sumArray([1, 1]) , 0)
testing(sumArray([0, 3, 2, 1]) , 3)

function testing(actual, expected){
	console.log(actual===expected);
}