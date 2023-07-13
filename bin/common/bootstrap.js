'use strict'

module.exports = function bootstrap(name) {
  const argv = process.argv.slice(2)

  switch (argv[0]) {
    case undefined:
    case '-h':
    case '--help':
      return require(`../${name}/help`)(process.stdout)

    case '-v':
    case '--version':
      return require('./version')(process.stdout)

    default:
      process.stdout.setMaxListeners(0)
      process.stderr.setMaxListeners(0)
      process.stdin.setMaxListeners(0)

      // Main
      return require(`../${name}/main`)(argv, process.stdout, process.stderr).then(
        () => {
          process.exit(0)
        },
        () => {
          process.exit(1)
        }
      )
  }
}
