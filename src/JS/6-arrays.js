// Arrays
let marks = [23, 45, 67, 67, 34, 56];
marks[7] = 45; //adding new element in array
marks[3] = 99; //changing the value
for (let i in marks) {
  console.log(marks[i]);
}

//convert array to string
let b = marks.toString();
console.log(b);
//using join
let c = marks.join("_");
console.log(c);
//pop method
marks.pop(); //removes the element from the end
console.log(marks);
//push method
marks.push(45); //add the alemet at the end
console.log(marks);
//Shift and Unshift method
marks.shift(); //removes first element
console.log(marks);
marks.unshift(123); //adds element at the begning
console.log(marks);
//deelte element in array
delete marks[0]; //using delete ther is no change in array length
console.log(marks, marks.length);
//concat arrays
let names=["sareena","Ahmad","Mohammad"]
let age=[12,11,14]
let numage=names.concat(age)
console.log(numage)
