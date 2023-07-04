/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Tue, 04 Jul 2023 13:56:09 GMT
 */

import { MongoSource, MongoCollectionSource } from '@alien-worlds/storage-mongodb';
import { IndexWorldsDeltaMongoModel } from '../dtos';

/**
 * @class
 */
export class IndexWorldsDeltaMongoSource extends MongoCollectionSource<IndexWorldsDeltaMongoModel> {
  /**
   * @constructor
   * @param {MongoSource} mongoSource
   */
  constructor(mongoSource: MongoSource) {
    super(mongoSource, 'index.worlds_deltas', {
      indexes: [
        { key: { block_num: 1 }, background: true },
        { key: { code: 1, table: 1 }, background: true },
        { key: { code: 1, scope: 1, table: 1 }, background: true },
        {
          key: {
            block_num: 1,
            data_hash: 1,
            code: 1,
            scope: 1,
            table: 1,
            primary_key: 1,
            payer: 1,
            present: 1,
          },
          unique: true,
          background: true,
        },
      ],
    });
  }
}
