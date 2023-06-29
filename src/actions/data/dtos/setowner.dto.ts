/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
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

