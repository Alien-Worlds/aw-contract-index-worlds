/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:09 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DacglobalsMongoModel
 */
export type DacglobalsMongoModel = {
  _id?: MongoDB.ObjectId;
  data?: PairStringStateValueVariantMongoModel[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairStringStateValueVariantMongoModel
 */
export type PairStringStateValueVariantMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: string;
  value?: Array<unknown>;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DacglobalsRawModel
 */
export type DacglobalsRawModel = {
  data?: PairStringStateValueVariantRawModel[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairStringStateValueVariantRawModel
 */
export type PairStringStateValueVariantRawModel = {
  key?: string;
  value?: Array<unknown>;
  [key: string]: unknown;
};

