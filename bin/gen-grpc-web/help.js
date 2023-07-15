'use strict'

module.exports = function printHelp(output) {
  output.write(`
Usage:
  $ gen-grpc-web [--help | -h | --version | -v]
  $ gen-grpc-web [protobufDir] [outDir] [OPTIONS]

  Generate grpc-web client code based on protobuf files.

  <protobufDir> : A folder containing protobuf files (*.proto).

  <outDir> : The output directory of TypeScript code.

Options:
  --only-types   - - - - - - the Message.encode and Message.decode methods for
                             working with protobuf-encoded/binary data will not be output.

Examples:
  $ gen-grpc-web ./proto ./src/grpc
`)

  return Promise.resolve(null)
}
