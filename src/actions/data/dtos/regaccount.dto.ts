/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:50:20 GMT
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

