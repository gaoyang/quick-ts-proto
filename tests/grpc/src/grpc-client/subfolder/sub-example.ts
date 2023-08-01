/* eslint-disable */
import { Empty } from "../google/protobuf/empty";

export const protobufPackage = "";

export interface SubExampleGrpcService {
  Test(request: Empty): Promise<Empty>;
}
