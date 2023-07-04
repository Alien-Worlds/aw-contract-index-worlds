/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:08 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} SetsocialsMongoModel
 */
export type SetsocialsMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  active?: boolean;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} SetsocialsRawModel
 */
export type SetsocialsRawModel = {
  dac_id?: string;
  active?: boolean;
  [key: string]: unknown;
};

