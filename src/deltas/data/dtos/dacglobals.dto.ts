/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { Pair } from '@alien-worlds/aw-antelope';

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

