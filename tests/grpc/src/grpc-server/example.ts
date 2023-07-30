/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientReadableStream,
  ClientUnaryCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
}

export interface SubscribeUserInfoChangedResponse {
  message: string;
}

function createBaseLoginRequest(): LoginRequest {
  return { username: "", password: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { success: false };
}

export const LoginResponse = {
  encode(message: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseSubscribeUserInfoChangedResponse(): SubscribeUserInfoChangedResponse {
  return { message: "" };
}

export const SubscribeUserInfoChangedResponse = {
  encode(message: SubscribeUserInfoChangedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeUserInfoChangedResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeUserInfoChangedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeUserInfoChangedResponse {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: SubscribeUserInfoChangedResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeUserInfoChangedResponse>, I>>(
    base?: I,
  ): SubscribeUserInfoChangedResponse {
    return SubscribeUserInfoChangedResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeUserInfoChangedResponse>, I>>(
    object: I,
  ): SubscribeUserInfoChangedResponse {
    const message = createBaseSubscribeUserInfoChangedResponse();
    message.message = object.message ?? "";
    return message;
  },
};

export type ExampleGrpcServiceService = typeof ExampleGrpcServiceService;
export const ExampleGrpcServiceService = {
  login: {
    path: "/ExampleGrpcService/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginRequest) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginRequest.decode(value),
    responseSerialize: (value: LoginResponse) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginResponse.decode(value),
  },
  subscribeUserInfoChanged: {
    path: "/ExampleGrpcService/SubscribeUserInfoChanged",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: SubscribeUserInfoChangedResponse) =>
      Buffer.from(SubscribeUserInfoChangedResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SubscribeUserInfoChangedResponse.decode(value),
  },
} as const;

export interface ExampleGrpcServiceServer extends UntypedServiceImplementation {
  login: handleUnaryCall<LoginRequest, LoginResponse>;
  subscribeUserInfoChanged: handleServerStreamingCall<Empty, SubscribeUserInfoChangedResponse>;
}

export interface ExampleGrpcServiceClient extends Client {
  login(
    request: LoginRequest,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  subscribeUserInfoChanged(
    request: Empty,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<SubscribeUserInfoChangedResponse>;
  subscribeUserInfoChanged(
    request: Empty,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<SubscribeUserInfoChangedResponse>;
}

export const ExampleGrpcServiceClient = makeGenericClientConstructor(
  ExampleGrpcServiceService,
  "ExampleGrpcService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ExampleGrpcServiceClient;
  service: typeof ExampleGrpcServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
