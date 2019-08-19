var _child_process = require('child_process');

function start() {
  const childProcess = _child_process.fork(__dirname + '/logger.js', null, {
    silent: true
  });
  childProcess.stdout.pipe(process.stdout);
  process.stdin.pipe(childProcess.stdin);
  //   process.stdin.resume();
  //   process.stdin.on('data', () => {
  //     console.log('stdin data');
  //   });

  //   process.stdin.on('end', () => {
  //     console.log('stdin end');
  //   });

  //   process.stdin.on('close', () => {
  //     console.log('stdin close');
  //   });
  //   removeLastListener(process.stdin, 'data');
  //   removeLastListener(process.stdin, 'end');
  //   removeLastListener(process.stdin, 'close');
  //   removeLastListener(process.stdin, 'error');
  //   removeLastListener(process.stdin, 'pause');
  //   removeLastListener(process.stdin, 'readable');
  //   removeLastListener(process.stdin, 'resume');
  //   process.stdin.unref();
}

start();

function removeLastListener(target, eventName) {
  const listener = target.listeners(eventName).reverse()[0];

  if (listener) {
    target.removeListener(eventName, listener);
  }
}
