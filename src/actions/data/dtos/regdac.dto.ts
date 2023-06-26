/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 26 Jun 2023 14:33:41 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedSymbolMongoModel, ExtendedSymbolRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RegdacMongoModel
 */
export type RegdacMongoModel = {
  _id?: MongoDB.ObjectId;
  owner?: string;
  dac_id?: string;
  dac_symbol?: ExtendedSymbolMongoModel;
  title?: string;
  refs?: PairUint8StringMongoModel[];
  accounts?: PairUint8NameMongoModel[];
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
 * @typedef {Object} RegdacRawModel
 */
export type RegdacRawModel = {
  owner?: string;
  dac_id?: string;
  dac_symbol?: ExtendedSymbolRawModel;
  title?: string;
  refs?: PairUint8StringRawModel[];
  accounts?: PairUint8NameRawModel[];
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

