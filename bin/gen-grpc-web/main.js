'use strict'

const fs = require('fs')
const path = require('path')
const cp = require('child_process')

module.exports = function genGrpcWeb(args, stdout, stderr) {
  try {
    const protoDir = args[0]
    const outDir = args[1]

    if (fs.existsSync(outDir)) {
      fs.rmSync(outDir, { recursive: true, force: true })
    }
    fs.mkdirSync(outDir, { recursive: true })

    var protoc = path.resolve(__dirname, '../../node_modules/.bin/grpc_tools_node_protoc')
    var plugin = path.resolve(__dirname, '../../node_modules/.bin/protoc-gen-ts_proto')

    var args = ['--plugin=protoc-gen-ts_proto=' + plugin].concat(args.slice(3))

    args.push(`--ts_proto_out=${outDir}`)
    args.push(`-I=${protoDir} ${protoDir}/*.proto`)

    const promise = new Promise((resolve, reject) => {
      var child_process = cp.execFile(protoc, args, function (error, stdout, stderr) {
        if (error) {
          return reject(error)
        }
        return resolve(null)
      })

      child_process.stdout.pipe(stdout)
      child_process.stderr.pipe(stderr)
    })

    promise.catch(err => {
      console.error('ERROR:', err.message)
    })

    return promise
  } catch (err) {
    console.error('ERROR:', err.message)
    return Promise.reject(err)
  }
}
