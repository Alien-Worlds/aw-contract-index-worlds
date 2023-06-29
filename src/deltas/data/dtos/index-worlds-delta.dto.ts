/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:20 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { DacglobalsMongoModel } from './dacglobals.dto';
import { DacsMongoModel } from './dacs.dto';
import { NftcacheMongoModel } from './nftcache.dto';

export type DataDocumentType =
  | DacglobalsMongoModel
  | DacsMongoModel
  | NftcacheMongoModel;


export type IndexWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};
