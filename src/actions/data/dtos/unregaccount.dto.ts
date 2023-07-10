/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 09:37:42 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UnregaccountMongoModel
 */
export type UnregaccountMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  type?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnregaccountRawModel
 */
export type UnregaccountRawModel = {
  dac_id?: string;
  type?: number;
  [key: string]: unknown;
};

