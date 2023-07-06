/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:42:04 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { HdlegovchgMongoModel, HdlegovchgRawModel } from './hdlegovchg.dto';
import { RegaccountMongoModel, RegaccountRawModel } from './regaccount.dto';
import { RegdacMongoModel, RegdacRawModel } from './regdac.dto';
import { RegrefMongoModel, RegrefRawModel } from './regref.dto';
import { SetownerMongoModel, SetownerRawModel } from './setowner.dto';
import { SetsociallnkMongoModel, SetsociallnkRawModel } from './setsociallnk.dto';
import { SetsocialsMongoModel, SetsocialsRawModel } from './setsocials.dto';
import { SetstatusMongoModel, SetstatusRawModel } from './setstatus.dto';
import { SettitleMongoModel, SettitleRawModel } from './settitle.dto';
import { UnregaccountMongoModel, UnregaccountRawModel } from './unregaccount.dto';
import { UnregdacMongoModel, UnregdacRawModel } from './unregdac.dto';
import { UnregrefMongoModel, UnregrefRawModel } from './unregref.dto';

export type DataDocumentType =
  | HdlegovchgMongoModel
  | RegaccountMongoModel
  | RegdacMongoModel
  | RegrefMongoModel
  | SetownerMongoModel
  | SetsociallnkMongoModel
  | SetsocialsMongoModel
  | SetstatusMongoModel
  | SettitleMongoModel
  | UnregaccountMongoModel
  | UnregdacMongoModel
  | UnregrefMongoModel;

export type DataRawType =
  | HdlegovchgRawModel
  | RegaccountRawModel
  | RegdacRawModel
  | RegrefRawModel
  | SetownerRawModel
  | SetsociallnkRawModel
  | SetsocialsRawModel
  | SetstatusRawModel
  | SettitleRawModel
  | UnregaccountRawModel
  | UnregdacRawModel
  | UnregrefRawModel;

export type IndexWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_number?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  receiver_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type IndexWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};

