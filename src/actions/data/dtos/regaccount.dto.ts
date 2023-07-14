/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:23:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

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

