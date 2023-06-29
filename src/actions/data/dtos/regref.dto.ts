/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} RegrefMongoModel
 */
export type RegrefMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  value?: string;
  type?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} RegrefRawModel
 */
export type RegrefRawModel = {
  dac_id?: string;
  value?: string;
  type?: number;
  [key: string]: unknown;
};

