import { ExampleGrpcServiceClientImpl, GrpcWebImpl } from './grpc/example'

const rpc = new GrpcWebImpl('http://localhost:5555', {})
const client = new ExampleGrpcServiceClientImpl(rpc)
client.SubscribeUserInfoChanged({}).subscribe(response => {
  document.body.innerText += response.message
})
