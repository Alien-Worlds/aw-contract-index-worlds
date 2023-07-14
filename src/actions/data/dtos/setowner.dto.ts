/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:23:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} SetownerMongoModel
 */
export type SetownerMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  new_owner?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} SetownerRawModel
 */
export type SetownerRawModel = {
  dac_id?: string;
  new_owner?: string;
  [key: string]: unknown;
};

