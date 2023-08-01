/* eslint-disable */
import { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "../google/protobuf/empty";

export const protobufPackage = "";

export type SubExampleGrpcServiceService = typeof SubExampleGrpcServiceService;
export const SubExampleGrpcServiceService = {
  test: {
    path: "/SubExampleGrpcService/Test",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface SubExampleGrpcServiceServer extends UntypedServiceImplementation {
  test: handleUnaryCall<Empty, Empty>;
}
