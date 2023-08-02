/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty";

export const protobufPackage = "";

export interface SubExampleGrpcService {
  Test(request: Empty): Promise<Empty>;
}

export const SubExampleGrpcServiceServiceName = "SubExampleGrpcService";
export class SubExampleGrpcServiceClientImpl implements SubExampleGrpcService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || SubExampleGrpcServiceServiceName;
    this.rpc = rpc;
    this.Test = this.Test.bind(this);
  }
  Test(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Test", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
