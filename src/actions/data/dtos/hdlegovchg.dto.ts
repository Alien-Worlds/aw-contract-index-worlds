/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:23:27 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} HdlegovchgMongoModel
 */
export type HdlegovchgMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} HdlegovchgRawModel
 */
export type HdlegovchgRawModel = {
  dac_id?: string;
  [key: string]: unknown;
};

