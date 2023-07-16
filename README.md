# quick-ts-proto

A CLI tool to quickly generate gRPC code.

## 💿 Installation

```bash
$ npm install quick-ts-proto --save-dev
# or
$ pnpm add -D quick-ts-proto
# or
$ yarn add quick-ts-proto --dev
```

## 📖 Usage

### CLI Commands

This `quick-ts-proto` package currently provides 1 CLI commands.

#### `gen-grpc-web` command

```
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
```

Install necessary tools:
```
npm install protobufjs long rxjs browser-headers @improbable-eng/grpc-web
```

Code example.
```ts
import { ExampleGrpcServiceClientImpl, GrpcWebImpl } from './grpc/example'

const rpc = new GrpcWebImpl('http://localhost:9090', {})
const client = new ExampleGrpcServiceClientImpl(rpc)
client.SubscribeUserInfoChanged({}).subscribe(response => {
  console.log(response.message)
})
```
