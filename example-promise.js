// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Las Vegas', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Las Vegas').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      resolve(a + b);
    } else {
      reject('Did not provide two numbers');
    }
  });
};

addPromise(3, 4).then(function(sum) {
  console.log('Add Success:', sum);
}, function(err) {
  console.log('Promise Error:', err);
});

addPromise('Hey', 3).then(function(sum) {
  console.log('Add Success:', sum);
}, function(err) {
  console.log('Promise Error:', err);
});
