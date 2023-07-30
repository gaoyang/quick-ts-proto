import { Server, ServerCredentials } from '@grpc/grpc-js'
import {
  ExampleGrpcServiceServer,
  ExampleGrpcServiceService,
  LoginResponse,
  SubscribeUserInfoChangedResponse
} from './grpc/example'

const exampleGrpcServiceImpl: ExampleGrpcServiceServer = {
  login(call, callback) {
    const response: LoginResponse = {
      success: false
    }
    callback(null, response)
  },
  subscribeUserInfoChanged(call) {
    const response: SubscribeUserInfoChangedResponse = {
      message: 'test'
    }
    call.write(response)
    call.end()
  }
}

const server = new Server()
server.addService(ExampleGrpcServiceService, exampleGrpcServiceImpl)
server.bindAsync('localhost:5555', ServerCredentials.createInsecure(), (_, port) => {
  server.start()
  console.log(`listening localhost:${port}`)
})
