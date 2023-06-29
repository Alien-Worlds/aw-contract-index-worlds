/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 29 Jun 2023 08:14:15 GMT
 */


import { 
  Dacglobals,
  Dacs,
  Nftcache,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/index-worlds-delta';
import { IndexWorldsDeltaMongoModel } from '../dtos';
import { IndexWorldsTableName } from '../../domain/enums';
import { DacglobalsMongoMapper } from "./dacglobals.mapper";
import { DacsMongoMapper } from "./dacs.mapper";
import { NftcacheMongoMapper } from "./nftcache.mapper";

export class IndexWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType, IndexWorldsDeltaMongoModel>, IndexWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType, IndexWorldsDeltaMongoModel>
  ): IndexWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case IndexWorldsTableName.Dacglobals:
        entityData = new DacglobalsMongoMapper().fromEntity(entity.delta as Dacglobals);
        break;
      case IndexWorldsTableName.Dacs:
        entityData = new DacsMongoMapper().fromEntity(entity.delta as Dacs);
        break;
      case IndexWorldsTableName.Nftcache:
        entityData = new NftcacheMongoMapper().fromEntity(entity.delta as Nftcache);
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data_hash: entity.deltaHash,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: IndexWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType, IndexWorldsDeltaMongoModel> {
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
      block_number,
      code,
      scope,
      table,
      data_hash,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType, IndexWorldsDeltaMongoModel>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data_hash,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}