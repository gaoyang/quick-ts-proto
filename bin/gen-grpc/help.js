'use strict'

module.exports = function printHelp(output) {
  output.write(`
Usage:
  $ gen-grpc [--help | -h | --version | -v]
  $ gen-grpc [protobufDir] [outDir] [OPTIONS]

  Generate grpc code based on protobuf files.

  <protobufDir> : A folder containing protobuf files (*.proto).

  <outDir> : The output directory of TypeScript code.

  <OPTIONS> : Generates server and client code by default.

Options:
  --server       - - - - - - generate server code only.

  --client       - - - - - - generate client code only.

Examples:
  $ gen-grpc ./proto ./src/grpc
`)

  return Promise.resolve(null)
}
