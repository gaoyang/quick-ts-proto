'use strict'

const fs = require('fs')
const path = require('path')
const cp = require('child_process')

const getDirs = dir => {
  const result = []

  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      result.push(filePath)
      result.push(...getDirs(filePath))
    }
  }

  return result
}

module.exports = function genGrpc(args, stdout, stderr) {
  try {
    const protoDir = path.resolve(process.cwd(), args[0])
    const outDir = path.resolve(process.cwd(), args[1])

    if (fs.existsSync(outDir)) {
      fs.rmSync(outDir, { recursive: true, force: true })
    }
    fs.mkdirSync(outDir, { recursive: true })

    const protoc = path.resolve(__dirname, '../../node_modules/.bin/grpc_tools_node_protoc')
    const plugin = path.resolve(
      __dirname,
      '../../node_modules/.bin/protoc-gen-ts_proto' + (process.platform === 'win32' ? '.cmd' : '')
    )

    const command = []
    command.push(protoc)
    command.push(`--plugin=protoc-gen-ts_proto=${plugin}`)
    command.push(`--ts_proto_out=${outDir}`)
    command.push(
      `--ts_proto_opt=env=browser,outputClientImpl=grpc-web${
        args[2] === '--only-types' ? ',outputEncodeMethods=false' : ''
      }`
    )

    command.push(`-I=${protoDir} ${protoDir}/*.proto`)
    getDirs(protoDir).forEach(dir => {
      console.log(dir);
      command.push(` ${dir}/*.proto`)
    })

    const promise = new Promise((resolve, reject) => {
      const child_process = cp.exec(command.join(' '), (error, stdout, stderr) => {
        if (error) {
          return reject(error)
        }
        return resolve(null)
      })

      child_process.stdout.pipe(stdout)
      child_process.stderr.pipe(stderr)
    })

    return promise
  } catch (err) {
    console.error('ERROR:', err.message)
    return Promise.reject(err)
  }
}
