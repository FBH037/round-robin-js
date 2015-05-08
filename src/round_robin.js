function roundRobin(input){
  if(_.isEqual(input, [])){
    return input;
  }
  else{
    if(input.length%2 !== 0){
      input.push('(none)');
    }
    var z = [];
    var a1 = _.chunk(input, input.length/2)[0];
    var a2 = _.chunk(input, input.length/2)[1].reverse();
    var result = [_.zip(a1, a2)];
    for(var i=1;i< (input.length -1); i++){
      a2.push(a1.pop());
      z.unshift(a1.shift());
      a1.unshift(a2.shift());
      a1.unshift(z.shift());
      result[i] = _.zip(a1, a2);
    }
    return  result;
  }

}

//
//
// function roundRobin(input){
//   if (_.isEqual(input, []))
//     return input
//   else{
//
//    if (input.length %2 !== 0 )
//     input.push('(none)')
//
//     for(var i = 0; i < 1; i++){
//     var inputCopy = input.slice()
//
//      //first element
//      var firstHalf = _.slice(inputCopy, [start=0], [inputCopy.length/2])
//      var secondHalf = _.slice(inputCopy, [inputCopy.length/2], [inputCopy.length])
//      secondHalf = secondHalf.reverse()
//      var firstElement = _.zip(firstHalf, secondHalf)
//      console.log(firstElement)
//     }
//
//    //second element
//    var middleSlice = _.slice(input, [2], [5])
//    var beginSlice = _.slice(input, [0], [2])
//    middleSlice = middleSlice.reverse()
//     beginSlice.push(input[5])
//    beginSlice.push( _.pullAt(beginSlice, [1])[0])
//   var secondElement = _.zip(beginSlice, middleSlice)
//
//
//    //third element
//    var middleSlice3 = _.slice(input, [1], [4])
//    var endSlice = _.slice(input, [4], [6])
//    middleSlice3 = middleSlice3.reverse()
//    endSlice.unshift(input[0])
//   //  console.log()
//    var thirdElement = _.zip(endSlice, middleSlice3)
//
//    //fourth element
//    var middleSlice4 = _.slice(input, [3], [5])
//    middleSlice4.unshift(input[0])
//    outerSlice4 = [input[2], input[1],input[5]]
//    var fourthElement = _.zip(middleSlice4, outerSlice4)
//
//    //fifth
//    var middleSlice5 = _.slice(input, [2], [4])
//    middleSlice5.unshift(input[0])
//    outerSlice5 = [input[1], input[5],input[4]]
//    var fifthElement = _.zip(middleSlice5, outerSlice5)
//
//     return [firstElement, secondElement, thirdElement, fourthElement, fifthElement]
//   }
//     // [_.chunk(input, 2)]
// };
