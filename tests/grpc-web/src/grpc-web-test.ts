import { ExampleGrpcServiceClientImpl, GrpcWebImpl } from '../gen/example'

const rpc = new GrpcWebImpl('http://localhost:9090', {})
const client = new ExampleGrpcServiceClientImpl(rpc)
client.SubscribeUserInfoChanged({}).subscribe(response => {
  console.log(response.message)
})
