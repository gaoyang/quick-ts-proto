import { Server } from '@grpc/grpc-js'
import { ExampleGrpcServiceServer, LoginResponse, SubscribeUserInfoChangedResponse } from './grpc/example'

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
