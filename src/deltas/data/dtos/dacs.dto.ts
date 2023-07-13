/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:12:37 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedSymbolMongoModel, Pair, ExtendedSymbolRawModel } from '@alien-worlds/eosio-contract-types';

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
  refs?: Pair[];
  accounts?: Pair[];
  dac_state?: number;
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
  refs?: Pair[];
  accounts?: Pair[];
  dac_state?: number;
  [key: string]: unknown;
};

