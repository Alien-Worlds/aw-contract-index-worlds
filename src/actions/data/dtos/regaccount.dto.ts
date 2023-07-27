/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RegaccountMongoModel
 */
export type RegaccountMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  account?: string;
  type?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RegaccountRawModel
 */
export type RegaccountRawModel = {
  dac_id?: string;
  account?: string;
  type?: number;
  [key: string]: unknown;
};

