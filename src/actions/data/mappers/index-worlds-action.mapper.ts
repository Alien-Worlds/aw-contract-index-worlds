/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 06 Jul 2023 15:42:04 GMT
 */


import { 
  Hdlegovchg,
  Regaccount,
  Regdac,
  Regref,
  Setowner,
  Setsociallnk,
  Setsocials,
  Setstatus,
  Settitle,
  Unregaccount,
  Unregdac,
  Unregref,
} from '../../domain/entities';
import { 
  ContractAction, 
  MapperImpl, 
  parseToBigInt 
} from '@alien-worlds/api-core';

import { HdlegovchgMongoMapper, HdlegovchgRawMapper } from "./hdlegovchg.mapper";
import { RegaccountMongoMapper, RegaccountRawMapper } from "./regaccount.mapper";
import { RegdacMongoMapper, RegdacRawMapper } from "./regdac.mapper";
import { RegrefMongoMapper, RegrefRawMapper } from "./regref.mapper";
import { SetownerMongoMapper, SetownerRawMapper } from "./setowner.mapper";
import { SetsociallnkMongoMapper, SetsociallnkRawMapper } from "./setsociallnk.mapper";
import { SetsocialsMongoMapper, SetsocialsRawMapper } from "./setsocials.mapper";
import { SetstatusMongoMapper, SetstatusRawMapper } from "./setstatus.mapper";
import { SettitleMongoMapper, SettitleRawMapper } from "./settitle.mapper";
import { UnregaccountMongoMapper, UnregaccountRawMapper } from "./unregaccount.mapper";
import { UnregdacMongoMapper, UnregdacRawMapper } from "./unregdac.mapper";
import { UnregrefMongoMapper, UnregrefRawMapper } from "./unregref.mapper";
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/index-worlds-action';
import { 
  IndexWorldsActionMongoModel,
  IndexWorldsActionRawModel,
  HdlegovchgMongoModel,
  HdlegovchgRawModel,
  RegaccountMongoModel,
  RegaccountRawModel,
  RegdacMongoModel,
  RegdacRawModel,
  RegrefMongoModel,
  RegrefRawModel,
  SetownerMongoModel,
  SetownerRawModel,
  SetsociallnkMongoModel,
  SetsociallnkRawModel,
  SetsocialsMongoModel,
  SetsocialsRawModel,
  SetstatusMongoModel,
  SetstatusRawModel,
  SettitleMongoModel,
  SettitleRawModel,
  UnregaccountMongoModel,
  UnregaccountRawModel,
  UnregdacMongoModel,
  UnregdacRawModel,
  UnregrefMongoModel,
  UnregrefRawModel,
} from '../dtos';
import { IndexWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class IndexWorldsActionMongoMapper
  extends MapperImpl<ContractAction<DataEntityType, IndexWorldsActionMongoModel>, IndexWorldsActionMongoModel>
{
  public fromEntity(
    entity: ContractAction<DataEntityType, IndexWorldsActionMongoModel>
  ): IndexWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case IndexWorldsActionName.Hdlegovchg:
        entityData = new HdlegovchgMongoMapper().fromEntity(
          entity.data as Hdlegovchg
        );
        break;
      case IndexWorldsActionName.Regaccount:
        entityData = new RegaccountMongoMapper().fromEntity(
          entity.data as Regaccount
        );
        break;
      case IndexWorldsActionName.Regdac:
        entityData = new RegdacMongoMapper().fromEntity(
          entity.data as Regdac
        );
        break;
      case IndexWorldsActionName.Regref:
        entityData = new RegrefMongoMapper().fromEntity(
          entity.data as Regref
        );
        break;
      case IndexWorldsActionName.Setowner:
        entityData = new SetownerMongoMapper().fromEntity(
          entity.data as Setowner
        );
        break;
      case IndexWorldsActionName.Setsociallnk:
        entityData = new SetsociallnkMongoMapper().fromEntity(
          entity.data as Setsociallnk
        );
        break;
      case IndexWorldsActionName.Setsocials:
        entityData = new SetsocialsMongoMapper().fromEntity(
          entity.data as Setsocials
        );
        break;
      case IndexWorldsActionName.Setstatus:
        entityData = new SetstatusMongoMapper().fromEntity(
          entity.data as Setstatus
        );
        break;
      case IndexWorldsActionName.Settitle:
        entityData = new SettitleMongoMapper().fromEntity(
          entity.data as Settitle
        );
        break;
      case IndexWorldsActionName.Unregaccount:
        entityData = new UnregaccountMongoMapper().fromEntity(
          entity.data as Unregaccount
        );
        break;
      case IndexWorldsActionName.Unregdac:
        entityData = new UnregdacMongoMapper().fromEntity(
          entity.data as Unregdac
        );
        break;
      case IndexWorldsActionName.Unregref:
        entityData = new UnregrefMongoMapper().fromEntity(
          entity.data as Unregref
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };
  }

  public toEntity(
    mongoModel: IndexWorldsActionMongoModel
  ): ContractAction<DataEntityType, IndexWorldsActionMongoModel> {
    let data;
    switch (mongoModel.action.name) {
      case IndexWorldsActionName.Hdlegovchg:
        data = new HdlegovchgMongoMapper().toEntity(
          mongoModel.action.data as HdlegovchgMongoModel
        );
        break;
      case IndexWorldsActionName.Regaccount:
        data = new RegaccountMongoMapper().toEntity(
          mongoModel.action.data as RegaccountMongoModel
        );
        break;
      case IndexWorldsActionName.Regdac:
        data = new RegdacMongoMapper().toEntity(
          mongoModel.action.data as RegdacMongoModel
        );
        break;
      case IndexWorldsActionName.Regref:
        data = new RegrefMongoMapper().toEntity(
          mongoModel.action.data as RegrefMongoModel
        );
        break;
      case IndexWorldsActionName.Setowner:
        data = new SetownerMongoMapper().toEntity(
          mongoModel.action.data as SetownerMongoModel
        );
        break;
      case IndexWorldsActionName.Setsociallnk:
        data = new SetsociallnkMongoMapper().toEntity(
          mongoModel.action.data as SetsociallnkMongoModel
        );
        break;
      case IndexWorldsActionName.Setsocials:
        data = new SetsocialsMongoMapper().toEntity(
          mongoModel.action.data as SetsocialsMongoModel
        );
        break;
      case IndexWorldsActionName.Setstatus:
        data = new SetstatusMongoMapper().toEntity(
          mongoModel.action.data as SetstatusMongoModel
        );
        break;
      case IndexWorldsActionName.Settitle:
        data = new SettitleMongoMapper().toEntity(
          mongoModel.action.data as SettitleMongoModel
        );
        break;
      case IndexWorldsActionName.Unregaccount:
        data = new UnregaccountMongoMapper().toEntity(
          mongoModel.action.data as UnregaccountMongoModel
        );
        break;
      case IndexWorldsActionName.Unregdac:
        data = new UnregdacMongoMapper().toEntity(
          mongoModel.action.data as UnregdacMongoModel
        );
        break;
      case IndexWorldsActionName.Unregref:
        data = new UnregrefMongoMapper().toEntity(
          mongoModel.action.data as UnregrefMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType, IndexWorldsActionMongoModel>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data,
    );
  }
}

// Processor Task Mapper
export class IndexWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, IndexWorldsActionRawModel>,
  IndexWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, IndexWorldsActionRawModel>
  ): IndexWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: IndexWorldsActionRawModel
  ): ContractAction<DataEntityType, IndexWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case IndexWorldsActionName.Hdlegovchg:
        data = new HdlegovchgRawMapper().toEntity(
          rawModel.data as HdlegovchgRawModel
        );
        break;
      case IndexWorldsActionName.Regaccount:
        data = new RegaccountRawMapper().toEntity(
          rawModel.data as RegaccountRawModel
        );
        break;
      case IndexWorldsActionName.Regdac:
        data = new RegdacRawMapper().toEntity(
          rawModel.data as RegdacRawModel
        );
        break;
      case IndexWorldsActionName.Regref:
        data = new RegrefRawMapper().toEntity(
          rawModel.data as RegrefRawModel
        );
        break;
      case IndexWorldsActionName.Setowner:
        data = new SetownerRawMapper().toEntity(
          rawModel.data as SetownerRawModel
        );
        break;
      case IndexWorldsActionName.Setsociallnk:
        data = new SetsociallnkRawMapper().toEntity(
          rawModel.data as SetsociallnkRawModel
        );
        break;
      case IndexWorldsActionName.Setsocials:
        data = new SetsocialsRawMapper().toEntity(
          rawModel.data as SetsocialsRawModel
        );
        break;
      case IndexWorldsActionName.Setstatus:
        data = new SetstatusRawMapper().toEntity(
          rawModel.data as SetstatusRawModel
        );
        break;
      case IndexWorldsActionName.Settitle:
        data = new SettitleRawMapper().toEntity(
          rawModel.data as SettitleRawModel
        );
        break;
      case IndexWorldsActionName.Unregaccount:
        data = new UnregaccountRawMapper().toEntity(
          rawModel.data as UnregaccountRawModel
        );
        break;
      case IndexWorldsActionName.Unregdac:
        data = new UnregdacRawMapper().toEntity(
          rawModel.data as UnregdacRawModel
        );
        break;
      case IndexWorldsActionName.Unregref:
        data = new UnregrefRawMapper().toEntity(
          rawModel.data as UnregrefRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, IndexWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
