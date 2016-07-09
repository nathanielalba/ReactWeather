var names = ['Andrew', 'Nate', 'Christine'];
//
// names.forEach(function(name) {
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Nate'));

// var person = {
//   name: 'Nate',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }
//
// person.greet();


function add (a, b) {
  return a + b;
}

var addTwo = (a, b) => {
  return (a + b);
}

var someShit = (name, home) => {
  return `Hi I'm ${name} from ${home}`;
}

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addTwo(1, 2));
console.log(someShit('Nate', 'Las Vegas'));
