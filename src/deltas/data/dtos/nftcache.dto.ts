/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:12:11 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} NftcacheMongoModel
 */
export type NftcacheMongoModel = {
  _id?: MongoDB.ObjectId;
  nft_id?: number;
  schema_name?: string;
  value?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} NftcacheRawModel
 */
export type NftcacheRawModel = {
  nft_id?: number;
  schema_name?: string;
  value?: number;
  [key: string]: unknown;
};

