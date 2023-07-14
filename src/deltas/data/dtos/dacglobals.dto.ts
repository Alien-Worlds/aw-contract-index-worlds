/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:23:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DacglobalsMongoModel
 */
export type DacglobalsMongoModel = {
  _id?: MongoDB.ObjectId;
  data?: Pair[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DacglobalsRawModel
 */
export type DacglobalsRawModel = {
  data?: Pair[];
  [key: string]: unknown;
};

