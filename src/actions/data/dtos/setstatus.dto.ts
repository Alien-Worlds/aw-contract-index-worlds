/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 13 Jul 2023 08:12:37 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} SetstatusMongoModel
 */
export type SetstatusMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  value?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} SetstatusRawModel
 */
export type SetstatusRawModel = {
  dac_id?: string;
  value?: number;
  [key: string]: unknown;
};

