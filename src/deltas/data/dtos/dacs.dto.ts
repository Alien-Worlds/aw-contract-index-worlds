/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:09 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedSymbolMongoModel, ExtendedSymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DacsMongoModel
 */
export type DacsMongoModel = {
  _id?: MongoDB.ObjectId;
  owner?: string;
  dac_id?: string;
  title?: string;
  symbol?: ExtendedSymbolMongoModel;
  refs?: PairUint8StringMongoModel[];
  accounts?: PairUint8NameMongoModel[];
  dac_state?: number;
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairUint8StringMongoModel
 */
export type PairUint8StringMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: number;
  value?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairUint8NameMongoModel
 */
export type PairUint8NameMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: number;
  value?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DacsRawModel
 */
export type DacsRawModel = {
  owner?: string;
  dac_id?: string;
  title?: string;
  symbol?: ExtendedSymbolRawModel;
  refs?: PairUint8StringRawModel[];
  accounts?: PairUint8NameRawModel[];
  dac_state?: number;
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairUint8StringRawModel
 */
export type PairUint8StringRawModel = {
  key?: number;
  value?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairUint8NameRawModel
 */
export type PairUint8NameRawModel = {
  key?: number;
  value?: string;
  [key: string]: unknown;
};

