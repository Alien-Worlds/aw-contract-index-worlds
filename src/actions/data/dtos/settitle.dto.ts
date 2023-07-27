/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} SettitleMongoModel
 */
export type SettitleMongoModel = {
  _id?: MongoDB.ObjectId;
  dac_id?: string;
  title?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} SettitleRawModel
 */
export type SettitleRawModel = {
  dac_id?: string;
  title?: string;
  [key: string]: unknown;
};

