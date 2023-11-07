/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 12:20:50 GMT
 */

import { Dacglobals, Dacs, Nftcache } from '../../domain/entities';
import {
  ContractDelta,
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/index-worlds-delta';
import { IndexWorldsDeltaMongoModel, IndexWorldsDeltaRawModel } from '../dtos';
import { IndexWorldsTableName } from '../../domain/enums';
import {
  DacglobalsMongoMapper,
  DacglobalsRawMapper,
} from './dacglobals.mapper';
import { DacsMongoMapper, DacsRawMapper } from './dacs.mapper';
import { NftcacheMongoMapper, NftcacheRawMapper } from './nftcache.mapper';

// Mongo Mapper
export class IndexWorldsDeltaMongoMapper extends MongoMapper<
  ContractDelta<DataEntityType>,
  IndexWorldsDeltaMongoModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): IndexWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case IndexWorldsTableName.Dacglobals:
        entityData = new DacglobalsMongoMapper().fromEntity(
          entity.data as Dacglobals
        );
        break;
      case IndexWorldsTableName.Dacs:
        entityData = new DacsMongoMapper().fromEntity(entity.data as Dacs);
        break;
      case IndexWorldsTableName.Nftcache:
        entityData = new NftcacheMongoMapper().fromEntity(
          entity.data as Nftcache
        );
        break;
    }

    const model: IndexWorldsDeltaMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_num: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id = new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: IndexWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case IndexWorldsTableName.Dacglobals:
        data = new DacglobalsMongoMapper().toEntity(mongoModel.data);
        break;
      case IndexWorldsTableName.Dacs:
        data = new DacsMongoMapper().toEntity(mongoModel.data);
        break;
      case IndexWorldsTableName.Nftcache:
        data = new NftcacheMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_num,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_num),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class IndexWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, IndexWorldsDeltaRawModel>,
  IndexWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, IndexWorldsDeltaRawModel>
  ): IndexWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: IndexWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, IndexWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case IndexWorldsTableName.Dacglobals:
        data = new DacglobalsRawMapper().toEntity(rawModel.data);
        break;
      case IndexWorldsTableName.Dacs:
        data = new DacsRawMapper().toEntity(rawModel.data);
        break;
      case IndexWorldsTableName.Nftcache:
        data = new NftcacheRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_num,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, IndexWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_num),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}
