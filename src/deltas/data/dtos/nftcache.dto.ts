/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
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
  nft_id?: MongoDB.Long;
  schema_name?: string;
  value?: MongoDB.Long;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} NftcacheRawModel
 */
export type NftcacheRawModel = {
  nft_id?: bigint;
  schema_name?: string;
  value?: bigint;
  [key: string]: unknown;
};

