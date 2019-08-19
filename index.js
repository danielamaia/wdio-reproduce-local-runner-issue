const Launcher = require('@wdio/cli').default;

async function main(spec) {
  const wdioLauncher = new Launcher('wdio.conf.js', {
    specs: [spec]
  });
  await wdioLauncher.run((a, b, c) => {});
}

main('specs.js');
main('specs1.js');
