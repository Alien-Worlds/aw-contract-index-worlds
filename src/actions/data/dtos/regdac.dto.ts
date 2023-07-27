/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedSymbolMongoModel, Pair, ExtendedSymbolRawModel } from '@alien-worlds/aw-antelope';

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
  refs?: Pair[];
  accounts?: Pair[];
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
  refs?: Pair[];
  accounts?: Pair[];
  [key: string]: unknown;
};

