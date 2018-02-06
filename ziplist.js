let arrayA = ['a', 'b', 'c'];
let arrayB = [1,2,3];

function ziplist(first,second){
  const final = [];
  for(let i = 0; i<first.length; i++){
    final.push(first[i],second[i]);
  }
  return final;
}

console.log(ziplist(arrayA, arrayB));

function zipListTheSimpleWay(first,second) {
  return _.flatten(_.zip(first,second));
}

console.log(zipListTheSimpleWay(arrayA, arrayB));
