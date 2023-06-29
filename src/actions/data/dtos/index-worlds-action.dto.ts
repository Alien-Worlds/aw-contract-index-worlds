/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:20 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { HdlegovchgMongoModel } from './hdlegovchg.dto';
import { RegaccountMongoModel } from './regaccount.dto';
import { RegdacMongoModel } from './regdac.dto';
import { RegrefMongoModel } from './regref.dto';
import { SetownerMongoModel } from './setowner.dto';
import { SetsociallnkMongoModel } from './setsociallnk.dto';
import { SetsocialsMongoModel } from './setsocials.dto';
import { SetstatusMongoModel } from './setstatus.dto';
import { SettitleMongoModel } from './settitle.dto';
import { UnregaccountMongoModel } from './unregaccount.dto';
import { UnregdacMongoModel } from './unregdac.dto';
import { UnregrefMongoModel } from './unregref.dto';

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

