console.log('hello from the other side');

// process.stdin.on('end', () => {
//   console.log('child process stdin end');
//   process.exit(0);
// });

process.stdin.on('data', () => {
  console.log('stdin data');
});

process.stdin.on('end', () => {
  console.log('stdin end');
});
