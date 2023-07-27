/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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

