/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { DacglobalsMongoModel, DacglobalsRawModel } from './dacglobals.dto';
import { DacsMongoModel, DacsRawModel } from './dacs.dto';
import { NftcacheMongoModel, NftcacheRawModel } from './nftcache.dto';

export type DataDocumentType =
  | DacglobalsMongoModel
  | DacsMongoModel
  | NftcacheMongoModel;

export type DataRawType =
  | DacglobalsRawModel
  | DacsRawModel
  | NftcacheRawModel;


export type IndexWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_num?: MongoDB.Long;
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

export type IndexWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_num: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
