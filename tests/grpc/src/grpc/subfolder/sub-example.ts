/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
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

export interface SubExampleGrpcServiceClient extends Client {
  test(request: Empty, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  test(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  test(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const SubExampleGrpcServiceClient = makeGenericClientConstructor(
  SubExampleGrpcServiceService,
  "SubExampleGrpcService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SubExampleGrpcServiceClient;
  service: typeof SubExampleGrpcServiceService;
};
